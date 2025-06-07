
import { Sparkles, Instagram, Facebook, Youtube, Mail, Phone } from "lucide-react";

export const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
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
              <Instagram className="w-5 h-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
              <Facebook className="w-5 h-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
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

          {/* Suporte */}
          <div>
            <h4 className="font-semibold mb-4">Suporte</h4>
            <div className="space-y-2 text-sm">
              <div className="text-gray-400">Central de Ajuda</div>
              <div className="text-gray-400">Política de Privacidade</div>
              <div className="text-gray-400">Termos de Uso</div>
              <div className="text-gray-400">Garantia</div>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4" />
                contato@fabycardoso.com.br
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Phone className="w-4 h-4" />
                (11) 99999-9999
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>© 2024 Faby Cardoso. Todos os direitos reservados.</p>
          <p className="mt-2">CNPJ: 00.000.000/0001-00 | Desenvolvido com ❤️ para transformar carreiras</p>
        </div>
      </div>
    </footer>
  );
};
