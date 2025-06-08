
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Manicure Profissional",
      content: "O curso da Faby transformou completamente minha carreira. Em 3 meses, dobrei meus ganhos e consegui uma clientela fiel. As técnicas são incríveis!",
      rating: 5,
      initials: "MS"
    },
    {
      name: "Ana Santos",
      role: "Proprietária de Salão",
      content: "Depois do curso, consegui oferecer um serviço diferenciado no meu salão. Minhas clientes ficam impressionadas com a qualidade da cutilagem.",
      rating: 5,
      initials: "AS"
    },
    {
      name: "Carla Oliveira",
      role: "Manicure Iniciante",
      content: "Nunca imaginei que conseguiria aprender tão rápido. A Faby explica de forma muito clara e as aulas são super práticas. Recomendo demais!",
      rating: 5,
      initials: "CO"
    },
    {
      name: "Juliana Costa",
      role: "Empreendedora",
      content: "Investir neste curso foi a melhor decisão que tomei. Hoje trabalho de casa, tenho minha agenda lotada e ganho muito bem. Gratidão eterna à Faby!",
      rating: 5,
      initials: "JC"
    },
    {
      name: "Fernanda Lima",
      role: "Manicure Profissional",
      content: "A técnica da Faby é única! Consegui reduzir o tempo de atendimento pela metade e ainda melhorar a qualidade do meu trabalho.",
      rating: 5,
      initials: "FL"
    },
    {
      name: "Patrícia Rocha",
      role: "Estudante",
      content: "Curso completo e muito bem estruturado. Saí do zero e hoje já trabalho profissionalmente. O suporte da Faby é excepcional!",
      rating: 5,
      initials: "PR"
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            O que as alunas estão falando sobre o
            <span className="gradient-text"> curso</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais de 2.500 profissionais já transformaram suas carreiras com nosso método exclusivo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-primary text-white">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
