import { Shield, Target, Globe, TrendingUp } from 'lucide-react';
import { Card } from '@/app/components/ui/card';

export function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            About Navex
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Your trusted partner for comprehensive import-export logistics solutions across India
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
              <p className="text-gray-600 mb-4">
                Navex is a leading logistics provider based in India, specializing in end-to-end import and export solutions. With years of expertise in international trade, customs clearance, and inland transport, we help businesses navigate the complexities of global logistics.
              </p>
              <p className="text-gray-600 mb-4">
                Our team of experienced professionals ensures seamless handling of your cargo from origin to destination, backed by cutting-edge tracking technology and comprehensive compliance management.
              </p>
              <p className="text-gray-600">
                We pride ourselves on transparency, reliability, and customer-centric service delivery, making us the preferred logistics partner for businesses across diverse industries.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center border-2 border-primary/20">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-gray-600">Shipments Handled</div>
              </Card>
              <Card className="p-6 text-center border-2 border-primary/20">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-gray-600">Countries Served</div>
              </Card>
              <Card className="p-6 text-center border-2 border-primary/20">
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </Card>
              <Card className="p-6 text-center border-2 border-primary/20">
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-gray-600">On-Time Delivery</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-2 border-primary/20">
              <Target className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide reliable, efficient, and transparent logistics solutions that empower businesses to expand their global reach. We strive to simplify international trade through innovative technology and exceptional service.
              </p>
            </Card>
            <Card className="p-8 border-2 border-primary/20">
              <Globe className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To become the leading international logistics provider, connecting businesses worldwide with seamless, technology-driven supply chain solutions that drive growth and success.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Compliance Focus */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Compliance & Expertise</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Full compliance with Indian regulations and international standards
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">IEC Compliance</h3>
              <p className="text-gray-600">
                Full adherence to Import Export Code regulations and requirements
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">GST Management</h3>
              <p className="text-gray-600">
                Expert handling of GST documentation and compliance
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customs Expertise</h3>
              <p className="text-gray-600">
                Specialized knowledge of customs procedures and clearance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <TrendingUp className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">Global Expansion Ready</h2>
          <p className="text-xl text-white/90">
            Built for the future with scalable infrastructure, multi-country operations, and international partnerships to serve your growing business needs worldwide.
          </p>
        </div>
      </section>
    </div>
  );
}
