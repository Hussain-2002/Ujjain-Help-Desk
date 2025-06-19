import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import QueryForm from "@/components/QueryForm";
import LocationsSection from "@/components/LocationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      <Header />
      <HeroSection />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        <QueryForm />
        <LocationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
