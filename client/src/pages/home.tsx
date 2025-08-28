import { Link } from "wouter";
import { 
  Shield, 
  User, 
  MapPin, 
  GraduationCap, 
  Home as HomeIcon, 
  Clock,
  MessageCircle,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import VideoPlayer from "@/components/ui/video-player";
import PhotoGallery from "@/components/ui/photo-gallery";

export default function Home() {
  const neighborhoods = [
    "Cidade dos Funcionários",
    "Cambeba", 
    "Parque del Sol",
    "Seis Bocas"
  ];

  const schools = [
    "Colégio Antares",
    "Ari de Sá",
    "Farias Brito", 
    "Nova Dimensão",
    "Master"
  ];

  const faqItems = [
    {
      question: "Quais bairros são atendidos?",
      answer: "Atendemos Cidade dos Funcionários, Cambeba, Parque del Sol e Seis Bocas."
    },
    {
      question: "Como funciona a segurança?",
      answer: "Veículo regularizado, cintos de segurança para todas as crianças e motorista habilitado."
    },
    {
      question: "Como posso acompanhar o trajeto?",
      answer: "Mantemos comunicação direta via WhatsApp com atualizações em tempo real."
    }
  ];

  const testimonials = [
    {
      name: "Maria S.",
      role: "Mãe da Júlia",
      content: "Excelente profissional! Minha filha se sente segura e eu tenho total tranquilidade. Recomendo sem hesitar."
    },
    {
      name: "Carlos R.",
      role: "Pai do Miguel", 
      content: "Pontualidade impecável e comunicação excelente. O Tio Márcio é muito cuidadoso com as crianças."
    }
  ];

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="hero-bg text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="text-primary text-3xl" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="text-hero-title">
              Segurança e confiança no transporte escolar do seu filho
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto" data-testid="text-hero-subtitle">
              Transporte escolar com mais de 10 anos de experiência, oferecendo segurança, pontualidade e tranquilidade para toda a família.
            </p>
            <a 
              href="https://wa.me/5585981397420" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center transition-colors"
              data-testid="button-hero-whatsapp"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* About Tio Márcio Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6" data-testid="text-about-title">
                Conheça o Tio Márcio
              </h2>
              <p className="text-lg text-muted-foreground mb-6" data-testid="text-about-description">
                Com mais de 10 anos de experiência no transporte escolar, o Tio Márcio é sinônimo de segurança e confiabilidade. Dedicado ao bem-estar das crianças, ele oferece um serviço personalizado que prioriza a segurança, pontualidade e comunicação constante com os pais.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center" data-testid="text-feature-license">
                  <Shield className="text-accent mr-2 h-5 w-5" />
                  <span>Licença válida</span>
                </div>
                <div className="flex items-center" data-testid="text-feature-regulated">
                  <Shield className="text-accent mr-2 h-5 w-5" />
                  <span>Veículo regulamentado</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-secondary rounded-full flex items-center justify-center">
                <User className="text-primary text-8xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Routes and Schools */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" data-testid="text-routes-title">
              Rotas e Escolas Atendidas
            </h2>
            <p className="text-xl text-muted-foreground">
              Cobrimos os principais bairros e escolas de Fortaleza
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <MapPin className="text-primary mr-3" />
                  Bairros Atendidos
                </h3>
                <ul className="space-y-3">
                  {neighborhoods.map((neighborhood) => (
                    <li key={neighborhood} className="flex items-center" data-testid={`text-neighborhood-${neighborhood.toLowerCase().replace(/\s+/g, '-')}`}>
                      <HomeIcon className="text-accent mr-3 h-5 w-5" />
                      {neighborhood}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <GraduationCap className="text-primary mr-3" />
                  Escolas Parceiras
                </h3>
                <ul className="space-y-3">
                  {schools.map((school) => (
                    <li key={school} className="flex items-center" data-testid={`text-school-${school.toLowerCase().replace(/\s+/g, '-')}`}>
                      <GraduationCap className="text-accent mr-3 h-5 w-5" />
                      {school}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8" data-testid="text-video-title">
            Veja Nosso Transporte em Ação
          </h2>
          <VideoPlayer />
          <div className="mt-8">
            <a 
              href="https://wa.me/5585981397420" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-lg font-semibold inline-flex items-center transition-colors"
              data-testid="button-video-whatsapp"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Solicitar Informações
            </a>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" data-testid="text-gallery-title">
              Galeria de Fotos
            </h2>
            <p className="text-xl text-muted-foreground">
              Conheça nosso veículo e instalações
            </p>
          </div>
          <PhotoGallery />
        </div>
      </section>

      {/* Mini FAQ */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" data-testid="text-faq-title">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-muted-foreground">
              Principais dúvidas dos pais
            </p>
          </div>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <Card key={index} className="shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2" data-testid={`text-faq-question-${index}`}>
                    {item.question}
                  </h3>
                  <p className="text-muted-foreground" data-testid={`text-faq-answer-${index}`}>
                    {item.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/faq">
              <Button 
                variant="secondary" 
                className="font-semibold"
                data-testid="button-view-all-faq"
              >
                Ver Todas as Dúvidas
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Teaser */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" data-testid="text-testimonials-title">
              O Que os Pais Dizem
            </h2>
            <p className="text-xl text-muted-foreground">
              Depoimentos de famílias satisfeitas
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                      <User className="text-primary-foreground" />
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
                  <p className="text-muted-foreground italic" data-testid={`text-testimonial-content-${index}`}>
                    "{testimonial.content}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/depoimentos">
              <Button 
                variant="secondary" 
                className="font-semibold"
                data-testid="button-view-all-testimonials"
              >
                Ver Todos os Depoimentos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="hero-bg text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6" data-testid="text-cta-title">
            Garanta a Vaga do Seu Filho Agora
          </h2>
          <p className="text-xl mb-8" data-testid="text-cta-subtitle">
            Entre em contato e assegure o transporte escolar mais confiável da região
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5585981397420" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg font-semibold inline-flex items-center justify-center transition-colors"
              data-testid="button-cta-whatsapp"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Chamar no WhatsApp
            </a>
            <Link href="/contato">
              <Button 
                variant="secondary" 
                className="bg-secondary/20 hover:bg-secondary/30 text-secondary-foreground px-8 py-4 h-auto"
                data-testid="button-cta-contact"
              >
                Formulário de Contato
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
