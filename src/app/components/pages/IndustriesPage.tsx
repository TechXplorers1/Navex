import { Car, Cpu, Factory, Hammer, HeartPulse, Package2, ShoppingCart, Zap } from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { motion } from 'motion/react';

interface IndustriesPageProps {
  onNavigate?: (page: string) => void;
}

export function IndustriesPage({ onNavigate }: IndustriesPageProps) {
  const industries = [
    {
      icon: Car,
      title: 'Automotive',
      description: 'Complete vehicle import services, spare parts logistics, and RTO registration support.',
      services: [
        'Vehicle Import & Export',
        'Automotive Parts Logistics',
        'RTO Registration',
        'Homologation Support'
      ],
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: Cpu,
      title: 'Electronics & Technology',
      description: 'Specialized handling for sensitive electronic goods with climate-controlled transport.',
      services: [
        'Consumer Electronics',
        'IT Equipment',
        'Temperature-controlled Storage',
        'Anti-static Packaging'
      ],
      color: 'from-purple-600 to-purple-700'
    },
    {
      icon: Factory,
      title: 'Industrial Machinery',
      description: 'Heavy equipment logistics including ODC cargo, breakbulk, and project cargo handling.',
      services: [
        'Heavy Machinery Transport',
        'ODC Cargo Handling',
        'Project Cargo Solutions',
        'Installation Coordination'
      ],
      color: 'from-gray-700 to-gray-800'
    },
    {
      icon: Hammer,
      title: 'Construction & Building',
      description: 'Bulk material handling and construction equipment logistics across India.',
      services: [
        'Building Materials',
        'Construction Equipment',
        'Bulk Cargo Handling',
        'Site Delivery Services'
      ],
      color: 'from-orange-600 to-orange-700'
    },
    {
      icon: HeartPulse,
      title: 'Healthcare & Pharma',
      description: 'Temperature-controlled logistics for medical equipment, pharma products, and supplies.',
      services: [
        'Medical Equipment Import',
        'Pharmaceutical Logistics',
        'Cold Chain Solutions',
        'Regulatory Compliance'
      ],
      color: 'from-red-600 to-red-700'
    },
    {
      icon: ShoppingCart,
      title: 'Retail & FMCG',
      description: 'Fast-moving consumer goods distribution with efficient warehousing solutions.',
      services: [
        'FMCG Distribution',
        'Retail Inventory Management',
        'Last-mile Delivery',
        'Cross-docking Services'
      ],
      color: 'from-green-600 to-green-700'
    },
    {
      icon: Package2,
      title: 'E-commerce',
      description: 'Rapid fulfillment services for online businesses with integrated tracking.',
      services: [
        'Fulfillment Services',
        'Returns Management',
        'Multi-channel Integration',
        'Express Delivery Options'
      ],
      color: 'from-indigo-600 to-indigo-700'
    },
    {
      icon: Zap,
      title: 'Energy & Power',
      description: 'Specialized transport for solar panels, wind turbines, and energy equipment.',
      services: [
        'Solar Panel Logistics',
        'Wind Energy Components',
        'Power Equipment',
        'Renewable Energy Support'
      ],
      color: 'from-yellow-600 to-yellow-700'
    }
  ];

  const caseStudies = [
    {
      industry: 'Automotive',
      client: 'Luxury Vehicle Importer',
      challenge: 'Import 50 luxury SUVs from Germany with complete RTO registration',
      solution: 'End-to-end vehicle import service including customs clearance, transport, and RTO coordination',
      result: '100% on-time delivery with zero damage claims'
    },
    {
      industry: 'Industrial',
      client: 'Manufacturing Plant',
      challenge: 'Transport oversized CNC machines from Japan to Pune facility',
      solution: 'ODC cargo handling with specialized equipment and route planning',
      result: 'Successful delivery of 15-ton machinery with installation support'
    },
    {
      industry: 'Healthcare',
      client: 'Hospital Chain',
      challenge: 'Import temperature-sensitive medical equipment from USA',
      solution: 'Cold chain logistics with real-time temperature monitoring',
      result: 'Maintained 2-8°C throughout 45-day transit period'
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
            Industries We Serve
          </motion.h1>
          <motion.p 
            className="text-xl text-white/90 max-w-3xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Specialized logistics solutions tailored to your industry's unique requirements. 
            From automotive to healthcare, we have the expertise to handle your cargo.
          </motion.p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Expertise Across Multiple Sectors
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Industry-specific solutions backed by years of experience
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
          >
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                >
                  <Card className="p-6 hover:shadow-xl transition-all h-full group cursor-pointer">
                    <div className={`w-14 h-14 bg-gradient-to-br ${industry.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 
                      className="text-lg font-bold text-gray-900 mb-3"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {industry.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {industry.description}
                    </p>
                    <ul className="space-y-2">
                      {industry.services.map((service, idx) => (
                        <li key={idx} className="text-xs text-gray-700 flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                          {service}
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

      {/* Case Studies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real-world examples of how we've helped businesses across industries
            </p>
          </motion.div>

          <motion.div 
            className="space-y-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
          >
            {caseStudies.map((study, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-8 hover:shadow-lg transition-shadow">
                  <div className="grid md:grid-cols-4 gap-6">
                    <div>
                      <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-lg text-sm font-bold mb-2">
                        {study.industry}
                      </div>
                      <h3 
                        className="text-xl font-bold text-gray-900"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {study.client}
                      </h3>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-700 mb-2">Challenge</p>
                      <p className="text-sm text-gray-600">{study.challenge}</p>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-700 mb-2">Solution</p>
                      <p className="text-sm text-gray-600">{study.solution}</p>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-700 mb-2">Result</p>
                      <p className="text-sm text-green-700 font-medium">{study.result}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industry Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="bg-gradient-to-br from-primary to-blue-800 rounded-2xl p-12"
            {...fadeInUp}
          >
            <h2 
              className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Our Industry Impact
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="text-4xl font-bold text-white mb-2">8+</div>
                <p className="text-white/90">Industries Served</p>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="text-4xl font-bold text-white mb-2">500+</div>
                <p className="text-white/90">Corporate Clients</p>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="text-4xl font-bold text-white mb-2">98%</div>
                <p className="text-white/90">Client Retention Rate</p>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="text-4xl font-bold text-white mb-2">100%</div>
                <p className="text-white/90">Compliance Record</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Different Industries Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Why Industries Trust Navex
            </h2>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeInUp}>
              <Card className="p-6 text-center h-full">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 
                  className="text-lg font-bold text-gray-900 mb-3"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Industry Expertise
                </h3>
                <p className="text-sm text-gray-600">
                  Deep understanding of sector-specific regulations, handling requirements, and compliance standards
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="p-6 text-center h-full">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🔒</span>
                </div>
                <h3 
                  className="text-lg font-bold text-gray-900 mb-3"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Specialized Handling
                </h3>
                <p className="text-sm text-gray-600">
                  Equipment and processes tailored to handle fragile, hazardous, oversized, and sensitive cargo
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="p-6 text-center h-full">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 
                  className="text-lg font-bold text-gray-900 mb-3"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Custom Solutions
                </h3>
                <p className="text-sm text-gray-600">
                  Flexible logistics solutions designed around your industry's unique challenges and requirements
                </p>
              </Card>
            </motion.div>
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
            Let's Discuss Your Industry Needs
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Get a customized logistics solution designed for your specific industry
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90"
              onClick={() => onNavigate?.('quote')}
            >
              Request Industry-Specific Quote
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => onNavigate?.('contact')}
            >
              Schedule Consultation
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
