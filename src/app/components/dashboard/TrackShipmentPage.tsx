import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Progress } from '@/app/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { mockUser, getShipmentsByCustomerId, getActivitiesByShipmentId } from '@/app/data/mockData';
import { formatDateTime, getShipmentStatusLabel, getShipmentProgress } from '@/app/utils/helpers';
import { CheckCircle2, Circle, MapPin, Calendar, Package } from 'lucide-react';
import { useState } from 'react';
import type { ShipmentStatus } from '@/app/types';

export function TrackShipmentPage() {
  const shipments = getShipmentsByCustomerId(mockUser.customerId!);
  const [selectedShipmentId, setSelectedShipmentId] = useState(shipments[0]?.id || '');
  
  const selectedShipment = shipments.find(s => s.id === selectedShipmentId);
  const activities = selectedShipment ? getActivitiesByShipmentId(selectedShipment.id) : [];

  const timelineSteps: { status: ShipmentStatus; label: string }[] = [
    { status: 'order_confirmed', label: 'Order Confirmed' },
    { status: 'in_transit', label: 'In Transit' },
    { status: 'at_port', label: 'At Port' },
    { status: 'customs_clearance', label: 'Customs Clearance' },
    { status: 'out_for_delivery', label: 'Out for Delivery' },
    { status: 'delivered', label: 'Delivered' }
  ];

  const getCurrentStepIndex = () => {
    if (!selectedShipment) return 0;
    return timelineSteps.findIndex(step => step.status === selectedShipment.status);
  };

  const currentStepIndex = getCurrentStepIndex();

  return (
    <div className="space-y-6">
      {/* Shipment Selector */}
      <Card className="p-6 border-2">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Shipment to Track
        </label>
        <Select value={selectedShipmentId} onValueChange={setSelectedShipmentId}>
          <SelectTrigger className="w-full md:w-96">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {shipments.map(shipment => (
              <SelectItem key={shipment.id} value={shipment.id}>
                {shipment.id} - {shipment.cargoType}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Card>

      {selectedShipment && (
        <>
          {/* Shipment Details Card */}
          <Card className="p-6 border-2">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                  <Package className="w-4 h-4" />
                  Shipment ID
                </div>
                <div className="font-semibold text-gray-900">{selectedShipment.id}</div>
              </div>
              <div>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                  <MapPin className="w-4 h-4" />
                  Current Location
                </div>
                <div className="font-semibold text-gray-900">{selectedShipment.currentLocation}</div>
              </div>
              <div>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                  <Calendar className="w-4 h-4" />
                  Estimated Arrival
                </div>
                <div className="font-semibold text-gray-900">{formatDateTime(selectedShipment.eta)}</div>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Progress</span>
                <span className="text-sm font-medium text-primary">{getShipmentProgress(selectedShipment.status)}%</span>
              </div>
              <Progress value={getShipmentProgress(selectedShipment.status)} className="h-2" />
            </div>
          </Card>

          {/* Visual Timeline */}
          <Card className="p-8 border-2">
            <h3 className="text-lg font-semibold mb-8">Shipment Timeline</h3>
            
            {/* Desktop Timeline */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute top-8 left-0 right-0 h-1 bg-gray-200">
                  <div 
                    className="h-full bg-primary transition-all duration-500"
                    style={{ width: `${(currentStepIndex / (timelineSteps.length - 1)) * 100}%` }}
                  />
                </div>
                <div className="relative flex justify-between">
                  {timelineSteps.map((step, idx) => {
                    const isCompleted = idx <= currentStepIndex;
                    const isCurrent = idx === currentStepIndex;
                    return (
                      <div key={step.status} className="flex flex-col items-center">
                        <div 
                          className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 transition-colors ${
                            isCompleted
                              ? 'bg-primary text-white'
                              : 'bg-gray-200 text-gray-400'
                          } ${isCurrent ? 'ring-4 ring-primary/20' : ''}`}
                        >
                          {isCompleted ? (
                            <CheckCircle2 className="w-8 h-8" />
                          ) : (
                            <Circle className="w-8 h-8" />
                          )}
                        </div>
                        <div className="text-center">
                          <div className={`text-sm font-medium ${isCompleted ? 'text-gray-900' : 'text-gray-400'}`}>
                            {step.label}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Mobile Timeline */}
            <div className="lg:hidden space-y-4">
              {timelineSteps.map((step, idx) => {
                const isCompleted = idx <= currentStepIndex;
                const isCurrent = idx === currentStepIndex;
                return (
                  <div key={step.status} className="flex items-center gap-4">
                    <div 
                      className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                        isCompleted
                          ? 'bg-primary text-white'
                          : 'bg-gray-200 text-gray-400'
                      } ${isCurrent ? 'ring-4 ring-primary/20' : ''}`}
                    >
                      {isCompleted ? (
                        <CheckCircle2 className="w-6 h-6" />
                      ) : (
                        <Circle className="w-6 h-6" />
                      )}
                    </div>
                    <div>
                      <div className={`font-medium ${isCompleted ? 'text-gray-900' : 'text-gray-400'}`}>
                        {step.label}
                      </div>
                      {isCurrent && (
                        <Badge className="mt-1 bg-primary">Current</Badge>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Activity Log */}
          <Card className="p-6 border-2">
            <h3 className="text-lg font-semibold mb-6">Activity Log</h3>
            <div className="space-y-4">
              {activities.map((activity) => (
                <div key={activity.id} className="flex gap-4 pb-4 border-b border-gray-100 last:border-0">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 bg-primary rounded-full" />
                    <div className="w-0.5 h-full bg-gray-200 mt-2" />
                  </div>
                  <div className="flex-1 pb-4">
                    <div className="flex items-start justify-between mb-1">
                      <p className="font-medium text-gray-900">{activity.description}</p>
                      <Badge variant="outline" className="ml-2">
                        {getShipmentStatusLabel(activity.status)}
                      </Badge>
                    </div>
                    {activity.location && (
                      <p className="text-sm text-gray-600 flex items-center gap-1 mb-1">
                        <MapPin className="w-3 h-3" />
                        {activity.location}
                      </p>
                    )}
                    <p className="text-xs text-gray-500">{formatDateTime(activity.timestamp)}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </>
      )}
    </div>
  );
}
