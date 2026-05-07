export type ShipmentType = 'import' | 'export';
export type ShipmentStatus = 'order_confirmed' | 'in_transit' | 'at_port' | 'customs_clearance' | 'out_for_delivery' | 'delivered';
export type PaymentStatus = 'paid' | 'pending' | 'overdue';
export type UserRole = 'customer' | 'admin';

export interface Shipment {
  id: string;
  type: ShipmentType;
  cargoType: string;
  origin: string;
  destination: string;
  status: ShipmentStatus;
  eta: string;
  createdAt: string;
  customerId: string;
  containerNumber?: string;
  trackingNumber: string;
  currentLocation?: string;
}

export interface Customer {
  id: string;
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  gst: string;
  iec: string;
  address: string;
}

export interface Document {
  id: string;
  shipmentId: string;
  name: string;
  type: 'invoice' | 'packing_list' | 'bill_of_lading' | 'customs' | 'delivery_proof' | 'receipt';
  url: string;
  uploadedAt: string;
}

export interface Invoice {
  id: string;
  shipmentId: string;
  customerId: string;
  amount: number;
  status: PaymentStatus;
  dueDate: string;
  paidDate?: string;
  invoiceNumber: string;
}

export interface Activity {
  id: string;
  shipmentId: string;
  status: ShipmentStatus;
  description: string;
  location?: string;
  timestamp: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  customerId?: string;
}
