import { Card } from '@/app/components/ui/card';
import { Users, Package, Clock, CreditCard, TrendingUp, CheckCircle2 } from 'lucide-react';
import { mockShipments, mockInvoices, mockCustomers } from '@/app/data/mockData';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { formatCurrency } from '@/app/utils/helpers';

export function AdminDashboard() {
  const totalShipments = mockShipments.length;
  const activeShipments = mockShipments.filter(s => s.status !== 'delivered').length;
  const pendingClearance = mockShipments.filter(s => s.status === 'customs_clearance').length;
  const pendingPayments = mockInvoices.filter(i => i.status === 'pending').length;
  const totalRevenue = mockInvoices.filter(i => i.status === 'paid').reduce((sum, i) => sum + i.amount, 0);
  const pendingRevenue = mockInvoices.filter(i => i.status === 'pending').reduce((sum, i) => sum + i.amount, 0);

  const stats = [
    {
      icon: Package,
      label: 'Total Shipments',
      value: totalShipments,
      color: 'bg-blue-500',
      subtext: `${activeShipments} active`
    },
    {
      icon: CheckCircle2,
      label: 'Active Shipments',
      value: activeShipments,
      color: 'bg-green-500',
      subtext: 'In progress'
    },
    {
      icon: Clock,
      label: 'Pending Clearance',
      value: pendingClearance,
      color: 'bg-orange-500',
      subtext: 'Awaiting customs'
    },
    {
      icon: CreditCard,
      label: 'Pending Payments',
      value: pendingPayments,
      color: 'bg-red-500',
      subtext: formatCurrency(pendingRevenue)
    },
    {
      icon: TrendingUp,
      label: 'Total Revenue',
      value: formatCurrency(totalRevenue),
      color: 'bg-purple-500',
      subtext: 'Paid invoices'
    },
    {
      icon: Users,
      label: 'Total Customers',
      value: mockCustomers.length,
      color: 'bg-indigo-500',
      subtext: 'Active accounts'
    }
  ];

  // Chart data
  const shipmentTypeData = [
    { name: 'Import', value: mockShipments.filter(s => s.type === 'import').length },
    { name: 'Export', value: mockShipments.filter(s => s.type === 'export').length }
  ];

  const monthlyData = [
    { month: 'Nov', shipments: 8, revenue: 450000 },
    { month: 'Dec', shipments: 12, revenue: 680000 },
    { month: 'Jan', shipments: 15, revenue: 890000 }
  ];

  const COLORS = ['#1e3a8a', '#f97316'];

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <Card key={idx} className="p-6 border-2 hover:border-primary/20 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-600 mb-1">{stat.label}</div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.subtext}</div>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Monthly Performance Chart */}
        <Card className="p-6 border-2">
          <h3 className="text-lg font-semibold mb-6">Monthly Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="shipments" fill="#1e3a8a" name="Shipments" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Shipment Type Distribution */}
        <Card className="p-6 border-2">
          <h3 className="text-lg font-semibold mb-6">Shipment Type Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={shipmentTypeData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {shipmentTypeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Recent Shipments */}
      <Card className="border-2">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold">Recent Shipments</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Shipment ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Route</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {mockShipments.slice(0, 5).map((shipment) => {
                const customer = mockCustomers.find(c => c.id === shipment.customerId);
                return (
                  <tr key={shipment.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{shipment.id}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{customer?.companyName}</td>
                    <td className="px-6 py-4 text-sm text-gray-600 capitalize">{shipment.type}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{shipment.origin} → {shipment.destination}</td>
                    <td className="px-6 py-4 text-sm text-gray-600 capitalize">{shipment.status.replace('_', ' ')}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
