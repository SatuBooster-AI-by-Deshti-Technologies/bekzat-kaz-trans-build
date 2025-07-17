import React from 'react';
import { Card } from '@/components/ui/card';
import biGroupLogo from '@/assets/bi-group-logo.png';

const partners = [
  {
    name: 'BI Group',
    description: 'Стратегический партнер',
  },
];

const PartnersSection = () => {
  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Наши Партнеры
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Мы сотрудничаем с ведущими строительными компаниями и застройщиками Казахстана
          </p>
        </div>
        
        <div className="flex justify-center">
          {partners.map((partner, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-construction transition-all duration-300 group max-w-sm">
              <div className="mb-6">
                <div className="w-24 h-24 bg-white rounded-lg mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 p-2">
                  <img 
                    src={biGroupLogo} 
                    alt="BI Group Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">
                {partner.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {partner.description}
              </p>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Более <span className="font-bold text-primary">50+ успешных проектов</span> реализовано совместно с партнерами
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;