import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { mockUser, getShipmentsByCustomerId } from '@/app/data/mockData';
import { formatDate, getShipmentStatusLabel, getShipmentStatusColor } from '@/app/utils/helpers';
import { Search, Eye, Download } from 'lucide-react';
import { useState } from 'react';

export function CustomerShipmentsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const shipments = getShipmentsByCustomerId(mockUser.customerId!);
  
  const filteredShipments = shipments.filter(shipment =>
    shipment.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    shipment.cargoType.toLowerCase().includes(searchTerm.toLowerCase()) ||
    shipment.origin.toLowerCase().includes(searchTerm.toLowerCase()) ||
    shipment.destination.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <Card className="p-6 border-2">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              placeholder="Search by shipment ID, cargo type, or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </Card>

      {/* Shipments Table */}
      <Card className="border-2">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold">All Shipments ({filteredShipments.length})</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Shipment ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cargo Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Origin</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Destination</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ETA</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredShipments.map((shipment) => (
                <tr key={shipment.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{shipment.id}</td>
                  <td className="px-6 py-4">
                    <Badge variant="outline" className="capitalize">
                      {shipment.type}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{shipment.cargoType}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{shipment.origin}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{shipment.destination}</td>
                  <td className="px-6 py-4">
                    <Badge className={getShipmentStatusColor(shipment.status)}>
                      {getShipmentStatusLabel(shipment.status)}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{formatDate(shipment.eta)}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="ghost">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
