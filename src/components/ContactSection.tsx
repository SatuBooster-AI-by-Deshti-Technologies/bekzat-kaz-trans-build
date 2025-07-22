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



export default ContactSection;