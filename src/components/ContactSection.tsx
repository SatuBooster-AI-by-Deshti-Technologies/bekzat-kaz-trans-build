import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Адрес",
    details: ["г. Алматы, Райымбек батыр 375 д", "Казахстан"]
  },
  {
    icon: Phone,
    title: "Телефон",
    details: ["+77071117425"]
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@bekzatkts.kz", "order@bekzatkts.kz"]
  },
  {
    icon: Clock,
    title: "Режим работы",
    details: ["Пн-Пт: 8:00 - 18:00", "Сб: 9:00 - 15:00"]
  }
];

const ContactSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Контакты
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Свяжитесь с нами для получения консультации и расчета стоимости работ
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-card-custom">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">
                Оставить заявку
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Имя *
                  </label>
                  <Input placeholder="Ваше имя" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Телефон *
                  </label>
                  <Input placeholder="+7 (___) ___-__-__" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Email
                </label>
                <Input type="email" placeholder="your@email.com" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Услуга
                </label>
                <Input placeholder="Какая услуга вас интересует?" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Сообщение
                </label>
                <Textarea 
                  placeholder="Опишите ваш проект подробнее..."
                  className="min-h-[120px]"
                />
              </div>
              
              <Button className="w-full bg-primary hover:bg-primary-glow text-primary-foreground shadow-construction">
                Отправить заявку
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-card-custom transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {info.title}
                      </h3>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {/* CTA Card */}
            <Card className="bg-gradient-primary text-primary-foreground shadow-construction">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Готовы начать ваш проект?
                </h3>
                <p className="mb-6 opacity-90">
                  Получите бесплатную консультацию и расчет стоимости работ
                </p>
                <Button 
                  variant="outline" 
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Позвонить сейчас
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;