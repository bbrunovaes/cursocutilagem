
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users, TrendingUp } from "lucide-react";

export const CTA = () => {
  const scrollToPrice = () => {
    const element = document.getElementById('preco');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-pink-500 via-pink-600 to-pink-700 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="7" cy="7" r="7"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Sua nova carreira começa
            <br />
            <span className="text-yellow-300">agora!</span>
          </h2>
          <p className="text-xl lg:text-2xl text-pink-100 max-w-3xl mx-auto leading-relaxed">
            Não deixe essa oportunidade passar. Transforme sua vida profissional e financeira hoje mesmo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
            <CardContent className="p-6">
              <Clock className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Oferta Limitada</h3>
              <p className="text-pink-100">40% de desconto válido apenas até o final desta semana</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
            <CardContent className="p-6">
              <Users className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Vagas Limitadas</h3>
              <p className="text-pink-100">Apenas 50 vagas disponíveis para garantir qualidade do suporte</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
            <CardContent className="p-6">
              <TrendingUp className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">ROI Garantido</h3>
              <p className="text-pink-100">Investimento se paga em menos de 1 mês de trabalho</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-white text-pink-600 hover:bg-gray-100 font-bold px-12 py-6 text-xl rounded-full shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105 pulse-pink"
            onClick={scrollToPrice}
          >
            Garantir Minha Vaga Agora
          </Button>
          
          <div className="mt-6 text-pink-100">
            <p className="text-sm">✅ Acesso imediato após a compra</p>
            <p className="text-sm">✅ Garantia de 30 dias ou seu dinheiro de volta</p>
            <p className="text-sm">✅ Suporte especializado incluído</p>
          </div>
        </div>
      </div>
    </section>
  );
};
