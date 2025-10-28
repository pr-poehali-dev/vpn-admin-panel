import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

export const PaymentsView = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const stats = [
    { title: 'Доход за месяц', value: '$45,280', icon: 'DollarSign', color: 'from-green-500 to-emerald-600' },
    { title: 'Транзакций', value: '1,247', icon: 'CreditCard', color: 'from-blue-500 to-cyan-600' },
    { title: 'Средний чек', value: '$36.32', icon: 'TrendingUp', color: 'from-primary to-purple-600' },
    { title: 'Возвраты', value: '12', icon: 'RefreshCcw', color: 'from-accent to-pink-600' },
  ];

  const payments = [
    { id: 'PAY-001', user: 'user1@example.com', amount: '$19.99', method: 'Visa ****4242', plan: 'Premium', date: '2024-10-28 14:32', status: 'success' },
    { id: 'PAY-002', user: 'user2@example.com', amount: '$9.99', method: 'MasterCard ****8888', plan: 'Basic', date: '2024-10-28 13:15', status: 'success' },
    { id: 'PAY-003', user: 'user3@example.com', amount: '$29.99', method: 'PayPal', plan: 'Pro', date: '2024-10-28 12:45', status: 'success' },
    { id: 'PAY-004', user: 'user4@example.com', amount: '$19.99', method: 'Visa ****1234', plan: 'Premium', date: '2024-10-28 11:20', status: 'pending' },
    { id: 'PAY-005', user: 'user5@example.com', amount: '$9.99', method: 'MasterCard ****5555', plan: 'Basic', date: '2024-10-28 10:05', status: 'failed' },
    { id: 'PAY-006', user: 'user6@example.com', amount: '$29.99', method: 'Visa ****9999', plan: 'Pro', date: '2024-10-28 09:30', status: 'success' },
  ];

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Платежи</h1>
          <p className="text-muted-foreground">История транзакций и финансовая аналитика</p>
        </div>
        <Button className="bg-gradient-to-r from-primary to-accent shadow-lg hover:shadow-xl transition-all">
          <Icon name="Download" size={18} className="mr-2" />
          Экспорт данных
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="overflow-hidden border-none shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
                  <Icon name={stat.icon} size={24} className="text-white" />
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
              <h3 className="text-3xl font-bold text-foreground">{stat.value}</h3>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-none shadow-lg">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Icon name="Search" size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Поиск по транзакциям..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" size="icon">
              <Icon name="Filter" size={18} />
            </Button>
            <Button variant="outline" size="icon">
              <Icon name="Calendar" size={18} />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID Транзакции</TableHead>
                <TableHead>Пользователь</TableHead>
                <TableHead>Сумма</TableHead>
                <TableHead>Метод оплаты</TableHead>
                <TableHead>Тариф</TableHead>
                <TableHead>Дата и время</TableHead>
                <TableHead>Статус</TableHead>
                <TableHead className="text-right">Действия</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payments.map((payment) => (
                <TableRow key={payment.id} className="hover:bg-muted/30">
                  <TableCell className="font-mono text-sm">{payment.id}</TableCell>
                  <TableCell className="text-sm">{payment.user}</TableCell>
                  <TableCell className="font-semibold">{payment.amount}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{payment.method}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{payment.plan}</Badge>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">{payment.date}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={
                        payment.status === 'success' ? 'default' : 
                        payment.status === 'pending' ? 'secondary' : 
                        'destructive'
                      }
                    >
                      {payment.status === 'success' ? 'Успешно' : 
                       payment.status === 'pending' ? 'В обработке' : 
                       'Отклонено'}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="icon">
                        <Icon name="Eye" size={16} />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Icon name="Download" size={16} />
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
