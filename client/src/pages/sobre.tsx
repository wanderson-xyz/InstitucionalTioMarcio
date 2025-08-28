import { 
  User, 
  Shield, 
  Clock, 
  MessageCircle, 
  Tag,
  Target,
  Eye,
  Heart
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Sobre() {
  const commitments = [
    {
      icon: Shield,
      title: "Segurança",
      description: "Veículo totalmente regularizado com todas as certificações exigidas, equipamentos de segurança e manutenção periódica rigorosa."
    },
    {
      icon: Clock,
      title: "Pontualidade",
      description: "Horários rigorosamente cumpridos para que as crianças cheguem sempre no horário certo à escola e em casa."
    },
    {
      icon: MessageCircle,
      title: "Comunicação",
      description: "Canal direto com os pais via WhatsApp para atualizações, avisos e total transparência no atendimento."
    },
    {
      icon: Tag,
      title: "Regulamentação",
      description: "Todas as licenças e documentações em dia, seguindo rigorosamente as normas de transporte escolar."
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Missão",
      description: "Proporcionar transporte escolar seguro e confiável, contribuindo para a educação e tranquilidade das famílias."
    },
    {
      icon: Eye,
      title: "Visão",
      description: "Ser referência em transporte escolar em Fortaleza, reconhecido pela excelência e cuidado com as crianças."
    },
    {
      icon: Heart,
      title: "Valores",
      description: "Segurança, responsabilidade, transparência, pontualidade e amor pelas crianças."
    }
  ];

  return (
    <div className="py-20 fade-in">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6" data-testid="text-page-title">
            Sobre o Tio Márcio
          </h1>
          <p className="text-xl text-muted-foreground" data-testid="text-page-subtitle">
            Conheça a história e os valores que guiam nosso trabalho
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6" data-testid="text-about-title">
              Quem é o Tio Márcio
            </h2>
            <p className="text-lg text-muted-foreground mb-6" data-testid="text-about-description-1">
              Com mais de uma década de experiência no transporte escolar, Márcio Silva se dedica inteiramente ao bem-estar e segurança das crianças. Conhecido carinhosamente como "Tio Márcio" pelas famílias atendidas, ele transformou o transporte escolar em mais do que um serviço - é um compromisso de cuidado e responsabilidade.
            </p>
            <p className="text-lg text-muted-foreground mb-6" data-testid="text-about-description-2">
              Nascido e criado em Fortaleza, Tio Márcio conhece profundamente as necessidades das famílias locais e se orgulha de fazer parte do dia a dia das crianças, garantindo que cheguem à escola em segurança e com alegria.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-80 h-80 bg-secondary rounded-full flex items-center justify-center">
              <User className="text-primary text-9xl" />
            </div>
          </div>
        </div>

        <div className="bg-muted p-8 rounded-lg mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center" data-testid="text-commitments-title">
            Nossos Compromissos
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {commitments.map((commitment, index) => (
              <div key={index} className="flex items-start" data-testid={`commitment-${index}`}>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <commitment.icon className="text-accent-foreground h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2" data-testid={`text-commitment-title-${index}`}>
                    {commitment.title}
                  </h3>
                  <p className="text-muted-foreground" data-testid={`text-commitment-description-${index}`}>
                    {commitment.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Card className="shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-center" data-testid="text-values-title">
              Missão, Visão e Valores
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center" data-testid={`value-${index}`}>
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="text-primary-foreground h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3" data-testid={`text-value-title-${index}`}>
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground" data-testid={`text-value-description-${index}`}>
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
