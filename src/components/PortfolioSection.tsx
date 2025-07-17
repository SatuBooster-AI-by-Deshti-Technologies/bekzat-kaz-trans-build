import { Card, CardContent } from "@/components/ui/card";
import { Building, GraduationCap, Hospital } from "lucide-react";

const projects = [
  {
    icon: Hospital,
    title: "Госпиталь",
    category: "Медицинское учреждение"
  },
  {
    icon: Hospital,
    title: "Госпиталь",
    category: "Медицинское учреждение"
  },
  {
    icon: Hospital,
    title: "Туркестан госпиталь",
    category: "Медицинское учреждение"
  },
  {
    icon: GraduationCap,
    title: "Школа Дархан",
    category: "Образовательное учреждение"
  },
  {
    icon: Building,
    title: "КБТУ",
    category: "Университет"
  },
  {
    icon: GraduationCap,
    title: "Школа Кемертоган, Каскелен, Узынагаш",
    category: "Образовательные учреждения"
  },
  {
    icon: GraduationCap,
    title: "НИШ Алатауский",
    category: "Назарбаев Интеллектуальная школа"
  },
  {
    icon: GraduationCap,
    title: "НИШ Наурызбайский",
    category: "Назарбаев Интеллектуальная школа"
  }
];

const PortfolioSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Наши объекты
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Реализованные проекты различной сложности по всему Казахстану
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-construction transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <project.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-bold text-foreground mb-2 text-lg leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {project.category}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Более <span className="font-bold text-primary">50+ успешных проектов</span> реализовано за 11+ лет работы
          </p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;