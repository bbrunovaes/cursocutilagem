
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Award, Users, TrendingUp } from "lucide-react";

export const About = () => {
  const achievements = [
    { icon: Users, number: "2.500+", text: "Alunas formadas" },
    { icon: Star, number: "4.9", text: "Avaliação média" },
    { icon: Award, number: "8+", text: "Anos de experiência" },
    { icon: TrendingUp, number: "95%", text: "Taxa de sucesso" }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div>
              <Badge className="bg-primary/10 text-primary mb-4">Sobre a Instrutora</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Conheça a
                <span className="gradient-text"> Faby Cardoso</span>
              </h2>
            </div>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Com mais de 8 anos de experiência no mercado de beleza, Faby Cardoso é reconhecida como uma das maiores especialistas em cutilagem do Brasil. Formada pela renomada Academia Internacional de Beleza, ela já treinou mais de 2.500 profissionais.
              </p>
              <p>
                Sua técnica exclusiva combina precisão, agilidade e cuidado, garantindo resultados excepcionais e clientes satisfeitas. Faby é também empresária de sucesso, proprietária de 3 salões de beleza em São Paulo.
              </p>
              <p>
                Agora, pela primeira vez, ela compartilha todos os seus segredos em um curso online completo, permitindo que você aprenda diretamente com quem mais entende do assunto.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center p-4 bg-pink-50 rounded-2xl">
                  <achievement.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">{achievement.number}</div>
                  <div className="text-sm text-gray-600">{achievement.text}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=700&fit=crop" 
                alt="Faby Cardoso trabalhando"
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
            
            <Card className="absolute -bottom-6 -left-6 bg-white shadow-xl z-20 animate-scale-in">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Melhor Instrutora</div>
                    <div className="text-xs text-gray-600">Prêmio Beleza Brasil 2023</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="absolute -top-6 -right-6 bg-white shadow-xl z-20 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">+300% de lucro</div>
                    <div className="text-xs text-gray-600">Média das alunas</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
