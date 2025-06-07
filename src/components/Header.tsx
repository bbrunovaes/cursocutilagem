
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-pink-100 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 gradient-pink rounded-lg flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl gradient-text">Faby Cardoso</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('curso')}
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Curso
          </button>
          <button 
            onClick={() => scrollToSection('preco')}
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Preço
          </button>
        </nav>

        <Button 
          onClick={() => scrollToSection('preco')}
          className="gradient-pink text-white hover:opacity-90 transition-opacity"
        >
          Inscrever-se
        </Button>
      </div>
    </header>
  );
