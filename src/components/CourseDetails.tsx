
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, PlayCircle, Download, Certificate, Infinity } from "lucide-react";

export const CourseDetails = () => {
  const modules = [
    {
      title: "Módulo 1: Fundamentos da Cutilagem",
      duration: "2h 30min",
      lessons: 8,
      topics: ["Anatomia das unhas", "Ferramentas essenciais", "Técnicas de higienização", "Preparação da cutícula"]
    },
    {
      title: "Módulo 2: Técnicas Avançadas",
      duration: "3h 15min",
      lessons: 12,
      topics: ["Cutilagem russa", "Técnicas de precisão", "Tratamento de cutículas problemáticas", "Acabamento profissional"]
    },
    {
      title: "Módulo 3: Prática e Aperfeiçoamento",
      duration: "2h 45min",
      lessons: 10,
      topics: ["Casos práticos", "Correção de erros", "Velocidade e eficiência", "Atendimento ao cliente"]
    },
    {
      title: "Módulo 4: Negócios e Marketing",
      duration: "1h 30min",
      lessons: 6,
      topics: ["Precificação", "Marketing digital", "Fidelização de clientes", "Crescimento profissional"]
    }
  ];

  const benefits = [
    { icon: Clock, text: "8+ horas de conteúdo exclusivo" },
    { icon: PlayCircle, text: "36 vídeo-aulas em alta definição" },
    { icon: Download, text: "Material de apoio para download" },
    { icon: Certificate, text: "Certificado de conclusão" },
    { icon: Infinity, text: "Acesso vitalício ao curso" },
    { icon: Users, text: "Grupo VIP de alunas no WhatsApp" }
  ];

  return (
    <section id="curso" className="py-20 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="bg-primary/10 text-primary mb-4">Conteúdo do Curso</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Tudo que você precisa para se tornar
            <span className="gradient-text"> especialista em cutilagem</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Um curso completo e prático que vai te ensinar desde os fundamentos até as técnicas mais avançadas da cutilagem profissional.
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
                      <div className="flex gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {module.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <PlayCircle className="w-4 h-4" />
                          {module.lessons} aulas
                        </span>
                      </div>
                    </div>
                    <Badge variant="secondary">Módulo {index + 1}</Badge>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {module.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        {topic}
                      </div>
                    ))}
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

            <Card className="bg-primary text-white">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold mb-2">Bônus Exclusivo</h4>
                <p className="text-sm opacity-90 mb-4">
                  Kit completo com mais de 50 designs de unhas para você praticar e impressionar suas clientes.
                </p>
                <Badge className="bg-white text-primary">Valor: R$ 197</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
