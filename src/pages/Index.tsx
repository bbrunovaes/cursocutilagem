
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CourseDetails } from "@/components/CourseDetails";
import { Pricing } from "@/components/Pricing";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <CourseDetails />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
