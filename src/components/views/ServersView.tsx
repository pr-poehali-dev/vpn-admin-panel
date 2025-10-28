import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

export const ServersView = () => {
  const servers = [
    { 
      id: 1, 
      name: 'US-East-1', 
      location: 'Нью-Йорк, США', 
      ip: '45.123.67.89', 
      status: 'online', 
      load: 67, 
      users: 245, 
      bandwidth: '8.5 Gbps',
      uptime: '99.98%',
      latency: '12 ms'
    },
    { 
      id: 2, 
      name: 'EU-West-1', 
      location: 'Лондон, Великобритания', 
      ip: '78.234.56.12', 
      status: 'online', 
      load: 82, 
      users: 312, 
      bandwidth: '12.3 Gbps',
      uptime: '99.95%',
      latency: '18 ms'
    },
    { 
      id: 3, 
      name: 'Asia-1', 
      location: 'Токио, Япония', 
      ip: '103.45.78.23', 
      status: 'online', 
      load: 45, 
      users: 178, 
      bandwidth: '6.7 Gbps',
      uptime: '99.99%',
      latency: '8 ms'
    },
    { 
      id: 4, 
      name: 'US-West-1', 
      location: 'Сан-Франциско, США', 
      ip: '52.89.123.45', 
      status: 'warning', 
      load: 91, 
      users: 387, 
      bandwidth: '15.2 Gbps',
      uptime: '99.87%',
      latency: '15 ms'
    },
    { 
      id: 5, 
      name: 'EU-Central-1', 
      location: 'Франкфурт, Германия', 
      ip: '89.67.234.78', 
      status: 'online', 
      load: 23, 
      users: 112, 
      bandwidth: '4.8 Gbps',
      uptime: '100%',
      latency: '22 ms'
    },
    { 
      id: 6, 
      name: 'Asia-2', 
      location: 'Сингапур', 
      ip: '119.234.56.89', 
      status: 'maintenance', 
      load: 0, 
      users: 0, 
      bandwidth: '0 Gbps',
      uptime: '99.92%',
      latency: '—'
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online':
        return 'bg-green-500';
      case 'warning':
        return 'bg-yellow-500';
      case 'maintenance':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'online':
        return 'Онлайн';
      case 'warning':
        return 'Высокая нагрузка';
      case 'maintenance':
        return 'Обслуживание';
      default:
        return 'Офлайн';
    }
  };

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Серверы</h1>
          <p className="text-muted-foreground">Мониторинг и управление серверами</p>
        </div>
        <Button className="bg-gradient-to-r from-primary to-accent shadow-lg hover:shadow-xl transition-all">
          <Icon name="Plus" size={18} className="mr-2" />
          Добавить сервер
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {servers.map((server) => (
          <Card key={server.id} className="border-none shadow-lg hover:shadow-xl transition-all">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${getStatusColor(server.status)} animate-pulse`} />
                  <div>
                    <CardTitle className="text-xl">{server.name}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">{server.location}</p>
                  </div>
                </div>
                <Badge variant={server.status === 'online' ? 'default' : server.status === 'warning' ? 'destructive' : 'secondary'}>
                  {getStatusText(server.status)}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Нагрузка</span>
                  <span className="font-semibold">{server.load}%</span>
                </div>
                <Progress value={server.load} className="h-2" />
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Пользователи</p>
                  <p className="text-lg font-semibold">{server.users}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Пропускная способность</p>
                  <p className="text-lg font-semibold">{server.bandwidth}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Аптайм</p>
                  <p className="text-lg font-semibold text-green-600">{server.uptime}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Задержка</p>
                  <p className="text-lg font-semibold">{server.latency}</p>
                </div>
              </div>

              <div className="pt-2 space-y-2">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Icon name="Globe" size={14} />
                  <span className="font-mono">{server.ip}</span>
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <Button variant="outline" className="flex-1" size="sm">
                  <Icon name="Settings" size={14} className="mr-2" />
                  Настроить
                </Button>
                <Button variant="outline" size="sm">
                  <Icon name="MoreVertical" size={14} />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
