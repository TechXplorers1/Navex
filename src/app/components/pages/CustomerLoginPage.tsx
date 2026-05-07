import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Ship, User, Lock } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

interface CustomerLoginPageProps {
  onLogin: (role: 'customer' | 'admin') => void;
}

export function CustomerLoginPage({ onLogin }: CustomerLoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock login logic
    if (email === 'admin@navex.com') {
      toast.success('Admin login successful!');
      onLogin('admin');
    } else {
      toast.success('Customer login successful!');
      onLogin('customer');
    }
  };

  const handleDemoLogin = (role: 'customer' | 'admin') => {
    if (role === 'customer') {
      toast.success('Customer login successful!');
      onLogin('customer');
    } else {
      toast.success('Admin login successful!');
      onLogin('admin');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary to-blue-800 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg">
              <Ship className="w-10 h-10 text-primary" />
            </div>
          </div>
          <h1 
            className="text-4xl font-bold text-white mb-2"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Navex
          </h1>
          <p className="text-white/80">Customer Portal Login</p>
        </div>

        <Card className="p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="email" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="password" className="flex items-center gap-2">
                <Lock className="w-4 h-4" />
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-2"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary hover:bg-primary/90"
            >
              Login to Portal
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t">
            <p className="text-sm text-gray-600 mb-3 text-center">Demo Login:</p>
            <div className="grid grid-cols-2 gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleDemoLogin('customer')}
                className="text-xs"
              >
                Customer Demo
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleDemoLogin('admin')}
                className="text-xs"
              >
                Admin Demo
              </Button>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Need access?{' '}
              <button className="text-primary hover:underline font-medium">
                Contact Support
              </button>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}