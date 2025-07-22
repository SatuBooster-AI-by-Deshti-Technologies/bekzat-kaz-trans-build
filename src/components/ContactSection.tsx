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
          
        </div>
      </div>
    </section>
  );
};

export default ContactSection;