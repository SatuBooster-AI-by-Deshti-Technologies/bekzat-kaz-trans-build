import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Truck, Construction, Cog, Calendar } from "lucide-react";
import craneImage from "@/assets/crane.jpg";

const equipment = [
  {
    category: "Экскаваторы",
    icon: Cog,
    items: [
      { name: "Экскаватор колесный Hitachi W180", year: "2020", specs: "18т" },
      { name: "Экскаватор колесный W140", year: "2019", specs: "14т" },
      { name: "Экскаватор гусеничный Doosan 360", year: "2021", specs: "36т" }
    ]
  },
  {
    category: "Грузовая техника", 
    icon: Truck,
    items: [
      { name: "КамАЗ самосвал 65115", year: "2020-2023", specs: "15т", quantity: "3 шт" },
      { name: "Шахман", year: "2020-2023", specs: "25т", quantity: "4 шт" },
      { name: "Трал Мерседес", year: "2019", specs: "40т" }
    ]
  },
  {
    category: "Краны и подъемники",
    icon: Construction,
    items: [
      { name: "Кран стрелочный", year: "2020-2021", specs: "25т", quantity: "3 шт" },
      { name: "Кран Sunny", year: "2022", specs: "25т" }
    ]
  },
  {
    category: "Погрузчики",
    icon: Cog,
    items: [
      { name: "Погрузчик фронтальный", year: "2020-2024", specs: "3 куб", quantity: "2 шт" },
      { name: "Погрузчик фронтальный", year: "2020-2021", specs: "2 куб", quantity: "2 шт" },
      { name: "Погрузчик-экскаватор 3в1", year: "2014", specs: "универсальный" }
    ]
  },
  {
    category: "Дополнительное оборудование",
    icon: Cog,
    items: [
      { name: "Воздушный компрессор Kaeser M50", year: "2021", specs: "высокой мощности" },
      { name: "Грунтовый каток", year: "2020-2023", specs: "16-20т" }
    ]
  }
];

const EquipmentSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Наша техника
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Современный парк строительной техники для выполнения работ любой сложности
          </p>
        </div>

        {/* Hero Equipment Image */}
        <div className="relative mb-16 rounded-2xl overflow-hidden">
          <img 
            src={craneImage} 
            alt="Строительная техника"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-4xl font-bold mb-4">50+ единиц техники</h3>
              <p className="text-xl">Готовы к работе в любое время</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipment.map((category, index) => (
            <Card key={index} className="hover:shadow-card-custom transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-foreground">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  {category.category}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {category.items.map((item, idx) => (
                  <div key={idx} className="bg-muted/50 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">
                      {item.name}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        <Calendar className="h-3 w-3 mr-1" />
                        {item.year}
                      </Badge>
                      <Badge className="bg-accent text-accent-foreground text-xs">
                        {item.specs}
                      </Badge>
                      {item.quantity && (
                        <Badge variant="secondary" className="text-xs">
                          {item.quantity}
                        </Badge>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;