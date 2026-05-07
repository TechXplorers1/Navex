import { ClipboardList, FileCheck, Ship, Anchor, Truck, CheckCircle2, AlertCircle } from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { motion } from 'motion/react';

interface HowItWorksPageProps {
  onNavigate?: (page: string) => void;
}

export function HowItWorksPage({ onNavigate }: HowItWorksPageProps) {
  const steps = [
    {
      number: 1,
      icon: ClipboardList,
      title: 'Request a Quote',
      description: 'Share your shipment details including cargo type, origin, destination, and timeline.',
      details: [
        'Submit inquiry online or call us',
        'Provide cargo specifications',
        'Receive competitive quote within 24 hours',
        'Free consultation available'
      ],
      color: 'bg-blue-600'
    },
    {
      number: 2,
      icon: FileCheck,
      title: 'Documentation & Booking',
      description: 'We handle all paperwork and book your shipment with trusted carriers.',
      details: [
        'Commercial invoice preparation',
        'Bill of lading & packing list',
        'Export/Import licenses',
        'Container booking confirmation'
      ],
      color: 'bg-blue-700'
    },
    {
      number: 3,
      icon: Ship,
      title: 'Cargo Collection & Shipping',
      description: 'Your cargo is collected, containerized, and shipped via sea or air.',
      details: [
        'Door pickup arranged',
        'Professional packing & loading',
        'Container sealing & documentation',
        'Vessel departure confirmation'
      ],
      color: 'bg-blue-800'
    },
    {
      number: 4,
      icon: Anchor,
      title: 'Customs Clearance',
      description: 'Expert customs brokerage ensures smooth clearance at destination port.',
      details: [
        'Pre-clearance documentation review',
        'Duty & tax calculation',
        'Customs inspection coordination',
        'Release order processing'
      ],
      color: 'bg-blue-900'
    },
    {
      number: 5,
      icon: Truck,
      title: 'Inland Transport',
      description: 'Container transported from port to your warehouse or facility.',
      details: [
        'GPS-tracked vehicles',
        'Secured transport',
        'Real-time updates',
        'Direct delivery coordination'
      ],
      color: 'bg-primary'
    },
    {
      number: 6,
      icon: CheckCircle2,
      title: 'Delivery & Closure',
      description: 'Final delivery with complete documentation and shipment closure.',
      details: [
        'Delivery confirmation',
        'POD (Proof of Delivery)',
        'Invoice & final documents',
        'Feedback collection'
      ],
      color: 'bg-green-600'
    }
  ];

  const importExportProcess = [
    {
      title: 'Import Process',
      icon: Ship,
      steps: [
        'Receive shipment details from overseas supplier',
        'IEC & import license verification',
        'Ocean freight booking & shipment',
        'Arrival notification & customs filing',
        'Duty payment & clearance',
        'Transport to consignee location'
      ]
    },
    {
      title: 'Export Process',
      icon: Truck,
      steps: [
        'Export order confirmation',
        'Pre-shipment inspection (if required)',
        'Export documentation preparation',
        'Cargo collection & containerization',
        'Customs clearance & loading',
        'Bill of lading issuance & tracking'
      ]
    }
  ];

  const trackingStages = [
    { stage: 'Order Confirmed', color: 'bg-blue-500' },
    { stage: 'In Transit', color: 'bg-blue-600' },
    { stage: 'At Port', color: 'bg-orange-500' },
    { stage: 'Customs Clearance', color: 'bg-orange-600' },
    { stage: 'Out for Delivery', color: 'bg-green-500' },
    { stage: 'Delivered', color: 'bg-green-600' }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.15 } },
    viewport: { once: true, margin: "-100px" }
  };

  const slideInLeft = {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
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
            How It Works
          </motion.h1>
          <motion.p 
            className="text-xl text-white/90 max-w-3xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A transparent, step-by-step process that ensures your cargo reaches its destination 
            safely and on time. Track every stage from booking to final delivery.
          </motion.p>
        </div>
      </section>

      {/* Main Process Steps */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Our 6-Step Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From initial quote to final delivery - we manage every detail
            </p>
          </motion.div>

          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div 
                  key={index} 
                  className="relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute left-12 top-24 w-0.5 h-16 bg-gray-300" />
                  )}
                  <Card className="p-6 md:p-8 hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row gap-6">
                      <motion.div 
                        className="flex-shrink-0"
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      >
                        <div className={`w-24 h-24 ${step.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                          <Icon className="w-12 h-12" />
                        </div>
                        <div className="text-center mt-2">
                          <span className="text-sm font-bold text-gray-500">STEP {step.number}</span>
                        </div>
                      </motion.div>
                      <div className="flex-1">
                        <h3 
                          className="text-2xl font-bold text-gray-900 mb-3"
                          style={{ fontFamily: 'var(--font-heading)' }}
                        >
                          {step.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {step.description}
                        </p>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {step.details.map((detail, idx) => (
                            <div key={idx} className="flex items-start">
                              <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-700">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Import vs Export */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Import & Export Workflows
            </h2>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
          >
            {importExportProcess.map((process, index) => {
              const Icon = process.icon;
              return (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="p-6 h-full">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 
                        className="text-xl font-bold text-gray-900"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {process.title}
                      </h3>
                    </div>
                    <ol className="space-y-3">
                      {process.steps.map((stepItem, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                            {idx + 1}
                          </span>
                          <span className="text-sm text-gray-700 flex-1">{stepItem}</span>
                        </li>
                      ))}
                    </ol>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Tracking Stages */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Shipment Tracking Stages
            </h2>
            <p className="text-lg text-gray-600">
              Track your shipment through every stage in real-time
            </p>
          </motion.div>

          <motion.div 
            className="bg-white rounded-2xl shadow-sm p-8"
            {...fadeInUp}
          >
            <div className="flex flex-wrap gap-4 justify-center">
              {trackingStages.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className={`${item.color} text-white px-6 py-3 rounded-lg font-medium text-sm shadow-sm`}>
                    {item.stage}
                  </div>
                  {index < trackingStages.length - 1 && (
                    <div className="w-8 h-0.5 bg-gray-300 mx-2 hidden sm:block" />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <Card className="bg-blue-50 border-blue-200 p-8">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 
                    className="text-xl font-bold text-gray-900 mb-4"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Important Information
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Timeline depends on origin, destination, and cargo type (typically 15-45 days for sea freight)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>All shipments are covered with marine cargo insurance for added security</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Real-time tracking available through our customer portal</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Dedicated account manager assigned to each shipment</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <motion.div 
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          {...fadeInUp}
        >
          <h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Ready to Ship?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Get started with your first shipment today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90"
              onClick={() => onNavigate?.('quote')}
            >
              Request Quote
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => onNavigate?.('customer-login')}
            >
              Customer Login
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}