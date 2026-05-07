import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { useState } from 'react';
import { toast } from 'sonner';

export function GetQuotePage() {
  const [formData, setFormData] = useState({
    serviceType: '',
    cargoType: '',
    originCountry: '',
    destination: '',
    contactName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Quote request submitted successfully! We will contact you soon.');
    setFormData({
      serviceType: '',
      cargoType: '',
      originCountry: '',
      destination: '',
      contactName: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Get a Quote
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Tell us about your logistics needs and we'll provide a customized quote
          </p>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 border-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="serviceType">Service Type *</Label>
                  <Select 
                    value={formData.serviceType}
                    onValueChange={(value) => setFormData({...formData, serviceType: value})}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="import">Import</SelectItem>
                      <SelectItem value="export">Export</SelectItem>
                      <SelectItem value="both">Both</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="cargoType">Cargo Type *</Label>
                  <Input
                    id="cargoType"
                    placeholder="e.g., Electronics, Machinery"
                    value={formData.cargoType}
                    onChange={(e) => setFormData({...formData, cargoType: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="originCountry">Origin Country *</Label>
                  <Input
                    id="originCountry"
                    placeholder="e.g., China, USA, Germany"
                    value={formData.originCountry}
                    onChange={(e) => setFormData({...formData, originCountry: e.target.value})}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="destination">Destination *</Label>
                  <Input
                    id="destination"
                    placeholder="e.g., Mumbai, Bangalore"
                    value={formData.destination}
                    onChange={(e) => setFormData({...formData, destination: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="contactName">Contact Name *</Label>
                  <Input
                    id="contactName"
                    placeholder="Your name"
                    value={formData.contactName}
                    onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>

              <div>
                <Label htmlFor="message">Additional Details</Label>
                <Textarea
                  id="message"
                  placeholder="Provide any additional information about your shipment requirements..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90"
              >
                Submit Quote Request
              </Button>
            </form>
          </Card>

          <div className="mt-8 text-center text-sm text-gray-600">
            <p>We typically respond within 24 hours. For urgent inquiries, please call us at +91 98765 43210</p>
          </div>
        </div>
      </section>
    </div>
  );
}
