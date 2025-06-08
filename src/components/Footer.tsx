
import { Sparkles, Instagram, Facebook, Youtube } from "lucide-react";

export const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const openInstagramLink = () => {
    window.open('https://go.hotmart.com/V100100631Q?ap=36b9', '_blank');
  };

  const openFacebookLink = () => {
    window.open('https://go.hotmart.com/V100100631Q?ap=f666', '_blank');
  };

  const openYoutubeLink = () => {
    window.open('https://go.hotmart.com/V100100631Q?ap=9f1c', '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 gradient-pink rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">Faby Cardoso</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transformando vidas através da especialização em cutilagem profissional. 
              Mais de 2.500 alunas já mudaram suas carreiras conosco.
            </p>
            <div className="flex space-x-4">
              <Instagram 
                className="w-5 h-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" 
                onClick={openInstagramLink}
              />
              <Facebook 
                className="w-5 h-5 text-gray-400 hover:text-primary cursor-pointer transition-colors"
                onClick={openFacebookLink}
              />
              <Youtube 
                className="w-5 h-5 text-gray-400 hover:text-primary cursor-pointer transition-colors"
                onClick={openYoutubeLink}
              />
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <div className="space-y-2 text-sm">
              <button 
                onClick={() => scrollToSection('curso')}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Sobre o Curso
              </button>
              <button 
                onClick={() => scrollToSection('preco')}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Preços
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>© 2024 Faby Cardoso. Todos os direitos reservados.</p>
          <p className="mt-2">Desenvolvido com ❤️ para transformar carreiras</p>
        </div>
      </div>
    </footer>
  );
};
