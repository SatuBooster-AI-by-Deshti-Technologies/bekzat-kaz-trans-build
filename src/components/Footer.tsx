import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-accent mb-4">
              BEKZAT KAZ TRANS SERVISE
            </h3>
            <p className="text-background/80 mb-4 leading-relaxed">
              Профессиональные строительные работы любой сложности с использованием 
              современной техники по всему Казахстану.
            </p>
            <div className="text-sm text-background/60">
              © 2025 Deshti Technologies
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">Услуги</h4>
            <ul className="space-y-2 text-background/80">
              <li>Разработка котлованов</li>
              <li>Асфальтирование дорог</li>
              <li>Земельные работы</li>
              <li>Благоустройство территорий</li>
              <li>Прочие строительные работы</li>
            </ul>
          </div>

          {/* Equipment */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">Техника</h4>
            <ul className="space-y-2 text-background/80">
              <li>Экскаваторы и погрузчики</li>
              <li>Краны и подъемники</li>
              <li>Самосвалы и тралы</li>
              <li>Компрессоры и катки</li>
              <li>Дорожная техника</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">Контакты</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                <div className="text-background/80 text-sm">
                  г. Алматы, ул. Райымбек 375Д<br />
                  Казахстан
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                <div className="text-background/80 text-sm">
                  +7 (707) 111-74-25
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                <div className="text-background/80 text-sm">
                  office@deshti.kz
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                <div className="text-background/80 text-sm">
                  Пн-Пт: 8:00 - 22:00<br />
                  Сб: 8:00 - 22:00
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-background/60 text-sm">
              Все права защищены.
            </div>
            <div className="text-background/60 text-sm">
              Работаем по всему Казахстану
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;