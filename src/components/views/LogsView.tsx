import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export const LogsView = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const logs = [
    { id: 1, timestamp: '2024-10-28 14:32:15', level: 'info', source: 'US-East-1', message: 'Новое подключение от 192.168.1.105', user: 'user1@example.com' },
    { id: 2, timestamp: '2024-10-28 14:31:45', level: 'warning', source: 'EU-West-1', message: 'Высокая нагрузка CPU: 85%', user: 'system' },
    { id: 3, timestamp: '2024-10-28 14:30:22', level: 'error', source: 'Asia-1', message: 'Ошибка аутентификации для пользователя', user: 'user2@example.com' },
    { id: 4, timestamp: '2024-10-28 14:29:08', level: 'info', source: 'US-West-1', message: 'Отключение пользователя', user: 'user3@example.com' },
    { id: 5, timestamp: '2024-10-28 14:28:33', level: 'info', source: 'EU-Central-1', message: 'Успешная аутентификация', user: 'user4@example.com' },
    { id: 6, timestamp: '2024-10-28 14:27:51', level: 'warning', source: 'US-East-1', message: 'Превышен лимит трафика', user: 'user5@example.com' },
    { id: 7, timestamp: '2024-10-28 14:26:19', level: 'info', source: 'Asia-2', message: 'Сервер перезапущен', user: 'admin' },
    { id: 8, timestamp: '2024-10-28 14:25:42', level: 'error', source: 'US-West-1', message: 'Ошибка соединения с базой данных', user: 'system' },
    { id: 9, timestamp: '2024-10-28 14:24:15', level: 'info', source: 'EU-West-1', message: 'Новое подключение от 10.0.0.45', user: 'user6@example.com' },
    { id: 10, timestamp: '2024-10-28 14:23:08', level: 'warning', source: 'Asia-1', message: 'Достигнут лимит активных подключений', user: 'system' },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'error':
        return 'destructive';
      case 'warning':
        return 'secondary';
      case 'info':
      default:
        return 'outline';
    }
  };

  const getLevelIcon = (level: string) => {
    switch (level) {
      case 'error':
        return 'XCircle';
      case 'warning':
        return 'AlertTriangle';
      case 'info':
      default:
        return 'Info';
    }
  };

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Логи</h1>
          <p className="text-muted-foreground">Системные события и активность</p>
        </div>
        <Button className="bg-gradient-to-r from-primary to-accent shadow-lg hover:shadow-xl transition-all">
          <Icon name="Download" size={18} className="mr-2" />
          Экспорт логов
        </Button>
      </div>

      <Card className="border-none shadow-lg">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Icon name="Search" size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Поиск по логам..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Уровень" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все уровни</SelectItem>
                <SelectItem value="error">Ошибки</SelectItem>
                <SelectItem value="warning">Предупреждения</SelectItem>
                <SelectItem value="info">Информация</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Источник" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все серверы</SelectItem>
                <SelectItem value="us-east">US-East-1</SelectItem>
                <SelectItem value="eu-west">EU-West-1</SelectItem>
                <SelectItem value="asia">Asia-1</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Icon name="RefreshCw" size={18} />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {logs.map((log) => (
              <div
                key={log.id}
                className="p-4 rounded-lg border border-border hover:bg-muted/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 pt-1">
                    <Icon name={getLevelIcon(log.level)} size={20} className={
                      log.level === 'error' ? 'text-destructive' :
                      log.level === 'warning' ? 'text-yellow-500' :
                      'text-blue-500'
                    } />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant={getLevelColor(log.level)}>
                        {log.level.toUpperCase()}
                      </Badge>
                      <span className="text-xs text-muted-foreground font-mono">{log.timestamp}</span>
                      <Badge variant="outline" className="text-xs">{log.source}</Badge>
                    </div>
                    <p className="text-sm text-foreground mb-1">{log.message}</p>
                    <p className="text-xs text-muted-foreground">Пользователь: {log.user}</p>
                  </div>
                  <Button variant="ghost" size="icon" className="flex-shrink-0">
                    <Icon name="MoreVertical" size={16} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
