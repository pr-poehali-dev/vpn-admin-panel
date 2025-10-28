import Icon from '@/components/ui/icon';
import { ViewType } from '@/pages/Index';
import { cn } from '@/lib/utils';

interface SidebarProps {
  currentView: ViewType;
  onViewChange: (view: ViewType) => void;
}

export const Sidebar = ({ currentView, onViewChange }: SidebarProps) => {
  const menuItems = [
    { id: 'dashboard' as ViewType, label: 'Дашборд', icon: 'LayoutDashboard' },
    { id: 'users' as ViewType, label: 'Пользователи', icon: 'Users' },
    { id: 'servers' as ViewType, label: 'Серверы', icon: 'Server' },
    { id: 'subscriptions' as ViewType, label: 'Подписки', icon: 'CreditCard' },
    { id: 'payments' as ViewType, label: 'Платежи', icon: 'Wallet' },
    { id: 'statistics' as ViewType, label: 'Статистика', icon: 'BarChart3' },
    { id: 'logs' as ViewType, label: 'Логи', icon: 'FileText' },
    { id: 'settings' as ViewType, label: 'Настройки', icon: 'Settings' },
  ];

  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Icon name="Shield" size={24} className="text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-sidebar-foreground">VPN Admin</h1>
            <p className="text-xs text-sidebar-foreground/60">Панель управления</p>
          </div>
        </div>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onViewChange(item.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
                  currentView === item.id
                    ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-sm"
                    : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                )}
              >
                <Icon name={item.icon} size={20} />
                <span className="font-medium">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3 px-4 py-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
            <span className="text-white font-semibold text-sm">АД</span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-sidebar-foreground">Администратор</p>
            <p className="text-xs text-sidebar-foreground/60">admin@vpn.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
};
