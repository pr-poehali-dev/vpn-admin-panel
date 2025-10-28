import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Icon from '@/components/ui/icon';

export const UsersView = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const users = [
    { id: 1, email: 'user1@example.com', name: 'Иван Петров', status: 'active', subscription: 'Premium', lastActive: '5 мин назад', traffic: '45.2 GB' },
    { id: 2, email: 'user2@example.com', name: 'Мария Иванова', status: 'active', subscription: 'Basic', lastActive: '1 час назад', traffic: '12.8 GB' },
    { id: 3, email: 'user3@example.com', name: 'Алексей Смирнов', status: 'inactive', subscription: 'Premium', lastActive: '2 дня назад', traffic: '89.5 GB' },
    { id: 4, email: 'user4@example.com', name: 'Елена Волкова', status: 'active', subscription: 'Pro', lastActive: '10 мин назад', traffic: '156.3 GB' },
    { id: 5, email: 'user5@example.com', name: 'Дмитрий Козлов', status: 'blocked', subscription: 'Basic', lastActive: '5 дней назад', traffic: '5.1 GB' },
    { id: 6, email: 'user6@example.com', name: 'Ольга Новикова', status: 'active', subscription: 'Premium', lastActive: '30 мин назад', traffic: '78.9 GB' },
  ];

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Пользователи</h1>
          <p className="text-muted-foreground">Управление пользователями VPN сервиса</p>
        </div>
        <Button className="bg-gradient-to-r from-primary to-accent shadow-lg hover:shadow-xl transition-all">
          <Icon name="UserPlus" size={18} className="mr-2" />
          Добавить пользователя
        </Button>
      </div>

      <Card className="border-none shadow-lg">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Icon name="Search" size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Поиск по email или имени..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" size="icon">
              <Icon name="Filter" size={18} />
            </Button>
            <Button variant="outline" size="icon">
              <Icon name="Download" size={18} />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Пользователь</TableHead>
                <TableHead>Статус</TableHead>
                <TableHead>Подписка</TableHead>
                <TableHead>Последняя активность</TableHead>
                <TableHead>Трафик</TableHead>
                <TableHead className="text-right">Действия</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id} className="hover:bg-muted/30">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <span className="font-semibold text-sm">{user.name.split(' ').map(n => n[0]).join('')}</span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{user.name}</p>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={user.status === 'active' ? 'default' : user.status === 'blocked' ? 'destructive' : 'secondary'}>
                      {user.status === 'active' ? 'Активен' : user.status === 'blocked' ? 'Заблокирован' : 'Неактивен'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <span className="font-medium">{user.subscription}</span>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{user.lastActive}</TableCell>
                  <TableCell className="font-medium">{user.traffic}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="icon">
                        <Icon name="Eye" size={16} />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Icon name="Edit" size={16} />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Icon name="MoreVertical" size={16} />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};
