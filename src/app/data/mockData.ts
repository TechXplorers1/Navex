import type { Shipment, Customer, Document, Invoice, Activity, User } from '@/app/types';

export const mockCustomers: Customer[] = [
  {
    id: 'cust-001',
    companyName: 'Apex Motors Pvt Ltd',
    contactName: 'Rajesh Kumar',
    email: 'rajesh@apexmotors.com',
    phone: '+91 98765 43210',
    gst: '29ABCDE1234F1Z5',
    iec: '0123456789',
    address: 'Mumbai, Maharashtra, India'
  },
  {
    id: 'cust-002',
    companyName: 'TechGear Electronics',
    contactName: 'Priya Sharma',
    email: 'priya@techgear.com',
    phone: '+91 98765 43211',
    gst: '27XYZAB5678G2Z1',
    iec: '9876543210',
    address: 'Bangalore, Karnataka, India'
  },
  {
    id: 'cust-003',
    companyName: 'IndoMachinery Ltd',
    contactName: 'Amit Patel',
    email: 'amit@indomachinery.com',
    phone: '+91 98765 43212',
    gst: '24LMNOP9012H3Z4',
    iec: '5432167890',
    address: 'Ahmedabad, Gujarat, India'
  }
];

export const mockShipments: Shipment[] = [
  {
    id: 'SHP-2026-001',
    type: 'import',
    cargoType: 'Automobile Parts',
    origin: 'Shanghai, China',
    destination: 'Mumbai, India',
    status: 'in_transit',
    eta: '2026-01-25',
    createdAt: '2026-01-10',
    customerId: 'cust-001',
    containerNumber: 'MSCU1234567',
    trackingNumber: 'TRK2026001',
    currentLocation: 'Indian Ocean'
  },
  {
    id: 'SHP-2026-002',
    type: 'export',
    cargoType: 'Electronics',
    origin: 'Bangalore, India',
    destination: 'Dubai, UAE',
    status: 'customs_clearance',
    eta: '2026-01-22',
    createdAt: '2026-01-15',
    customerId: 'cust-002',
    containerNumber: 'TEMU9876543',
    trackingNumber: 'TRK2026002',
    currentLocation: 'Nhava Sheva Port'
  },
  {
    id: 'SHP-2026-003',
    type: 'import',
    cargoType: 'Industrial Machinery',
    origin: 'Hamburg, Germany',
    destination: 'Ahmedabad, India',
    status: 'delivered',
    eta: '2026-01-18',
    createdAt: '2025-12-20',
    customerId: 'cust-003',
    containerNumber: 'HLCU5555555',
    trackingNumber: 'TRK2026003',
    currentLocation: 'Ahmedabad'
  },
  {
    id: 'SHP-2026-004',
    type: 'import',
    cargoType: 'FMCG Products',
    origin: 'Singapore',
    destination: 'Chennai, India',
    status: 'at_port',
    eta: '2026-01-23',
    createdAt: '2026-01-12',
    customerId: 'cust-001',
    containerNumber: 'SGPU3333333',
    trackingNumber: 'TRK2026004',
    currentLocation: 'Chennai Port'
  },
  {
    id: 'SHP-2026-005',
    type: 'export',
    cargoType: 'Textiles',
    origin: 'Surat, India',
    destination: 'New York, USA',
    status: 'order_confirmed',
    eta: '2026-02-10',
    createdAt: '2026-01-19',
    customerId: 'cust-002',
    trackingNumber: 'TRK2026005',
    currentLocation: 'Surat'
  },
  {
    id: 'SHP-2026-006',
    type: 'import',
    cargoType: 'Vehicle (SUV)',
    origin: 'Tokyo, Japan',
    destination: 'Delhi, India',
    status: 'out_for_delivery',
    eta: '2026-01-20',
    createdAt: '2026-01-05',
    customerId: 'cust-003',
    containerNumber: 'JPCU7777777',
    trackingNumber: 'TRK2026006',
    currentLocation: 'Delhi Outskirts'
  }
];

export const mockDocuments: Document[] = [
  {
    id: 'doc-001',
    shipmentId: 'SHP-2026-001',
    name: 'Commercial Invoice',
    type: 'invoice',
    url: '#',
    uploadedAt: '2026-01-10'
  },
  {
    id: 'doc-002',
    shipmentId: 'SHP-2026-001',
    name: 'Packing List',
    type: 'packing_list',
    url: '#',
    uploadedAt: '2026-01-10'
  },
  {
    id: 'doc-003',
    shipmentId: 'SHP-2026-001',
    name: 'Bill of Lading',
    type: 'bill_of_lading',
    url: '#',
    uploadedAt: '2026-01-11'
  },
  {
    id: 'doc-004',
    shipmentId: 'SHP-2026-003',
    name: 'Customs Documents',
    type: 'customs',
    url: '#',
    uploadedAt: '2026-01-15'
  },
  {
    id: 'doc-005',
    shipmentId: 'SHP-2026-003',
    name: 'Delivery Proof',
    type: 'delivery_proof',
    url: '#',
    uploadedAt: '2026-01-18'
  }
];

