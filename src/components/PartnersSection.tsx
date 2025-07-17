import React from 'react';
import { Card } from '@/components/ui/card';

const partners = [
  {
    name: 'ТОО "СтройГрад"',
    description: 'Генеральный подрядчик',
  },
  {
    name: 'КазАвтоДор',
    description: 'Дорожное строительство',
  },
  {
    name: 'НурСултан Девелопмент',
    description: 'Жилищное строительство',
  },
  {
    name: 'АрхиСтрой ЛТД',
    description: 'Коммерческие объекты',
  },
  {
    name: 'КазИнфраСтрой',
    description: 'Инфраструктурные проекты',
  },
  {
    name: 'ЕвразияСтрой',
    description: 'Промышленное строительство',
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
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-construction transition-all duration-300 group">
              <div className="mb-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-lg mx-auto flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">
                    {partner.name.substring(0, 2)}
                  </span>
                </div>
              </div>
              <h3 className="font-semibold text-sm mb-2 text-foreground leading-tight">
                {partner.name}
              </h3>
              <p className="text-xs text-muted-foreground">
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