import { 
  Ship, 
  Package, 
  FileCheck, 
  Container, 
  Car, 
  Truck,
  Globe,
  Shield,
  Users,
  TrendingUp,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const { scrollY } = useScroll();
  const [activeStep, setActiveStep] = useState(0);

  // Parallax effect for hero section
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.08 } },
    viewport: { once: true, margin: "-50px" }
  };

  const cardHover = {
    scale: 1.02,
    y: -4,
    transition: { duration: 0.2, ease: "easeOut" }
  };

  // Cycle through timeline steps for hero animation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 6);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: Package,
      title: 'Import Services',
      description: 'End-to-end import solutions from worldwide suppliers'
    },
    {
      icon: Ship,
      title: 'Export Services',
      description: 'Seamless export logistics to global markets'
    },
    {
      icon: FileCheck,
      title: 'Customs Clearance',
      description: 'Expert customs documentation and clearance'
    },
    {
      icon: Container,
      title: 'Container Handling',
      description: 'FCL and LCL container management services'
    },
    {
      icon: Car,
      title: 'Vehicle Import',
      description: 'Specialized vehicle import assistance'
    },
    {
      icon: Truck,
      title: 'Door-to-Door Logistics',
      description: 'Complete inland transport solutions'
    }
  ];

  const timeline = [
    { step: '1', label: 'Order / Purchase', icon: FileCheck },
    { step: '2', label: 'Shipping', icon: Ship },
    { step: '3', label: 'Port Arrival', icon: Container },
    { step: '4', label: 'Customs Clearance', icon: Shield },
    { step: '5', label: 'Inland Transport', icon: Truck },
    { step: '6', label: 'Final Delivery', icon: CheckCircle2 }
  ];

  const industries = [
    { name: 'Automobiles', icon: Car },
    { name: 'Machinery', icon: Package },
    { name: 'Electronics', icon: Package },
    { name: 'FMCG', icon: Package },
    { name: 'Industrial Goods', icon: Container },
    { name: 'Personal Cargo', icon: Package }
  ];

  const features = [
    {
      icon: Shield,
      title: 'India-based Compliance',
      description: 'Expert knowledge of IEC, GST, and customs regulations'
    },
    {
      icon: Globe,
      title: 'End-to-End Tracking',
      description: 'Real-time shipment visibility from origin to destination'
    },
    {
      icon: Users,
      title: 'Customer Portal',
      description: 'Dedicated dashboard for shipment and document management'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Operations',
      description: 'Ready for international expansion and growth'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Animated Route */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-blue-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1735047974891-df59713d8192?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMHNoaXAlMjBjb250YWluZXIlMjBwb3J0fGVufDF8fHx8MTc2ODgwMzQzMnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Cargo logistics"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Animated route flow visualization */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <svg className="w-full max-w-4xl h-32" viewBox="0 0 800 100">
            {/* Background path */}
            <motion.path
              d="M 50 50 Q 250 20, 400 50 T 750 50"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="2"
              fill="none"
            />
            
            {/* Animated path */}
            <motion.path
              d="M 50 50 Q 250 20, 400 50 T 750 50"
              stroke="rgba(249,115,22,0.6)"
              strokeWidth="3"
              fill="none"
              strokeDasharray="10 5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            {/* Moving truck icon */}
            <circle
              r="6"
              fill="#f97316"
            >
              <animateMotion
                dur="3s"
                repeatCount="indefinite"
                path="M 50 50 Q 250 20, 400 50 T 750 50"
              />
            </circle>
            
            {/* Origin marker */}
            <circle cx="50" cy="50" r="4" fill="white" opacity="0.8" />
            
            {/* Destination marker */}
            <circle cx="750" cy="50" r="4" fill="#f97316" opacity="0.8" />
          </svg>
        </div>

        <motion.div 
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <div className="max-w-3xl">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              Complete Import & Export Logistics Solutions
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white/90 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              From international shipping to customs clearance and final delivery across India.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  onClick={() => onNavigate('quote')}
                  className="bg-[#f97316] hover:bg-[#ea580c] text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get a Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => onNavigate('customer-login')}
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300"
                >
                  Customer Login
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-4" {...fadeInUp}>
            <p className="text-sm text-primary font-semibold mb-2 uppercase tracking-wider">What We Offer</p>
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Our Services
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              End-to-end logistics solutions tailored to simplify global trade and deliver your business forward
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              {
                icon: Package,
                title: 'Import Services',
                description: 'Comprehensive import solutions from global suppliers with full compliance support',
                image: 'https://images.unsplash.com/photo-1634638022229-5a52221886dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMHNoaXAlMjBjb250YWluZXJzJTIwcG9ydCUyMGxvZ2lzdGljc3xlbnwxfHx8fDE3Nzc2MTQxNjR8MA&ixlib=rb-4.1.0&q=80&w=1080'
              },
              {
                icon: Ship,
                title: 'Export Services',
                description: 'Seamless export logistics to global markets with real-time tracking',
                image: 'https://images.unsplash.com/photo-1713846047266-12aa96cbbb6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwbGFuZSUyMGNhcmdvJTIwcGxhbmUlMjBmbGlnaHR8ZW58MXx8fHwxNzc3NjE0MTY1fDA&ixlib=rb-4.1.0&q=80&w=1080'
              },
              {
                icon: FileCheck,
                title: 'Customs Clearance',
                description: 'Expert customs documentation and clearance with IEC and GST compliance',
                image: 'https://images.unsplash.com/photo-1632433105322-e410c2a20e49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21zJTIwY2xlYXJhbmNlJTIwZG9jdW1lbnRzfGVufDF8fHx8MTc3NzYxNDE2NXww&ixlib=rb-4.1.0&q=80&w=1080'
              },
              {
                icon: Container,
                title: 'Container Handling',
                description: 'FCL and LCL container management with secure port operations',
                image: 'https://images.unsplash.com/photo-1758777625576-09fc43631902?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwY29udGFpbmVyJTIwc2hpcHBpbmclMjBmcmVpZ2h0fGVufDF8fHx8MTc3NzYxNDE2NHww&ixlib=rb-4.1.0&q=80&w=1080'
              },
              {
                icon: Car,
                title: 'Vehicle Import',
                description: 'Specialized vehicle import assistance with complete documentation support',
                image: 'https://images.unsplash.com/photo-1558017431-109199de92fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxibHVlJTIwY2FyJTIwdmVoaWNsZSUyMHRyYW5zcG9ydHxlbnwxfHx8fDE3Nzc2MTQxNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
              },
              {
                icon: Truck,
                title: 'Door-to-Door Logistics',
                description: 'Complete inland transport solutions with last-mile delivery tracking',
                image: 'https://images.unsplash.com/photo-1759671934974-a4928e049dec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpdmVyeSUyMHRydWNrJTIwdHJhbnNwb3J0JTIwdmVoaWNsZXxlbnwxfHx8fDE3Nzc2MTQxNjV8MA&ixlib=rb-4.1.0&q=80&w=1080'
              }
            ].map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div key={idx} variants={fadeInUp}>
                  <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer border border-gray-100 h-full"
                    onClick={() => onNavigate('services')}
                  >
                    <div className="relative h-56 overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100">
                      <ImageWithFallback
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover mix-blend-multiply"
                      />
                      <div className="absolute top-4 left-4 w-14 h-14 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                      <button className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors group">
                        Learn More
                        <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Service Features */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              { icon: Shield, label: 'Verified Partners', desc: 'Only trusted carriers' },
              { icon: CheckCircle2, label: 'Insurance', desc: 'Full cargo protection' },
              { icon: Globe, label: 'API Integration', desc: 'Seamless tech stack' },
              { icon: TrendingUp, label: '5X Growth', desc: 'Scalable operations' }
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={idx}
                  className="flex items-center gap-3"
                  variants={fadeInUp}
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{feature.label}</p>
                    <p className="text-xs text-gray-600">{feature.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* How It Works Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-4" {...fadeInUp}>
            <p className="text-sm text-primary font-semibold mb-2 uppercase tracking-wider">Our Simple Process</p>
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              How It Works
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              End-to-end logistics solutions that simplify global trade, ensuring seamless movement from purchase to final delivery
            </p>
          </motion.div>

          {/* Desktop & Tablet Timeline */}
          <div className="hidden md:block mt-12">
            <div className="relative">
              {/* Dotted connector line */}
              <svg className="absolute top-12 left-0 right-0 h-1 w-full" style={{ zIndex: 0 }}>
                <line
                  x1="8%"
                  y1="50%"
                  x2="92%"
                  y2="50%"
                  stroke="#e5e7eb"
                  strokeWidth="2"
                  strokeDasharray="8,8"
                />
              </svg>

              <motion.div
                className="grid grid-cols-3 lg:grid-cols-6 gap-4 relative"
                variants={staggerContainer}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true, margin: "-50px" }}
              >
                {timeline.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={idx}
                      className="flex flex-col items-center text-center"
                      variants={fadeInUp}
                    >
                      <motion.div
                        whileHover={{ y: -4, scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        className="relative z-10"
                      >
                        <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-3 shadow-lg">
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                        <div className="absolute -top-2 -left-2 bg-white rounded-full px-2 py-1 shadow-md">
                          <span className="text-xs font-bold text-gray-600">{item.step}</span>
                        </div>
                      </motion.div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-2">{item.label}</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {idx === 0 && "Complete your purchase with full documentation support"}
                        {idx === 1 && "International shipping via sea, air, or land routes"}
                        {idx === 2 && "Arrival confirmation at designated Indian port"}
                        {idx === 3 && "Expert customs documentation and clearance"}
                        {idx === 4 && "Secure inland transport to destination city"}
                        {idx === 5 && "Last-mile delivery with real-time tracking"}
                      </p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            {/* Feature Badges */}
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-50px" }}
            >
              {[
                { icon: Shield, label: 'Real-time Tracking', desc: 'Monitor shipments 24/7' },
                { icon: CheckCircle2, label: 'Secure & Reliable', desc: 'Industry-best security' },
                { icon: Globe, label: '24/7 Support', desc: 'Always here to help' },
                { icon: TrendingUp, label: 'Global Network', desc: 'Worldwide coverage' }
              ].map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={idx}
                    className="flex items-center gap-3"
                    variants={fadeInUp}
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{feature.label}</p>
                      <p className="text-xs text-gray-600">{feature.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Mobile Timeline */}
          <motion.div
            className="md:hidden mt-8 space-y-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
          >
            {timeline.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  className="flex items-start gap-4"
                  variants={fadeInUp}
                >
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="absolute -top-1 -left-1 bg-white rounded-full px-1.5 py-0.5 shadow-md">
                      <span className="text-xs font-bold text-gray-600">{item.step}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-gray-900 mb-1">{item.label}</h3>
                    <p className="text-sm text-gray-600">
                      {idx === 0 && "Complete your purchase with full documentation support"}
                      {idx === 1 && "International shipping via sea, air, or land routes"}
                      {idx === 2 && "Arrival confirmation at designated Indian port"}
                      {idx === 3 && "Expert customs documentation and clearance"}
                      {idx === 4 && "Secure inland transport to destination city"}
                      {idx === 5 && "Last-mile delivery with real-time tracking"}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-4" {...fadeInUp}>
            <p className="text-sm text-primary font-semibold mb-2 uppercase tracking-wider">Industries We Serve</p>
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Industries We Serve
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Tailored logistics solutions for every industry, ensuring reliability, efficiency and specialized care across all sectors
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              {
                name: 'Automobiles',
                image: 'https://images.unsplash.com/photo-1610786662256-e48810bba51a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW9iaWxlJTIwY2FyJTIwZmFjdG9yeXxlbnwxfHx8fDE3Nzc2MTQxNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
                description: 'Specialized vehicle import and automotive parts logistics'
              },
              {
                name: 'Machinery',
                image: 'https://images.unsplash.com/photo-1761519609252-3b868e540398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxpbmR1c3RyaWFsJTIwbWFjaGluZXJ5JTIwZmFjdG9yeXxlbnwxfHx8fDE3Nzc2MTQxNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
                description: 'Heavy machinery and industrial equipment transport'
              },
              {
                name: 'Electronics',
                image: 'https://images.unsplash.com/photo-1643732774973-ff2d0e610d7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMGNpcmN1aXQlMjBib2FyZCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzc3NjE0MTYyfDA&ixlib=rb-4.1.0&q=80&w=1080',
                description: 'Secure electronics and technology goods handling'
              },
              {
                name: 'FMCG',
                image: 'https://images.unsplash.com/photo-1681369738123-e8d551a9ecfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBlcm1hcmtldCUyMHByb2R1Y3RzJTIwc2hlbHZlcyUyMGZtY2d8ZW58MXx8fHwxNzc3NjE0MTYzfDA&ixlib=rb-4.1.0&q=80&w=1080',
                description: 'Fast-moving consumer goods and retail inventory'
              },
              {
                name: 'Industrial Goods',
                image: 'https://images.unsplash.com/photo-1631856954134-002e438b118c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxpbmR1c3RyaWFsJTIwd2FyZWhvdXNlJTIwZ29vZHN8ZW58MXx8fHwxNzc3NjE0MTYzfDA&ixlib=rb-4.1.0&q=80&w=1080',
                description: 'Bulk industrial materials and warehouse solutions'
              },
              {
                name: 'Personal Cargo',
                image: 'https://images.unsplash.com/photo-1724461202659-55323bfaf08a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxwZXJzb25hbCUyMGx1Z2dhZ2UlMjBjYXJnbyUyMGJveHxlbnwxfHx8fDE3Nzc2MTQxNjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
                description: 'Personal shipments and household goods relocation'
              }
            ].map((industry, idx) => (
              <motion.div key={idx} variants={fadeInUp}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer border border-gray-100 h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={industry.image}
                      alt={industry.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-sm font-bold text-primary">{String(idx + 1).padStart(2, '0')}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{industry.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{industry.description}</p>
                    <button className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors group">
                      Learn More
                      <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Feature Badges */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              { icon: Shield, label: 'Industry Expertise', desc: 'Deep knowledge across sectors', color: 'bg-blue-100 text-blue-600' },
              { icon: CheckCircle2, label: 'Secure & Reliable', desc: 'Safety-first approach', color: 'bg-green-100 text-green-600' },
              { icon: Globe, label: 'Omni-Network', desc: 'Global presence, local delivery', color: 'bg-purple-100 text-purple-600' },
              { icon: TrendingUp, label: 'Dedicated Support', desc: 'Full lifecycle assistance', color: 'bg-orange-100 text-orange-600' }
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={idx}
                  className="flex items-center gap-3"
                  variants={fadeInUp}
                >
                  <div className={`w-10 h-10 ${feature.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{feature.label}</p>
                    <p className="text-xs text-gray-600">{feature.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Why Choose Navex
            </h2>
            <p className="text-lg text-gray-600">
              Your trusted partner in global logistics
            </p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
          >
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div key={idx} className="text-center" variants={fadeInUp}>
                  <motion.div 
                    className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        </div>

        {/* Decorative dots pattern */}
        <div className="absolute top-10 right-10 grid grid-cols-4 gap-2 opacity-20">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div {...fadeInUp}>
              <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-semibold text-orange-400 uppercase tracking-wider">Let's Get Started</span>
              </div>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Ready to Get Started?
              </h2>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Track your shipment in real-time or access your customer portal for seamless logistics management
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    size="lg"
                    onClick={() => onNavigate('quote')}
                    className="bg-[#f97316] hover:bg-[#ea580c] text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8"
                  >
                    Track Your Shipment
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => onNavigate('customer-login')}
                    className="bg-white/10 border-white/30 text-white hover:bg-white/20 transition-all duration-300"
                  >
                    Customer Login
                  </Button>
                </motion.div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: '95.8%', label: 'On-time Delivery' },
                  { value: '180+', label: 'Global Partners' },
                  { value: '24/7', label: 'Customer Support' }
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="border-l-2 border-orange-500 pl-4"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-white/70">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Content - Visual Badge */}
            <motion.div
              className="relative hidden lg:block"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                {/* Cargo imagery */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1634638024484-1b83581271bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjYXJnbyUyMHNoaXAlMjBjb250YWluZXJzJTIwcG9ydCUyMGxvZ2lzdGljc3xlbnwxfHx8fDE3Nzc2MTQxNjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Cargo logistics"
                    className="w-full h-80 object-cover"
                  />

                  {/* Badge overlay */}
                  <motion.div
                    className="absolute bottom-6 left-6 right-6 bg-white rounded-xl p-4 shadow-xl"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-bold text-gray-900">Your Cargo, Our Priority</div>
                        <div className="text-xs text-gray-600">Safe, Secure, On-Time, Every Time</div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Floating stat card */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-orange-500 rounded-xl p-4 shadow-xl"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">99.2%</div>
                    <div className="text-xs text-white/90">Success Rate</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}