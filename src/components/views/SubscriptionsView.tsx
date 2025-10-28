import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export const SubscriptionsView = () => {
  const plans = [
    {
      name: 'Basic',
      price: '$9.99',
      period: 'месяц',
      users: 324,
      color: 'from-blue-500 to-cyan-500',
      features: ['100 GB трафика', '5 устройств', 'Базовая поддержка', '24/7 доступ']
    },
    {
      name: 'Premium',
      price: '$19.99',
      period: 'месяц',
      users: 892,
      color: 'from-primary to-purple-600',
      features: ['Безлимитный трафик', '10 устройств', 'Приоритетная поддержка', 'Все локации']
    },
    {
      name: 'Pro',
      price: '$29.99',
      period: 'месяц',
      users: 156,
      color: 'from-accent to-pink-600',
      features: ['Безлимитный трафик', 'Неограниченно устройств', 'VIP поддержка', 'Выделенный IP']
    },
  ];

  const recentSubscriptions = [
    { user: 'user1@example.com', plan: 'Premium', date: '2024-10-28', status: 'active', amount: '$19.99' },
    { user: 'user2@example.com', plan: 'Basic', date: '2024-10-27', status: 'active', amount: '$9.99' },
    { user: 'user3@example.com', plan: 'Pro', date: '2024-10-27', status: 'active', amount: '$29.99' },
    { user: 'user4@example.com', plan: 'Premium', date: '2024-10-26', status: 'expired', amount: '$19.99' },
    { user: 'user5@example.com', plan: 'Basic', date: '2024-10-26', status: 'active', amount: '$9.99' },
  ];

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Подписки</h1>
          <p className="text-muted-foreground">Управление тарифными планами</p>
        </div>
        <Button className="bg-gradient-to-r from-primary to-accent shadow-lg hover:shadow-xl transition-all">
          <Icon name="Plus" size={18} className="mr-2" />
          Создать тариф
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all overflow-hidden">
            <div className={`h-2 bg-gradient-to-r ${plan.color}`} />
            <CardHeader>
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <div className="flex items-baseline gap-1 pt-2">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">/ {plan.period}</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Активных подписок</span>
                  <span className="text-lg font-bold">{plan.users}</span>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" className="flex-1">
                  <Icon name="Edit" size={14} className="mr-2" />
                  Редактировать
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="MoreVertical" size={14} />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-none shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="Clock" size={24} className="text-primary" />
            Последние подписки
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentSubscriptions.map((sub, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <Icon name="User" size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{sub.user}</p>
                    <p className="text-sm text-muted-foreground">Тариф: {sub.plan}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="font-semibold text-foreground">{sub.amount}</p>
                    <p className="text-xs text-muted-foreground">{sub.date}</p>
                  </div>
                  <Badge variant={sub.status === 'active' ? 'default' : 'secondary'}>
                    {sub.status === 'active' ? 'Активна' : 'Истекла'}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
