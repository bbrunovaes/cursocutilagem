
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, CreditCard, Smartphone, Clock } from "lucide-react";

export const Pricing = () => {
  const features = [
    { feature: "8+ horas de vídeo-aulas", basic: true, premium: true },
    { feature: "36 lições práticas", basic: true, premium: true },
    { feature: "Material de apoio PDF", basic: true, premium: true },
    { feature: "Certificado de conclusão", basic: true, premium: true },
    { feature: "Acesso vitalício", basic: false, premium: true },
    { feature: "Grupo VIP WhatsApp", basic: false, premium: true },
    { feature: "Kit com 50+ designs", basic: false, premium: true },
    { feature: "Suporte individualizado", basic: false, premium: true },
    { feature: "Aulas ao vivo mensais", basic: false, premium: true },
    { feature: "Garantia de 30 dias", basic: true, premium: true }
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
            Transforme sua carreira com um investimento que se paga em apenas 1 mês de trabalho.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Plano Básico */}
          <Card className="relative overflow-hidden hover:shadow-xl transition-shadow">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Plano Básico</h3>
                <p className="text-gray-600 mb-6">Ideal para quem está começando</p>
                <div className="space-y-2">
                  <div className="text-sm text-gray-500 line-through">De R$ 497</div>
                  <div className="text-4xl font-bold text-primary">R$ 297</div>
                  <div className="text-sm text-gray-600">ou 12x de R$ 29,70</div>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {features.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    {item.basic ? (
                      <Check className="w-5 h-5 text-green-500" />
                    ) : (
                      <X className="w-5 h-5 text-gray-300" />
                    )}
                    <span className={item.basic ? "text-gray-700" : "text-gray-400"}>
                      {item.feature}
                    </span>
                  </div>
                ))}
              </div>

              <Button className="w-full" variant="outline">
                Começar Agora
              </Button>
            </CardContent>
          </Card>

          {/* Plano Premium */}
          <Card className="relative overflow-hidden border-primary shadow-xl hover:shadow-2xl transition-shadow">
            <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-pink-500 to-pink-600 text-white text-center py-2 text-sm font-semibold">
              ⭐ MAIS ESCOLHIDO - 40% OFF
            </div>
            
            <CardContent className="p-8 pt-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Plano Premium</h3>
                <p className="text-gray-600 mb-6">Experiência completa + bônus exclusivos</p>
                <div className="space-y-2">
                  <div className="text-sm text-gray-500 line-through">De R$ 997</div>
                  <div className="text-4xl font-bold gradient-text">R$ 597</div>
                  <div className="text-sm text-gray-600">ou 12x de R$ 59,70</div>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {features.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{item.feature}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full gradient-pink text-white hover:opacity-90 transition-opacity pulse-pink">
                Quero o Premium
              </Button>
            </CardContent>
          </Card>
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
              Garantia incondicional de 30 dias. Não gostou? Devolvemos seu dinheiro.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
