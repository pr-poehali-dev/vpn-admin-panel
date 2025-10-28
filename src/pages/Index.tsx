import { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { DashboardView } from '@/components/views/DashboardView';
import { UsersView } from '@/components/views/UsersView';
import { ServersView } from '@/components/views/ServersView';
import { SubscriptionsView } from '@/components/views/SubscriptionsView';
import { SettingsView } from '@/components/views/SettingsView';
import { LogsView } from '@/components/views/LogsView';
import { PaymentsView } from '@/components/views/PaymentsView';
import { StatisticsView } from '@/components/views/StatisticsView';

export type ViewType = 'dashboard' | 'users' | 'servers' | 'subscriptions' | 'settings' | 'logs' | 'payments' | 'statistics';

const Index = () => {
  const [currentView, setCurrentView] = useState<ViewType>('dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <DashboardView />;
      case 'users':
        return <UsersView />;
      case 'servers':
        return <ServersView />;
      case 'subscriptions':
        return <SubscriptionsView />;
      case 'settings':
        return <SettingsView />;
      case 'logs':
        return <LogsView />;
      case 'payments':
        return <PaymentsView />;
      case 'statistics':
        return <StatisticsView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar currentView={currentView} onViewChange={setCurrentView} />
      <main className="flex-1 overflow-auto">
        {renderView()}
      </main>
    </div>
  );
};

export default Index;
