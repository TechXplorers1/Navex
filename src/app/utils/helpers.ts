import type { ShipmentStatus, PaymentStatus } from '@/app/types';

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0
  }).format(amount);
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);

  // Fallback if Intl is not available
  if (typeof Intl === 'undefined' || typeof Intl.DateTimeFormat === 'undefined') {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const day = String(date.getDate()).padStart(2, '0');
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  }

  return new Intl.DateTimeFormat('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  }).format(date);
};

export const formatDateTime = (dateString: string): string => {
  const date = new Date(dateString);

  // Fallback if Intl is not available
  if (typeof Intl === 'undefined' || typeof Intl.DateTimeFormat === 'undefined') {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const day = String(date.getDate()).padStart(2, '0');
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${day} ${month} ${year}, ${hours}:${minutes}`;
  }

  return new Intl.DateTimeFormat('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
};

export const getShipmentStatusLabel = (status: ShipmentStatus): string => {
  const labels: Record<ShipmentStatus, string> = {
    order_confirmed: 'Order Confirmed',
    in_transit: 'In Transit',
    at_port: 'At Port',
    customs_clearance: 'Customs Clearance',
    out_for_delivery: 'Out for Delivery',
    delivered: 'Delivered'
  };
  return labels[status];
};

export const getShipmentStatusColor = (status: ShipmentStatus): string => {
  const colors: Record<ShipmentStatus, string> = {
    order_confirmed: 'bg-blue-100 text-blue-800',
    in_transit: 'bg-purple-100 text-purple-800',
    at_port: 'bg-yellow-100 text-yellow-800',
    customs_clearance: 'bg-orange-100 text-orange-800',
    out_for_delivery: 'bg-indigo-100 text-indigo-800',
    delivered: 'bg-green-100 text-green-800'
  };
  return colors[status];
};

export const getPaymentStatusLabel = (status: PaymentStatus): string => {
  const labels: Record<PaymentStatus, string> = {
    paid: 'Paid',
    pending: 'Pending',
    overdue: 'Overdue'
  };
  return labels[status];
};

export const getPaymentStatusColor = (status: PaymentStatus): string => {
  const colors: Record<PaymentStatus, string> = {
    paid: 'bg-green-100 text-green-800',
    pending: 'bg-yellow-100 text-yellow-800',
    overdue: 'bg-red-100 text-red-800'
  };
  return colors[status];
};

export const getShipmentProgress = (status: ShipmentStatus): number => {
  const progress: Record<ShipmentStatus, number> = {
    order_confirmed: 16,
    in_transit: 33,
    at_port: 50,
    customs_clearance: 66,
    out_for_delivery: 83,
    delivered: 100
  };
  return progress[status];
};
