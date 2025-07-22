import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Play } from "lucide-react";

const videos = [
  {
    id: "1",
    title: "Земельные работы - Экскавация котлована",
    thumbnail: "/placeholder.svg",
    videoUrl: "#",
    description: "Профессиональная разработка котлованов под фундамент"
  },
  {
    id: "2", 
    title: "Асфальтирование дороги",
    thumbnail: "/placeholder.svg",
    videoUrl: "#",
    description: "Качественная укладка асфальтобетонного покрытия"
  },
  {
    id: "3",
    title: "Прокладка водопровода",
    thumbnail: "/placeholder.svg", 
    videoUrl: "#",
    description: "Монтаж современных водопроводных систем"
  },
  {
    id: "4",
    title: "Благоустройство территории",
    thumbnail: "/placeholder.svg",
    videoUrl: "#", 
    description: "Комплексное благоустройство городских пространств"
  }
];

const VideoSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Наши работы в действии
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Посмотрите как мы выполняем строительные работы профессионально и качественно
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {videos.map((video) => (
                <CarouselItem key={video.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="group overflow-hidden hover:shadow-construction transition-all duration-300 hover:-translate-y-2">
                    <div className="relative h-48 overflow-hidden cursor-pointer">
                      <img 
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-accent/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Play className="h-6 w-6 text-white ml-1" fill="currentColor" />
                        </div>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-foreground mb-2">
                        {video.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {video.description}
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;