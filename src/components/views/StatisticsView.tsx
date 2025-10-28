import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export const StatisticsView = () => {
  const trafficData = [
    { month: 'Янв', traffic: 4200 },
    { month: 'Фев', traffic: 5100 },
    { month: 'Мар', traffic: 6300 },
    { month: 'Апр', traffic: 5800 },
    { month: 'Май', traffic: 7200 },
    { month: 'Июн', traffic: 8900 },
    { month: 'Июл', traffic: 9500 },
    { month: 'Авг', traffic: 10200 },
    { month: 'Сен', traffic: 11500 },
    { month: 'Окт', traffic: 12300 },
  ];

  const maxTraffic = Math.max(...trafficData.map(d => d.traffic));

  const topCountries = [
    { name: 'США', users: 1247, traffic: '45.2 TB', flag: '🇺🇸' },
    { name: 'Великобритания', users: 892, traffic: '32.8 TB', flag: '🇬🇧' },
    { name: 'Германия', users: 678, traffic: '28.5 TB', flag: '🇩🇪' },
    { name: 'Япония', users: 534, traffic: '21.3 TB', flag: '🇯🇵' },
    { name: 'Франция', users: 445, traffic: '18.7 TB', flag: '🇫🇷' },
  ];

  const protocolStats = [
    { protocol: 'OpenVPN', percentage: 45, color: 'bg-primary' },
    { protocol: 'WireGuard', percentage: 35, color: 'bg-secondary' },
    { protocol: 'IKEv2', percentage: 15, color: 'bg-accent' },
    { protocol: 'Другие', percentage: 5, color: 'bg-muted-foreground' },
  ];

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Статистика</h1>
          <p className="text-muted-foreground">Детальная аналитика использования</p>
        </div>
        <div className="flex gap-3">
          <Select defaultValue="30d">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Период" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Последние 7 дней</SelectItem>
              <SelectItem value="30d">Последние 30 дней</SelectItem>
              <SelectItem value="90d">Последние 90 дней</SelectItem>
              <SelectItem value="1y">Год</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-gradient-to-r from-primary to-accent shadow-lg">
            <Icon name="Download" size={18} className="mr-2" />
            Экспорт
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <Card className="xl:col-span-2 border-none shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="TrendingUp" size={24} className="text-primary" />
              Трафик по месяцам
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {trafficData.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-foreground w-12">{item.month}</span>
                    <span className="text-muted-foreground">{item.traffic} GB</span>
                  </div>
                  <div className="h-8 bg-muted rounded-lg overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
                      style={{ width: `${(item.traffic / maxTraffic) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="PieChart" size={24} className="text-accent" />
                Протоколы
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {protocolStats.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{item.protocol}</span>
                    <span className="text-sm font-semibold">{item.percentage}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full ${item.color} transition-all duration-500`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Activity" size={24} className="text-secondary" />
                Онлайн сейчас
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-4">
                <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  1,234
                </div>
                <p className="text-sm text-muted-foreground">активных подключений</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card className="border-none shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="Globe" size={24} className="text-primary" />
            Топ стран по использованию
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {topCountries.map((country, index) => (
              <div key={index} className="p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{country.flag}</span>
                  <div>
                    <p className="font-semibold text-foreground">{country.name}</p>
                    <p className="text-xs text-muted-foreground">{country.users} пользователей</p>
                  </div>
                </div>
                <div className="pt-2 border-t border-border">
                  <p className="text-sm text-muted-foreground">Трафик</p>
                  <p className="text-lg font-bold text-foreground">{country.traffic}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
