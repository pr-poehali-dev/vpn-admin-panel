import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

export const DashboardView = () => {
  const stats = [
    { title: 'Активных пользователей', value: '2,847', change: '+12.5%', trend: 'up', icon: 'Users', color: 'from-primary to-purple-600' },
    { title: 'Онлайн подключений', value: '1,234', change: '+8.2%', trend: 'up', icon: 'Activity', color: 'from-secondary to-cyan-600' },
    { title: 'Серверов онлайн', value: '24/28', change: '85%', trend: 'neutral', icon: 'Server', color: 'from-accent to-pink-600' },
    { title: 'Доход за месяц', value: '$45,280', change: '+23.1%', trend: 'up', icon: 'DollarSign', color: 'from-green-500 to-emerald-600' },
  ];

  const servers = [
    { name: 'US-East-1', location: 'Нью-Йорк', load: 67, users: 245, status: 'online' },
    { name: 'EU-West-1', location: 'Лондон', load: 82, users: 312, status: 'online' },
    { name: 'Asia-1', location: 'Токио', load: 45, users: 178, status: 'online' },
    { name: 'US-West-1', location: 'Сан-Франциско', load: 91, users: 387, status: 'warning' },
    { name: 'EU-Central-1', location: 'Франкфурт', load: 23, users: 112, status: 'online' },
  ];

  const recentActivity = [
    { user: 'user@example.com', action: 'Новое подключение', server: 'US-East-1', time: '2 мин назад' },
    { user: 'admin@vpn.com', action: 'Обновление сервера', server: 'EU-West-1', time: '5 мин назад' },
    { user: 'test@example.com', action: 'Отключение', server: 'Asia-1', time: '8 мин назад' },
    { user: 'user2@example.com', action: 'Новое подключение', server: 'US-West-1', time: '12 мин назад' },
  ];

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">Дашборд</h1>
        <p className="text-muted-foreground">Мониторинг в реальном времени</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="overflow-hidden border-none shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
                  <Icon name={stat.icon} size={24} className="text-white" />
                </div>
                <Badge variant={stat.trend === 'up' ? 'default' : 'secondary'} className="text-xs">
                  {stat.change}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
              <h3 className="text-3xl font-bold text-foreground">{stat.value}</h3>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <Card className="xl:col-span-2 border-none shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Server" size={24} className="text-primary" />
              Состояние серверов
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {servers.map((server, index) => (
                <div key={index} className="p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${server.status === 'online' ? 'bg-green-500' : 'bg-yellow-500'} animate-pulse`} />
                      <div>
                        <h4 className="font-semibold text-foreground">{server.name}</h4>
                        <p className="text-sm text-muted-foreground">{server.location}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-foreground">{server.users} пользователей</p>
                      <p className="text-xs text-muted-foreground">Нагрузка: {server.load}%</p>
                    </div>
                  </div>
                  <Progress value={server.load} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Activity" size={24} className="text-accent" />
              Активность
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex gap-3 p-3 rounded-lg hover:bg-muted/30 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="User" size={18} className="text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{activity.user}</p>
                    <p className="text-xs text-muted-foreground">{activity.action}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      <span className="font-medium">{activity.server}</span> • {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
