
import { Button } from "@/components/ui/button";
import { Play, Star, Users, Award } from "lucide-react";

export const Hero = () => {
  const scrollToPrice = () => {
    const element = document.getElementById('preco');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-pink-50 pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="gradient-text">Curso de Cutilagem</span>
                <br />
                <span className="text-gray-800">para Manicures</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Especialize-se na técnica mais avançada de cutilagem com 
                <span className="font-semibold text-primary"> Faby Cardoso</span>. 
                Transforme sua carreira e aumente seus ganhos.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span>4.9/5 estrelas</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span>+2.500 alunas</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                <span>Certificado incluso</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="gradient-pink text-white hover:opacity-90 transition-opacity pulse-pink"
                onClick={scrollToPrice}
              >
                Começar Agora
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                <Play className="w-5 h-5 mr-2" />
                Ver Demonstração
              </Button>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-pink-100">
              <p className="text-sm text-gray-600 mb-2">Oferta especial termina em:</p>
              <div className="flex gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">02</div>
                  <div className="text-xs text-gray-500">DIAS</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">14</div>
                  <div className="text-xs text-gray-500">HORAS</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">35</div>
                  <div className="text-xs text-gray-500">MIN</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 floating-animation">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=700&fit=crop" 
                alt="Faby Cardoso - Especialista em Cutilagem"
                className="rounded-3xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-32 h-32 gradient-pink rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-24 h-24 gradient-pink rounded-full opacity-30 animate-pulse delay-75"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
