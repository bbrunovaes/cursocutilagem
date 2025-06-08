
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export const FAQ = () => {
  const faqs = [
    {
      question: "Preciso ter experiência prévia para fazer o curso?",
      answer: "Não! O curso foi desenvolvido para atender desde iniciantes até profissionais que desejam se especializar. Começamos do básico e evoluímos gradualmente para técnicas avançadas."
    },
    {
      question: "Por quanto tempo terei acesso ao curso?",
      answer: "No plano Premium, você tem acesso vitalício ao curso. No plano Básico, o acesso é de 12 meses. Todas as atualizações futuras estão incluídas."
    },
    {
      question: "O certificado é reconhecido?",
      answer: "Sim! Nosso certificado é reconhecido nacionalmente e pode ser usado para comprovar sua especialização em cutilagem profissional."
    },
    {
      question: "Como funciona a garantia?",
      answer: "Oferecemos garantia incondicional de 30 dias. Se por qualquer motivo você não ficar satisfeita, devolvemos 100% do seu investimento."
    },
    {
      question: "Recebo algum material físico?",
      answer: "O curso é 100% online, mas você recebe todo o material de apoio em PDF para download e impressão, além de acesso ao grupo VIP no WhatsApp."
    },
    {
      question: "Como posso tirar dúvidas durante o curso?",
      answer: "No plano Premium, você tem acesso ao grupo VIP no WhatsApp e suporte individualizado. Também realizamos aulas ao vivo mensais para esclarecimentos."
    },
    {
      question: "Em quanto tempo verei resultados?",
      answer: "A maioria das nossas alunas consegue aplicar as técnicas básicas logo na primeira semana. Em 30 dias, você já estará dominando técnicas avançadas."
    },
    {
      question: "Posso assistir pelo celular?",
      answer: "Sim! Nossa plataforma é responsiva e funciona perfeitamente em celulares, tablets e computadores. Você pode estudar onde e quando quiser."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="bg-primary/10 text-primary mb-4">Dúvidas Frequentes</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ainda tem
            <span className="gradient-text"> dúvidas?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Separamos as perguntas mais comuns das nossas futuras alunas para te ajudar.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-pink-100 rounded-2xl px-6 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-left hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
