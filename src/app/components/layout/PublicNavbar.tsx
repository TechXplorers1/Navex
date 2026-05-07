import { Ship, Menu, X } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { useState } from 'react';

interface PublicNavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function PublicNavbar({ onNavigate, currentPage }: PublicNavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Services', page: 'services' },
    { label: 'How It Works', page: 'how-it-works' },
    { label: 'Industries', page: 'industries' },
    { label: 'Contact', page: 'contact' }
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Ship className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-primary" style={{ fontFamily: 'var(--font-heading)' }}>
              Navex
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => onNavigate(item.page)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === item.page
                    ? 'text-primary'
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              onClick={() => onNavigate('quote')}
            >
              Get a Quote
            </Button>
            <Button
              onClick={() => onNavigate('customer-login')}
              className="bg-primary hover:bg-primary/90"
            >
              Customer Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => {
                  onNavigate(item.page);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                  currentPage === item.page
                    ? 'bg-primary/10 text-primary'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-3 space-y-2">
              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  onNavigate('quote');
                  setMobileMenuOpen(false);
                }}
              >
                Get a Quote
              </Button>
              <Button
                className="w-full bg-primary hover:bg-primary/90"
                onClick={() => {
                  onNavigate('customer-login');
                  setMobileMenuOpen(false);
                }}
              >
                Customer Login
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
