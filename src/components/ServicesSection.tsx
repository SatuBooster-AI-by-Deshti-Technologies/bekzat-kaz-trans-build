import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shovel, Construction, Mountain, TreePine } from "lucide-react";
import excavatorImage from "@/assets/excavator.jpg";
import roadImage from "@/assets/road-construction.jpg";
import earthworkImage from "@/assets/earthwork.jpg";

const services = [
  {
    icon: Shovel,
    title: "Разработка котлованов",
    description: "Выполняем разработку котлованов под жилые, промышленные и коммерческие объекты с использованием современной спецтехники.",
    features: ["Глубина до 15 м", "Укрепление грунта", "Вывоз грунта"],
    image: excavatorImage
  },
  {
    icon: Construction,
    title: "Асфальтирование дорог",
    description: "Полный цикл работ по укладке асфальта - от подготовки основания до финального покрытия.",
    features: ["Дороги и парковки", "Качественные материалы", "Современная техника"],
    image: roadImage
  },
  {
    icon: Mountain,
    title: "Земельные работы",
    description: "Планировка, выемка и отсыпка грунта. Подготовка участков для строительства.",
    features: ["Выравнивание территории", "Укрепление склонов", "Отсыпка материалами"],
    image: earthworkImage
  },
  {
    icon: TreePine,
    title: "Благоустройство территорий",
    description: "Создание комфортных городских пространств, укладка тротуаров, озеленение.",
    features: ["Брусчатка и бордюры", "Озеленение", "Парки и аллеи"],
    image: earthworkImage
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Наши услуги
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Предоставляем полный спектр строительных услуг с гарантией качества и соблюдением сроков
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-construction transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <service.icon className="h-8 w-8 text-accent" />
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;