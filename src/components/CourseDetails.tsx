
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, PlayCircle, Download, Award, Infinity } from "lucide-react";

export const CourseDetails = () => {
  const modules = [
    {
      title: "Preparação das Mãos e dos Pés"
    },
    {
      title: "Lixamento e Polimento da Unha"
    },
    {
      title: "Cutilagem Perfeita, Fundinha e Corte Bordado"
    },
    {
      title: "Francesinhas e Decorações Especiais"
    },
    {
      title: "Esmaltação e Acabamento"
    },
    {
      title: "Esfoliação dos Pés e Muito Mais"
    }
  ];

  const benefits = [
    { icon: Clock, text: "15 horas de conteúdo exclusivo" },
    { icon: PlayCircle, text: "60 vídeo-aulas em alta definição" },
    { icon: Download, text: "Material de apoio para download" },
    { icon: Award, text: "98% de avaliações positivas" },
    { icon: Infinity, text: "Garantia de 7 dias" },
    { icon: Users, text: "Grupo VIP de alunas no WhatsApp" }
  ];

  return (
    <section id="curso" className="py-20 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="bg-primary/10 text-primary mb-4">Conteúdo do Curso</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Curso de especialização em cutilagem para
            <span className="gradient-text"> manicure e pedicure</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Válido para iniciantes e manicures com dificuldades ou em busca de aperfeiçoamento na profissão!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 space-y-6">
            {modules.map((module, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{module.title}</h3>
                    </div>
                    <Badge variant="secondary">Módulo {index + 1}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-pink-50 to-white border-pink-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-center">O que está incluso:</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <benefit.icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm">{benefit.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
