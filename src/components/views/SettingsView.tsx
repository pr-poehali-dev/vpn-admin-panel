import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export const SettingsView = () => {
  return (
    <div className="p-8 space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">Настройки</h1>
        <p className="text-muted-foreground">Конфигурация системы и параметры</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 space-y-6">
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Building" size={24} className="text-primary" />
                Общие настройки
              </CardTitle>
              <CardDescription>Основные параметры VPN сервиса</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company-name">Название компании</Label>
                  <Input id="company-name" placeholder="VPN Service" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="support-email">Email поддержки</Label>
                  <Input id="support-email" type="email" placeholder="support@vpn.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="website">Веб-сайт</Label>
                <Input id="website" placeholder="https://vpn.com" />
              </div>
              <Button className="bg-gradient-to-r from-primary to-accent">
                <Icon name="Save" size={18} className="mr-2" />
                Сохранить изменения
              </Button>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Shield" size={24} className="text-primary" />
                Безопасность
              </CardTitle>
              <CardDescription>Настройки безопасности и аутентификации</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                <div className="space-y-1">
                  <p className="font-medium text-foreground">Двухфакторная аутентификация</p>
                  <p className="text-sm text-muted-foreground">Требовать 2FA для администраторов</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                <div className="space-y-1">
                  <p className="font-medium text-foreground">Автоматическая блокировка</p>
                  <p className="text-sm text-muted-foreground">Блокировать после 5 неудачных попыток входа</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                <div className="space-y-1">
                  <p className="font-medium text-foreground">Логирование всех действий</p>
                  <p className="text-sm text-muted-foreground">Записывать все действия администраторов</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="space-y-2">
                <Label htmlFor="session-timeout">Таймаут сессии (минуты)</Label>
                <Select defaultValue="60">
                  <SelectTrigger id="session-timeout">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="15">15 минут</SelectItem>
                    <SelectItem value="30">30 минут</SelectItem>
                    <SelectItem value="60">60 минут</SelectItem>
                    <SelectItem value="120">2 часа</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Mail" size={24} className="text-primary" />
                Уведомления
              </CardTitle>
              <CardDescription>Настройка email уведомлений</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                <div className="space-y-1">
                  <p className="font-medium text-foreground">Новые регистрации</p>
                  <p className="text-sm text-muted-foreground">Уведомлять о новых пользователях</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                <div className="space-y-1">
                  <p className="font-medium text-foreground">Проблемы с серверами</p>
                  <p className="text-sm text-muted-foreground">Критические ошибки серверов</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                <div className="space-y-1">
                  <p className="font-medium text-foreground">Отчёты о платежах</p>
                  <p className="text-sm text-muted-foreground">Ежедневные финансовые отчёты</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Server" size={24} className="text-accent" />
                Система
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Версия системы</span>
                  <span className="font-semibold">v2.5.1</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Последнее обновление</span>
                  <span className="font-semibold">15.10.2024</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">База данных</span>
                  <span className="font-semibold">PostgreSQL 15</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Аптайм</span>
                  <span className="font-semibold text-green-600">99.98%</span>
                </div>
              </div>
              <Separator />
              <Button variant="outline" className="w-full">
                <Icon name="Download" size={18} className="mr-2" />
                Проверить обновления
              </Button>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Database" size={24} className="text-accent" />
                Резервные копии
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Последняя резервная копия</p>
                <p className="font-semibold">28.10.2024, 03:00</p>
              </div>
              <Separator />
              <div className="space-y-2">
                <Label htmlFor="backup-frequency">Частота бэкапов</Label>
                <Select defaultValue="daily">
                  <SelectTrigger id="backup-frequency">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hourly">Каждый час</SelectItem>
                    <SelectItem value="daily">Ежедневно</SelectItem>
                    <SelectItem value="weekly">Еженедельно</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button variant="outline" className="w-full">
                <Icon name="Download" size={18} className="mr-2" />
                Создать бэкап сейчас
              </Button>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg border-destructive/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-destructive">
                <Icon name="AlertTriangle" size={24} />
                Опасная зона
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full text-destructive border-destructive/50 hover:bg-destructive/10">
                <Icon name="RefreshCw" size={18} className="mr-2" />
                Сбросить все настройки
              </Button>
              <Button variant="destructive" className="w-full">
                <Icon name="Trash2" size={18} className="mr-2" />
                Очистить все данные
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
