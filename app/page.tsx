import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";
import Hows from "@/components/sections/Hows";
import Testimonials from "@/components/sections/Testimonials";
import StickyCTA from "@/components/sections/StickyCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen max-w-screen overflow-x-hidden bg-[#020617]">
      <Navbar />
      <Hero />
      {/* Adding a spacer or ensuring Hero has enough 
          top padding handles the fixed navbar 
      */}
      <Portfolio />
      <Hows/>
      <Testimonials/>
      <Contact />
      <StickyCTA/>
      <Footer/>
  
    </main>
  );
}