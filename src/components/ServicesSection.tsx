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
    image: excavatorImage
  },
  {
    icon: Construction,
    title: "Асфальтирование дорог",
    description: "Полный цикл работ по укладке асфальта - от подготовки основания до финального покрытия.",
    image: roadImage
  },
  {
    icon: Mountain,
    title: "Земельные работы",
    description: "Планировка, выемка и отсыпка грунта. Подготовка участков для строительства.",
    image: earthworkImage
  },
  {
    icon: TreePine,
    title: "Благоустройство территорий",
    description: "Создание комфортных городских пространств, укладка тротуаров, озеленение.",
    image: earthworkImage
  },
  {
    icon: Construction,
    title: "Водопровод",
    description: "Прокладка и монтаж водопроводных сетей для жилых и коммерческих объектов.",
    image: roadImage
  },
  {
    icon: Mountain,
    title: "Канализация",
    description: "Устройство канализационных систем и сетей различной сложности.",
    image: earthworkImage
  },
  {
    icon: Shovel,
    title: "Наружные сети",
    description: "Прокладка наружных инженерных сетей: электричество, газ, связь.",
    image: excavatorImage
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
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground">
                    {service.title}
                  </h3>
                  <Badge variant="secondary" className="text-xs">
                    Популярная услуга
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;