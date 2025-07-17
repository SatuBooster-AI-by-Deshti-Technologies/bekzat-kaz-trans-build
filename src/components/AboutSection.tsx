import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Award, Clock, MapPin, Users, Shield } from "lucide-react";

const advantages = [
  {
    icon: CheckCircle,
    title: "Собственный парк техники",
    description: "Более 50 единиц современной строительной техники в отличном состоянии"
  },
  {
    icon: Users,
    title: "Опытные специалисты",
    description: "Команда профессионалов с многолетним опытом в строительной сфере"
  },
  {
    icon: Award,
    title: "Гарантия качества",
    description: "Все работы выполняются в соответствии с техническими требованиями и стандартами"
  },
  {
    icon: Clock,
    title: "Соблюдение сроков",
    description: "Точное планирование и контроль выполнения работ в установленные сроки"
  },
  {
    icon: Shield,
    title: "Лицензии и сертификаты",
    description: "Все необходимые разрешительные документы и страхование"
  },
  {
    icon: MapPin,
    title: "Работаем по всему Казахстану",
    description: "Готовы выполнить проект в любом регионе страны"
  }
];

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              О компании
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Компания <span className="font-semibold text-primary">BEKZAT KAZ TRANS SERVICE</span> – 
                это команда профессионалов с многолетним опытом в строительной сфере. 
                Мы выполняем работы любой сложности, используя надёжную спецтехнику и 
                проверенные технологии.
              </p>
              <p>
                Наши специалисты имеют все необходимые лицензии и сертификаты, 
                а техника регулярно проходит техническое обслуживание. Мы гордимся тем, 
                что реализуем проекты качественно и в срок, помогая создавать прочную и 
                надёжную инфраструктуру.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-primary/10 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Лет на рынке</div>
              </div>
              <div className="text-center p-4 bg-accent/10 rounded-lg">
                <div className="text-2xl font-bold text-accent mb-1">от 7 дней</div>
                <div className="text-sm text-muted-foreground">Минимальный срок</div>
              </div>
            </div>
            
            <Button className="mt-8 bg-primary hover:bg-primary-glow text-primary-foreground shadow-construction">
              Получить консультацию
            </Button>
          </div>
          
          {/* Advantages Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {advantages.map((advantage, index) => (
              <Card key={index} className="group hover:shadow-card-custom transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <advantage.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 text-sm">
                    {advantage.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;