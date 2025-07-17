import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection"; 
import ServicesSection from "@/components/ServicesSection";
import EquipmentSection from "@/components/EquipmentSection";
import PortfolioSection from "@/components/PortfolioSection";
import PartnersSection from "@/components/PartnersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";


const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        
        <section id="about">
          <AboutSection />
        </section>
        
        <section id="services">
          <ServicesSection />
        </section>
        
        <section id="equipment">
          <EquipmentSection />
        </section>
        
        <section id="portfolio">
          <PortfolioSection />
        </section>
        
        <section id="partners">
          <PartnersSection />
        </section>
        
        <section id="contacts">
          <ContactSection />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