export const mockInvoices: Invoice[] = [
  {
    id: 'inv-001',
    shipmentId: 'SHP-2026-003',
    customerId: 'cust-003',
    amount: 145000,
    status: 'paid',
    dueDate: '2026-01-20',
    paidDate: '2026-01-19',
    invoiceNumber: 'INV-2026-001'
  },
  {
    id: 'inv-002',
    shipmentId: 'SHP-2026-001',
    customerId: 'cust-001',
    amount: 89500,
    status: 'pending',
    dueDate: '2026-01-28',
    invoiceNumber: 'INV-2026-002'
  },
  {
    id: 'inv-003',
    shipmentId: 'SHP-2026-002',
    customerId: 'cust-002',
    amount: 67800,
    status: 'pending',
    dueDate: '2026-01-25',
    invoiceNumber: 'INV-2026-003'
  },
  {
    id: 'inv-004',
    shipmentId: 'SHP-2026-006',
    customerId: 'cust-003',
    amount: 234000,
    status: 'pending',
    dueDate: '2026-01-22',
    invoiceNumber: 'INV-2026-004'
  }
];

export const mockActivities: Activity[] = [
  {
    id: 'act-001',
    shipmentId: 'SHP-2026-001',
    status: 'order_confirmed',
    description: 'Shipment order confirmed',
    location: 'Shanghai, China',
    timestamp: '2026-01-10T10:00:00Z'
  },
  {
    id: 'act-002',
    shipmentId: 'SHP-2026-001',
    status: 'in_transit',
    description: 'Container loaded and departed from port',
    location: 'Shanghai Port',
    timestamp: '2026-01-12T14:30:00Z'
  },
  {
    id: 'act-003',
    shipmentId: 'SHP-2026-001',
    status: 'in_transit',
    description: 'Vessel in international waters',
    location: 'Indian Ocean',
    timestamp: '2026-01-18T08:00:00Z'
  },
  {
    id: 'act-004',
    shipmentId: 'SHP-2026-003',
    status: 'order_confirmed',
    description: 'Import order initiated',
    location: 'Hamburg, Germany',
    timestamp: '2025-12-20T09:00:00Z'
  },
  {
    id: 'act-005',
    shipmentId: 'SHP-2026-003',
    status: 'in_transit',
    description: 'Shipped from Hamburg',
    location: 'Hamburg Port',
    timestamp: '2025-12-22T11:00:00Z'
  },
  {
    id: 'act-006',
    shipmentId: 'SHP-2026-003',
    status: 'at_port',
    description: 'Arrived at destination port',
    location: 'Mundra Port, India',
    timestamp: '2026-01-10T16:00:00Z'
  },
  {
    id: 'act-007',
    shipmentId: 'SHP-2026-003',
    status: 'customs_clearance',
    description: 'Customs clearance completed',
    location: 'Mundra Port',
    timestamp: '2026-01-14T10:30:00Z'
  },
  {
    id: 'act-008',
    shipmentId: 'SHP-2026-003',
    status: 'out_for_delivery',
    description: 'Out for inland transport',
    location: 'En route to Ahmedabad',
    timestamp: '2026-01-16T06:00:00Z'
  },
  {
    id: 'act-009',
    shipmentId: 'SHP-2026-003',
    status: 'delivered',
    description: 'Delivered successfully',
    location: 'Ahmedabad',
    timestamp: '2026-01-18T15:30:00Z'
  }
];

export const mockUser: User = {
  id: 'user-001',
  email: 'rajesh@apexmotors.com',
  name: 'Rajesh Kumar',
  role: 'customer',
  customerId: 'cust-001'
};

export const mockAdminUser: User = {
  id: 'admin-001',
  email: 'admin@navex.com',
  name: 'Admin User',
  role: 'admin'
};

// Helper functions
export const getShipmentsByCustomerId = (customerId: string): Shipment[] => {
  return mockShipments.filter(s => s.customerId === customerId);
};

export const getDocumentsByShipmentId = (shipmentId: string): Document[] => {
  return mockDocuments.filter(d => d.shipmentId === shipmentId);
};

export const getInvoicesByCustomerId = (customerId: string): Invoice[] => {
  return mockInvoices.filter(i => i.customerId === customerId);
};

export const getActivitiesByShipmentId = (shipmentId: string): Activity[] => {
  return mockActivities.filter(a => a.shipmentId === shipmentId);
};

export const getCustomerById = (customerId: string): Customer | undefined => {
  return mockCustomers.find(c => c.id === customerId);
};

export const getShipmentById = (shipmentId: string): Shipment | undefined => {
  return mockShipments.find(s => s.id === shipmentId);
};
