import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqItems = [
    {
      question: "Quais bairros e escolas são atendidos?",
      answer: "Atendemos os bairros: Cidade dos Funcionários, Cambeba, Parque del Sol e Seis Bocas. As escolas parceiras são: Colégio Antares, Ari de Sá, Farias Brito, Nova Dimensão e Master. Também atendemos outras escolas mediante consulta."
    },
    {
      question: "Como garantir uma vaga?",
      answer: "Entre em contato conosco via WhatsApp ou formulário. Faremos uma avaliação da rota e disponibilidade. As vagas são limitadas para garantir a qualidade do serviço e segurança das crianças."
    },
    {
      question: "Quais são os horários de saída e retorno?",
      answer: "Os horários são personalizados conforme o cronograma de cada escola e as necessidades da família. Mantemos rigorosa pontualidade tanto na ida quanto na volta. Horários específicos são definidos no momento da contratação."
    },
    {
      question: "Como funciona a segurança no transporte?",
      answer: "Nosso veículo é totalmente regularizado com todas as certificações exigidas. Possui cintos de segurança para todas as crianças, equipamentos de primeiros socorros, extintor e segue todas as normas de transporte escolar. Realizamos manutenção periódica rigorosa."
    },
    {
      question: "Como posso falar com o motorista durante o trajeto?",
      answer: "Mantemos comunicação direta via WhatsApp. Os pais recebem atualizações sobre horários, eventuais atrasos e chegada das crianças. Em emergências, estamos sempre disponíveis para contato imediato."
    },
    {
      question: "Qual o valor do serviço?",
      answer: "Os valores variam conforme a distância, frequência e necessidades específicas. Entre em contato para um orçamento personalizado. Oferecemos condições especiais para irmãos e pagamento antecipado."
    },
    {
      question: "E se meu filho faltar à aula?",
      answer: "Solicitamos que nos informe com antecedência via WhatsApp. Isso nos ajuda a organizar melhor a rota e otimizar o tempo para as outras crianças. Não há desconto no valor mensal por faltas eventuais."
    },
    {
      question: "O que acontece em caso de emergência?",
      answer: "Temos protocolos de emergência estabelecidos. Em caso de problemas mecânicos, mantemos contato imediato com os pais. Para emergências médicas, temos kit de primeiros socorros e contatos de emergência de todos os responsáveis."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="py-20 fade-in">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6" data-testid="text-page-title">
            Perguntas Frequentes
          </h1>
          <p className="text-xl text-muted-foreground" data-testid="text-page-subtitle">
            Tire todas suas dúvidas sobre nosso serviço
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <Card key={index} className="shadow" data-testid={`card-faq-${index}`}>
              <button
                className="w-full p-6 text-left flex justify-between items-center hover:bg-muted transition-colors"
                onClick={() => toggleFAQ(index)}
                data-testid={`button-faq-${index}`}
              >
                <span className="text-lg font-semibold" data-testid={`text-faq-question-${index}`}>
                  {item.question}
                </span>
                <ChevronDown 
                  className={cn(
                    "h-5 w-5 transition-transform",
                    openItems.includes(index) && "rotate-180"
                  )}
                  data-testid={`icon-faq-chevron-${index}`}
                />
              </button>
              {openItems.includes(index) && (
                <CardContent className="px-6 pb-6 pt-0">
                  <p className="text-muted-foreground" data-testid={`text-faq-answer-${index}`}>
                    {item.answer}
                  </p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-muted p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4" data-testid="text-cta-title">
              Não encontrou sua dúvida?
            </h3>
            <p className="text-muted-foreground mb-6" data-testid="text-cta-subtitle">
              Entre em contato conosco e teremos prazer em esclarecer todas suas questões
            </p>
            <a 
              href="https://wa.me/5585981397420" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-lg font-semibold inline-flex items-center transition-colors"
              data-testid="button-cta-whatsapp"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Falar Conosco
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
