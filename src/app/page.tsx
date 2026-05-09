import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import StorySection from "@/components/StorySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import StoreSection from "@/components/StoreSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-cream min-h-screen">
      <Navbar />
      <HeroSection />
      <MenuSection />
      <StorySection />
      <TestimonialsSection />
      <StoreSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
