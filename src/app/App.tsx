import { useState } from 'react';
import { Toaster } from '@/app/components/ui/sonner';

// Layouts
import { PublicNavbar } from '@/app/components/layout/PublicNavbar';
import { Footer } from '@/app/components/layout/Footer';
import { DashboardLayout } from '@/app/components/dashboard/DashboardLayout';

// Public Pages
import { HomePage } from '@/app/components/pages/HomePage';
import { AboutPage } from '@/app/components/pages/AboutPage';
import { ServicesPage } from '@/app/components/pages/ServicesPage';
import { HowItWorksPage } from '@/app/components/pages/HowItWorksPage';
import { IndustriesPage } from '@/app/components/pages/IndustriesPage';
import { GetQuotePage } from '@/app/components/pages/GetQuotePage';
import { ContactPage } from '@/app/components/pages/ContactPage';
import { CustomerLoginPage } from '@/app/components/pages/CustomerLoginPage';

// Customer Dashboard
import { CustomerDashboard } from '@/app/components/dashboard/CustomerDashboard';
import { CustomerShipmentsPage } from '@/app/components/dashboard/CustomerShipmentsPage';
import { TrackShipmentPage } from '@/app/components/dashboard/TrackShipmentPage';

// Admin Dashboard
import { AdminDashboard } from '@/app/components/dashboard/AdminDashboard';
import { AdminCustomersPage } from '@/app/components/dashboard/AdminCustomersPage';

import { mockUser, mockAdminUser } from '@/app/data/mockData';

type Page = 
  // Public pages
  | 'home' | 'about' | 'services' | 'how-it-works' | 'industries' | 'contact' | 'quote' | 'customer-login'
  // Customer dashboard pages
  | 'dashboard' | 'shipments' | 'track' | 'documents' | 'payments' | 'profile'
  // Admin dashboard pages
  | 'admin-dashboard' | 'admin-customers' | 'admin-shipments' | 'admin-customs' 
  | 'admin-transport' | 'admin-billing' | 'admin-documents' | 'admin-reports' | 'admin-settings';

type UserRole = 'guest' | 'customer' | 'admin';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [userRole, setUserRole] = useState<UserRole>('guest');

  const handleLogin = (role: 'customer' | 'admin') => {
    setUserRole(role);
    if (role === 'customer') {
      setCurrentPage('dashboard');
    } else {
      setCurrentPage('admin-dashboard');
    }
  };

  const handleLogout = () => {
    setUserRole('guest');
    setCurrentPage('home');
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
  };

  // Render public pages
  if (userRole === 'guest') {
    return (
      <div className="min-h-screen flex flex-col" style={{ fontFamily: 'var(--font-body)' }}>
        <Toaster position="top-right" />
        {currentPage !== 'customer-login' && (
          <PublicNavbar currentPage={currentPage} onNavigate={handleNavigate} />
        )}
        
        <div className="flex-1">
          {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
          {currentPage === 'about' && <AboutPage />}
          {currentPage === 'services' && <ServicesPage onNavigate={handleNavigate} />}
          {currentPage === 'how-it-works' && <HowItWorksPage onNavigate={handleNavigate} />}
          {currentPage === 'industries' && <IndustriesPage onNavigate={handleNavigate} />}
          {currentPage === 'contact' && <ContactPage />}
          {currentPage === 'quote' && <GetQuotePage />}
          {currentPage === 'customer-login' && <CustomerLoginPage onLogin={handleLogin} />}
        </div>

        {currentPage !== 'customer-login' && <Footer onNavigate={handleNavigate} />}
      </div>
    );
  }

  // Render customer dashboard
  if (userRole === 'customer') {
    return (
      <div style={{ fontFamily: 'var(--font-body)' }}>
        <Toaster position="top-right" />
        <DashboardLayout
          currentPage={currentPage}
          onNavigate={handleNavigate}
          onLogout={handleLogout}
          role="customer"
          userName={mockUser.name}
        >
          {currentPage === 'dashboard' && <CustomerDashboard />}
          {currentPage === 'shipments' && <CustomerShipmentsPage />}
          {currentPage === 'track' && <TrackShipmentPage />}
          {currentPage === 'documents' && <DocumentsPlaceholder />}
          {currentPage === 'payments' && <PaymentsPlaceholder />}
          {currentPage === 'profile' && <ProfilePlaceholder />}
        </DashboardLayout>
      </div>
    );
  }

  // Render admin dashboard
  return (
    <div style={{ fontFamily: 'var(--font-body)' }}>
      <Toaster position="top-right" />
      <DashboardLayout
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onLogout={handleLogout}
        role="admin"
        userName={mockAdminUser.name}
      >
        {currentPage === 'admin-dashboard' && <AdminDashboard />}
        {currentPage === 'admin-customers' && <AdminCustomersPage />}
        {currentPage === 'admin-shipments' && <AdminShipmentsPlaceholder />}
        {currentPage === 'admin-customs' && <AdminCustomsPlaceholder />}
        {currentPage === 'admin-transport' && <AdminTransportPlaceholder />}
        {currentPage === 'admin-billing' && <AdminBillingPlaceholder />}
        {currentPage === 'admin-documents' && <AdminDocumentsPlaceholder />}
        {currentPage === 'admin-reports' && <AdminReportsPlaceholder />}
        {currentPage === 'admin-settings' && <AdminSettingsPlaceholder />}
      </DashboardLayout>
    </div>
  );
}

// Placeholder components for pages not yet fully implemented
function DocumentsPlaceholder() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8 text-center">
      <p className="text-gray-600">Documents management page - View and download shipment documents</p>
    </div>
  );
}

function PaymentsPlaceholder() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8 text-center">
      <p className="text-gray-600">Accounts & Payments page - View invoices and payment history</p>
    </div>
  );
}

function ProfilePlaceholder() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8 text-center">
      <p className="text-gray-600">Profile page - Manage company information and credentials</p>
    </div>
  );
}

function AdminShipmentsPlaceholder() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8 text-center">
      <p className="text-gray-600">Shipment Management - Create and manage all shipments</p>
    </div>
  );
}

function AdminCustomsPlaceholder() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8 text-center">
      <p className="text-gray-600">Customs & Clearing Management - Handle customs documentation and clearance</p>
    </div>
  );
}

function AdminTransportPlaceholder() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8 text-center">
      <p className="text-gray-600">Transport Management - Assign vehicles and manage deliveries</p>
    </div>
  );
}

function AdminBillingPlaceholder() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8 text-center">
      <p className="text-gray-600">Billing & Receipts - Generate invoices and track payments</p>
    </div>
  );
}

function AdminDocumentsPlaceholder() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8 text-center">
      <p className="text-gray-600">Document Management - Upload and manage shipment documents</p>
    </div>
  );
}

function AdminReportsPlaceholder() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8 text-center">
      <p className="text-gray-600">Reports - Generate shipment, revenue, and activity reports</p>
    </div>
  );
}

function AdminSettingsPlaceholder() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8 text-center">
      <p className="text-gray-600">Settings - Manage company details, branding, and permissions</p>
    </div>
  );
}