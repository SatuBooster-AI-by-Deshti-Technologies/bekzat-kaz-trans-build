import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="block">BEKZAT KAZ</span>
          <span className="block">TRANS SERVISE</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Строительные работы любой сложности с использованием современной техники
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a 
            href="tel:+77071117425"
            className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-4 text-lg shadow-construction transition-all duration-300 hover:scale-105 rounded-lg font-medium flex items-center"
          >
            <Phone className="mr-2 h-5 w-5" />
            Заказать консультацию
          </a>
          
          <a 
            href="https://wa.link/gkiud2" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border-2 border-white/80 text-white bg-white/10 hover:bg-white hover:text-foreground px-8 py-4 text-lg transition-all duration-300 rounded-lg font-medium flex items-center"
          >
            Узнать больше
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold mb-1">11+</div>
            <div className="text-sm">Лет опыта</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold mb-1">50+</div>
            <div className="text-sm">Единиц техники</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold mb-1">500+</div>
            <div className="text-sm">Проектов</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold mb-1">100%</div>
            <div className="text-sm">Качество</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;