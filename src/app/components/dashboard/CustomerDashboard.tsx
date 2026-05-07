import { Card } from '@/app/components/ui/card';
import { Package, CheckCircle2, CreditCard, FileText, Clock, TrendingUp } from 'lucide-react';
import { mockUser, getShipmentsByCustomerId, getInvoicesByCustomerId } from '@/app/data/mockData';
import { formatDate, getShipmentStatusLabel, getShipmentStatusColor } from '@/app/utils/helpers';
import { Badge } from '@/app/components/ui/badge';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export function CustomerDashboard() {
  const shipments = getShipmentsByCustomerId(mockUser.customerId!);
  const invoices = getInvoicesByCustomerId(mockUser.customerId!);
  const [animatedValues, setAnimatedValues] = useState<number[]>([0, 0, 0, 0]);

  const activeShipments = shipments.filter(s => s.status !== 'delivered').length;
  const deliveredShipments = shipments.filter(s => s.status === 'delivered').length;
  const pendingPayments = invoices.filter(i => i.status === 'pending').length;
  const totalDocuments = shipments.length * 3; // Mock count

  const stats = [
    {
      icon: Package,
      label: 'Active Shipments',
      value: activeShipments,
      color: 'bg-blue-500',
      trend: '+2 this month'
    },
    {
      icon: CheckCircle2,
      label: 'Delivered',
      value: deliveredShipments,
      color: 'bg-green-500',
      trend: 'On time'
    },
    {
      icon: CreditCard,
      label: 'Pending Payments',
      value: pendingPayments,
      color: 'bg-orange-500',
      trend: `₹${invoices.filter(i => i.status === 'pending').reduce((sum, i) => sum + i.amount, 0).toLocaleString()}`
    },
    {
      icon: FileText,
      label: 'Documents',
      value: totalDocuments,
      color: 'bg-purple-500',
      trend: 'All available'
    }
  ];

  // Animate stat values counting up
  useEffect(() => {
    const targets = [activeShipments, deliveredShipments, pendingPayments, totalDocuments];
    const duration = 1000;
    const steps = 30;
    const stepDuration = duration / steps;
    
    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        setAnimatedValues(targets.map(target => 
          Math.round((target / steps) * currentStep)
        ));
      } else {
        setAnimatedValues(targets);
        clearInterval(interval);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [activeShipments, deliveredShipments, pendingPayments, totalDocuments]);

  const recentShipments = shipments.slice(0, 5);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
  };

  const staggerContainer = {
    initial: {},
    animate: { transition: { staggerChildren: 0.1 } }
  };

  const cardHover = {
    scale: 1.02,
    y: -2,
    transition: { duration: 0.2, ease: "easeOut" }
  };

  return (
    <div className="space-y-8">
      {/* Welcome Message */}
      <motion.div {...fadeInUp}>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome back, {mockUser.name}!</h2>
        <p className="text-gray-600">Here's an overview of your shipments and activities</p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div key={idx} variants={fadeInUp}>
              <motion.div whileHover={cardHover}>
                <Card className="p-6 border-2 hover:border-primary/20 transition-colors hover:shadow-lg">
                  <div className="flex items-start justify-between mb-4">
                    <motion.div 
                      className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}
                      initial={{ rotate: -10, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="text-right">
                      <motion.div 
                        className="text-3xl font-bold text-gray-900"
                        key={animatedValues[idx]}
                      >
                        {animatedValues[idx]}
                      </motion.div>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-600 mb-1">{stat.label}</div>
                    <div className="text-xs text-gray-500 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      {stat.trend}
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Recent Shipments */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        <Card className="border-2 hover:shadow-lg transition-shadow">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold">Recent Shipments</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Shipment ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Origin → Destination</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ETA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {recentShipments.map((shipment, idx) => (
                  <motion.tr 
                    key={shipment.id} 
                    className="hover:bg-gray-50 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 + (idx * 0.05) }}
                  >
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{shipment.id}</td>
                    <td className="px-6 py-4">
                      <Badge variant="outline" className="capitalize">
                        {shipment.type}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {shipment.origin} → {shipment.destination}
                    </td>
                    <td className="px-6 py-4">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.7 + (idx * 0.05) }}
                      >
                        <Badge className={getShipmentStatusColor(shipment.status)}>
                          {getShipmentStatusLabel(shipment.status)}
                        </Badge>
                      </motion.div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {formatDate(shipment.eta)}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </motion.div>

      {/* Recent Activity Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.8 }}
      >
        <Card className="p-6 border-2 hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold mb-6">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { date: '2026-01-19', activity: 'Payment received for shipment SHP-2026-003', type: 'payment' },
              { date: '2026-01-18', activity: 'Shipment SHP-2026-003 delivered successfully', type: 'delivery' },
              { date: '2026-01-15', activity: 'New shipment SHP-2026-002 customs clearance started', type: 'customs' },
              { date: '2026-01-12', activity: 'Documents uploaded for shipment SHP-2026-001', type: 'document' }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                className="flex items-start gap-4 pb-4 border-b border-gray-100 last:border-0"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.9 + (idx * 0.1) }}
              >
                <motion.div 
                  className="w-2 h-2 bg-primary rounded-full mt-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 1.0 + (idx * 0.1) }}
                />
                <div className="flex-1">
                  <p className="text-sm text-gray-900">{item.activity}</p>
                  <p className="text-xs text-gray-500 mt-1">{formatDate(item.date)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Card>
      </motion.div>
    </div>
  );
}