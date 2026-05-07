import { Ship, FileCheck, Truck, Package, Globe, Shield, Clock, CheckCircle2 } from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { motion } from 'motion/react';

interface ServicesPageProps {
  onNavigate?: (page: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const mainServices = [
    {
      icon: Ship,
      title: 'Sea Freight',
      description: 'Full Container Load (FCL) and Less than Container Load (LCL) services for efficient ocean shipping.',
      features: [
        'FCL & LCL Services',
        'Door-to-Door Delivery',
        'Breakbulk & Project Cargo',
        'Real-time Tracking'
      ]
    },
    {
      icon: FileCheck,
      title: 'Customs Clearance',
      description: 'Expert customs brokerage services ensuring smooth clearance of your imports and exports.',
      features: [
        'Import/Export Documentation',
        'Duty & Tax Calculation',
        'IEC Registration Support',
        'GST Compliance'
      ]
    },
    {
      icon: Truck,
      title: 'Inland Transportation',
      description: 'Reliable transport solutions from port to your doorstep across India.',
      features: [
        'Container Transport',
        'Vehicle Movement',
        'ODC (Over Dimensional Cargo)',
        'GPS-enabled Fleet'
      ]
    },
    {
      icon: Package,
      title: 'Warehousing & Storage',
      description: 'Secure storage facilities for your cargo with advanced inventory management.',
      features: [
        'Bonded Warehousing',
        'Free Trade Warehousing',
        'Inventory Management',
        'Short & Long-term Storage'
      ]
    },
    {
      icon: Globe,
      title: 'Vehicle Import',
      description: 'Specialized services for importing cars, bikes, and commercial vehicles.',
      features: [
        'RTO Registration',
        'Homologation Support',
        'Insurance Coordination',
        'Vehicle Modifications'
      ]
    },
    {
      icon: Shield,
      title: 'Insurance & Risk',
      description: 'Comprehensive cargo insurance to protect your shipments worldwide.',
      features: [
        'Marine Cargo Insurance',
        'All-Risk Coverage',
        'Claims Assistance',
        'Door-to-Door Protection'
      ]
    }
  ];

  const additionalServices = [
    {
      icon: Clock,
      title: 'Express Services',
      description: 'Time-critical shipments handled with priority processing'
    },
    {
      icon: FileCheck,
      title: 'Documentation',
      description: 'Complete preparation and verification of shipping documents'
    },
    {
      icon: CheckCircle2,
      title: 'Compliance',
      description: 'Regulatory compliance and certification support'
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
    viewport: { once: true, margin: "-100px" }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6" 
            style={{ fontFamily: 'var(--font-heading)' }}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Services
          </motion.h1>
          <motion.p 
            className="text-xl text-white/90 max-w-3xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comprehensive logistics solutions tailored to your business needs. From customs clearance 
            to final delivery, we handle every aspect of your import and export operations.
          </motion.p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Core Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              End-to-end logistics solutions designed to simplify your supply chain
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
          >
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                >
                  <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 
                      className="text-xl font-bold text-gray-900 mb-3"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Additional Services
            </h2>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
          >
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div key={index} className="text-center" variants={fadeInUp}>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 
                    className="text-lg font-bold text-gray-900 mb-2"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="bg-gradient-to-br from-primary to-blue-800 text-white rounded-2xl p-12"
            {...fadeInUp}
          >
            <h2 
              className="text-3xl md:text-4xl font-bold mb-8 text-center"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Why Choose Navex?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="text-4xl font-bold mb-2">15+</div>
                <p className="text-white/90">Years Experience</p>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="text-4xl font-bold mb-2">5000+</div>
                <p className="text-white/90">Successful Shipments</p>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="text-4xl font-bold mb-2">24/7</div>
                <p className="text-white/90">Customer Support</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <motion.div 
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          {...fadeInUp}
        >
          <h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us today for a customized logistics solution for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90"
              onClick={() => onNavigate?.('quote')}
            >
              Get a Quote
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => onNavigate?.('contact')}
            >
              Contact Us
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}