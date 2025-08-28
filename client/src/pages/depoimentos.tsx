import { User, Star } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";

export default function Depoimentos() {
  const testimonials = [
    {
      name: "Maria S.",
      role: "Mãe da Júlia - Ari de Sá",
      content: "Excelente profissional! Minha filha se sente segura e eu tenho total tranquilidade. Recomendo sem hesitar. A pontualidade é impecável e a comunicação é excelente.",
      stars: 5
    },
    {
      name: "Carlos R.",
      role: "Pai do Miguel - Farias Brito",
      content: "Pontualidade impecável e comunicação excelente. O Tio Márcio é muito cuidadoso com as crianças. Meu filho sempre chega feliz em casa.",
      stars: 5
    },
    {
      name: "Ana P.",
      role: "Mãe da Sophia - Antares",
      content: "Já são dois anos com o Tio Márcio e não troco por nada! Minha filha adora o 'tio' e eu fico tranquila sabendo que ela está em boas mãos.",
      stars: 5
    },
    {
      name: "Roberto M.",
      role: "Pai do Lucas - Nova Dimensão",
      content: "Serviço de qualidade excepcional. Van sempre limpa, segura e pontual. O Tio Márcio trata as crianças com carinho e respeito.",
      stars: 5
    },
    {
      name: "Fernanda L.",
      role: "Mãe da Isabella - Master",
      content: "Confiança total! Minha filha vai tranquila para a escola e eu trabalho sossegada. A comunicação via WhatsApp é fantástica.",
      stars: 5
    },
    {
      name: "João S.",
      role: "Pai da Beatriz - Ari de Sá",
      content: "Profissional exemplar! Sempre pontual, cordial e muito cuidadoso. Minha filha se sente segura e nós, pais, ficamos tranquilos.",
      stars: 5
    }
  ];

  const renderStars = (count: number) => {
    return Array.from({ length: count }, (_, i) => (
      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
    ));
  };

  return (
    <div className="py-20 fade-in">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6" data-testid="text-page-title">
            Depoimentos dos Pais
          </h1>
          <p className="text-xl text-muted-foreground" data-testid="text-page-subtitle">
            Veja o que as famílias que confiam no Tio Márcio têm a dizer
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-lg h-full" data-testid={`card-testimonial-${index}`}>
              <CardContent className="p-8 flex flex-col h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                    <User className="text-primary-foreground h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold" data-testid={`text-testimonial-name-${index}`}>
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground" data-testid={`text-testimonial-role-${index}`}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <div className="mb-4" data-testid={`stars-testimonial-${index}`}>
                  <div className="flex">
                    {renderStars(testimonial.stars)}
                  </div>
                </div>
                <p className="text-muted-foreground italic flex-grow" data-testid={`text-testimonial-content-${index}`}>
                  "{testimonial.content}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-muted p-8 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4" data-testid="text-cta-title">
              Quer deixar seu depoimento?
            </h3>
            <p className="text-muted-foreground mb-6" data-testid="text-cta-subtitle">
              Compartilhe sua experiência com o Transporte Escolar Tio Márcio
            </p>
            <a 
              href="https://wa.me/5585981397420" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-lg font-semibold inline-flex items-center transition-colors"
              data-testid="button-cta-whatsapp"
            >
              <FaWhatsapp className="mr-2 h-4 w-4" />
              Enviar Depoimento
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
