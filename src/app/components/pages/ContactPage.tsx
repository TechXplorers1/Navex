import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Card } from '@/app/components/ui/card';

export function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Contact Us
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Get in touch with our logistics experts
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 text-center border-2 hover:border-primary/20 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Office Address</h3>
              <p className="text-sm text-gray-600">
                123 Business District<br />
                Mumbai, Maharashtra<br />
                India - 400001
              </p>
            </Card>

            <Card className="p-6 text-center border-2 hover:border-primary/20 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-sm text-gray-600">
                +91 98765 43210<br />
                +91 98765 43211<br />
                (WhatsApp Available)
              </p>
            </Card>

            <Card className="p-6 text-center border-2 hover:border-primary/20 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-sm text-gray-600">
                info@navex.com<br />
                support@navex.com<br />
                sales@navex.com
              </p>
            </Card>

            <Card className="p-6 text-center border-2 hover:border-primary/20 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Business Hours</h3>
              <p className="text-sm text-gray-600">
                Mon - Fri: 9:00 AM - 6:00 PM<br />
                Sat: 9:00 AM - 2:00 PM<br />
                Sun: Closed
              </p>
            </Card>
          </div>

          {/* Map Placeholder */}
          <Card className="overflow-hidden border-2">
            <div className="bg-gray-200 h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <p className="text-lg font-medium">Map Location</p>
                <p className="text-sm">Mumbai Office - Business District</p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
