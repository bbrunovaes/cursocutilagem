
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, CreditCard, Smartphone, Clock } from "lucide-react";

export const Pricing = () => {
  const features = [
    "15 horas de vídeo-aulas",
    "60 lições práticas",
    "Material de apoio PDF",
    "Certificado de conclusão",
    "Acesso vitalício",
    "Grupo VIP WhatsApp",
    "Kit com 50+ designs",
    "Suporte individualizado",
    "Garantia de 7 dias"
  ];

  return (
    <section id="preco" className="py-20 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="bg-primary/10 text-primary mb-4">Investimento</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Escolha o plano ideal para
            <span className="gradient-text"> sua especialização</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Invista em sua carreira profissional com um curso completo e prático.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <Card className="relative overflow-hidden border-primary shadow-xl hover:shadow-2xl transition-shadow">
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-pink-500 to-pink-600 text-white text-center py-2 text-sm font-semibold">
                ⭐ OFERTA ESPECIAL
              </div>
              
              <CardContent className="p-8 pt-12">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">Curso Completo</h3>
                  <p className="text-gray-600 mb-6">Especialização em cutilagem para manicure e pedicure</p>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold gradient-text">R$ 59,00</div>
                    <div className="text-sm text-gray-600">à vista no PIX</div>
                    <div className="text-sm text-gray-600">ou 6x de R$ 11,06</div>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full gradient-pink text-white hover:opacity-90 transition-opacity pulse-pink">
                  Começar Agora
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Métodos de Pagamento */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-6">Formas de Pagamento</h3>
          <div className="flex justify-center gap-8 text-gray-600">
            <div className="flex items-center gap-2">
              <CreditCard className="w-5 h-5" />
              <span>Cartão de Crédito</span>
            </div>
            <div className="flex items-center gap-2">
              <Smartphone className="w-5 h-5" />
              <span>PIX</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Boleto</span>
            </div>
          </div>
          
          <div className="mt-8 bg-green-50 border border-green-200 rounded-2xl p-6 max-w-md mx-auto">
            <div className="text-green-800 font-semibold mb-2">🔒 Compra 100% Segura</div>
            <div className="text-sm text-green-700">
              Garantia de 7 dias. Não gostou? Devolvemos seu dinheiro.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
