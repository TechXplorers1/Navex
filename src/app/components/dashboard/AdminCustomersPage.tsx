import { Card } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Badge } from '@/app/components/ui/badge';
import { mockCustomers, mockShipments, mockInvoices } from '@/app/data/mockData';
import { Search, Plus, Eye, Edit } from 'lucide-react';
import { useState } from 'react';
import { formatCurrency } from '@/app/utils/helpers';

export function AdminCustomersPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const customersWithStats = mockCustomers.map(customer => {
    const customerShipments = mockShipments.filter(s => s.customerId === customer.id);
    const customerInvoices = mockInvoices.filter(i => i.customerId === customer.id);
    const totalSpent = customerInvoices.filter(i => i.status === 'paid').reduce((sum, i) => sum + i.amount, 0);
    const pendingAmount = customerInvoices.filter(i => i.status === 'pending').reduce((sum, i) => sum + i.amount, 0);

    return {
      ...customer,
      totalShipments: customerShipments.length,
      activeShipments: customerShipments.filter(s => s.status !== 'delivered').length,
      totalSpent,
      pendingAmount
    };
  });

  const filteredCustomers = customersWithStats.filter(customer =>
    customer.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.contactName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <Card className="p-6 border-2">
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              placeholder="Search customers by company name, contact, or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="w-4 h-4 mr-2" />
            Add Customer
          </Button>
        </div>
      </Card>

      {/* Customers Grid */}
      <div className="grid gap-6">
        {filteredCustomers.map((customer) => (
          <Card key={customer.id} className="p-6 border-2 hover:border-primary/20 transition-colors">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Customer Info */}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{customer.companyName}</h3>
                    <p className="text-sm text-gray-600">{customer.contactName}</p>
                  </div>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    Active
                  </Badge>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Email</p>
                    <p className="font-medium text-gray-900">{customer.email}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Phone</p>
                    <p className="font-medium text-gray-900">{customer.phone}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">GST</p>
                    <p className="font-medium text-gray-900">{customer.gst}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">IEC</p>
                    <p className="font-medium text-gray-900">{customer.iec}</p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="lg:w-80 grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">{customer.totalShipments}</div>
                  <div className="text-xs text-gray-600 mt-1">Total Shipments</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-500">{customer.activeShipments}</div>
                  <div className="text-xs text-gray-600 mt-1">Active</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-lg font-bold text-green-600">{formatCurrency(customer.totalSpent)}</div>
                  <div className="text-xs text-gray-600 mt-1">Total Paid</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-lg font-bold text-red-600">{formatCurrency(customer.pendingAmount)}</div>
                  <div className="text-xs text-gray-600 mt-1">Pending</div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex lg:flex-col gap-2">
                <Button size="sm" variant="outline" className="flex-1 lg:flex-none">
                  <Eye className="w-4 h-4 mr-2" />
                  View
                </Button>
                <Button size="sm" variant="outline" className="flex-1 lg:flex-none">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
