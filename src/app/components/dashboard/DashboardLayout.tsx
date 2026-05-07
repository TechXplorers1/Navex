import { ReactNode } from 'react';
import { 
  LayoutDashboard, 
  Package, 
  MapPin, 
  FileText, 
  CreditCard, 
  User, 
  LogOut,
  Ship,
  Bell,
  Users,
  Container,
  Settings,
  BarChart3,
  Truck,
  FileCheck
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';

interface DashboardLayoutProps {
  children: ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
  onLogout: () => void;
  role: 'customer' | 'admin';
  userName: string;
}

export function DashboardLayout({ 
  children, 
  currentPage, 
  onNavigate, 
  onLogout,
  role,
  userName 
}: DashboardLayoutProps) {
  const customerMenuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', page: 'dashboard' },
    { icon: Package, label: 'My Shipments', page: 'shipments' },
    { icon: MapPin, label: 'Track Shipment', page: 'track' },
    { icon: FileText, label: 'Documents', page: 'documents' },
    { icon: CreditCard, label: 'Accounts & Payments', page: 'payments' },
    { icon: User, label: 'Profile', page: 'profile' }
  ];

  const adminMenuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', page: 'admin-dashboard' },
    { icon: Users, label: 'Customers', page: 'admin-customers' },
    { icon: Package, label: 'Shipments', page: 'admin-shipments' },
    { icon: FileCheck, label: 'Customs & Clearing', page: 'admin-customs' },
    { icon: Truck, label: 'Transport', page: 'admin-transport' },
    { icon: CreditCard, label: 'Billing & Receipts', page: 'admin-billing' },
    { icon: FileText, label: 'Documents', page: 'admin-documents' },
    { icon: BarChart3, label: 'Reports', page: 'admin-reports' },
    { icon: Settings, label: 'Settings', page: 'admin-settings' }
  ];

  const menuItems = role === 'customer' ? customerMenuItems : adminMenuItems;

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-primary text-white flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
              <Ship className="w-6 h-6" />
            </div>
            <div>
              <div 
                className="text-xl font-bold"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Navex
              </div>
              <div className="text-xs text-white/60">
                {role === 'customer' ? 'Customer Portal' : 'Admin Panel'}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 overflow-y-auto">
          <ul className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.page;
              return (
                <li key={item.page}>
                  <button
                    onClick={() => onNavigate(item.page)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-white/10 text-white'
                        : 'text-white/70 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-white/10">
          <Button
            variant="ghost"
            className="w-full justify-start text-white/70 hover:text-white hover:bg-white/5"
            onClick={onLogout}
          >
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {menuItems.find(item => item.page === currentPage)?.label || 'Dashboard'}
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Bell className="w-5 h-5 text-gray-600" />
                <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center bg-[#f97316] text-white text-xs">
                  3
                </Badge>
              </button>
              <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">{userName}</div>
                  <div className="text-xs text-gray-500 capitalize">{role}</div>
                </div>
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
