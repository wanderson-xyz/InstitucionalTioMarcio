import { useState } from "react";
import { Phone, Clock, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export default function Contato() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    school: "",
    neighborhood: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });
      setFormData({
        name: "",
        phone: "",
        school: "",
        neighborhood: "",
        message: ""
      });
    },
    onError: () => {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente ou entre em contato pelo WhatsApp.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      content: "(85) 98139-7420",
      link: "https://wa.me/5585981397420",
      description: "Atendimento rápido e direto",
      bgColor: "bg-accent"
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "(85) 98139-7420",
      link: "tel:+5585981397420",
      description: "Ligações diretas",
      bgColor: "bg-primary"
    },
    {
      icon: Clock,
      title: "Horário de Atendimento",
      content: "Segunda a Sexta: 6h às 19h",
      content2: "Sábado: 8h às 12h",
      description: "",
      bgColor: "bg-secondary"
    }
  ];

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

  return (
    <div className="py-20 fade-in">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6" data-testid="text-page-title">
            Entre em Contato
          </h1>
          <p className="text-xl text-muted-foreground" data-testid="text-page-subtitle">
            Estamos prontos para atender você e garantir o melhor transporte para seu filho
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6" data-testid="text-form-title">
                Envie uma Mensagem
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6" data-testid="form-contact">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nome Completo
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Seu nome completo"
                    required
                    data-testid="input-name"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Telefone/WhatsApp
                  </Label>
                  <Input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="(85) 9 9999-9999"
                    required
                    data-testid="input-phone"
                  />
                </div>
                
                <div>
                  <Label htmlFor="school" className="block text-sm font-medium mb-2">
                    Escola do Filho(a)
                  </Label>
                  <Select value={formData.school} onValueChange={(value) => handleInputChange("school", value)}>
                    <SelectTrigger data-testid="select-school">
                      <SelectValue placeholder="Selecione a escola" />
                    </SelectTrigger>
                    <SelectContent>
                      {schools.map((school) => (
                        <SelectItem key={school} value={school.toLowerCase().replace(/\s+/g, '-')}>
                          {school}
                        </SelectItem>
                      ))}
                      <SelectItem value="outra">Outra escola</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="neighborhood" className="block text-sm font-medium mb-2">
                    Bairro
                  </Label>
                  <Select value={formData.neighborhood} onValueChange={(value) => handleInputChange("neighborhood", value)}>
                    <SelectTrigger data-testid="select-neighborhood">
                      <SelectValue placeholder="Selecione o bairro" />
                    </SelectTrigger>
                    <SelectContent>
                      {neighborhoods.map((neighborhood) => (
                        <SelectItem key={neighborhood} value={neighborhood.toLowerCase().replace(/\s+/g, '-')}>
                          {neighborhood}
                        </SelectItem>
                      ))}
                      <SelectItem value="outro">Outro bairro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensagem
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    rows={4}
                    placeholder="Conte-nos sobre suas necessidades de transporte escolar..."
                    required
                    data-testid="textarea-message"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={contactMutation.isPending}
                  data-testid="button-submit-form"
                >
                  {contactMutation.isPending ? "Enviando..." : "Enviar Mensagem"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6" data-testid="text-contact-info-title">
                  Informações de Contato
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start" data-testid={`contact-info-${index}`}>
                      <div className={`w-12 h-12 ${info.bgColor} rounded-full flex items-center justify-center mr-4 flex-shrink-0`}>
                        <info.icon className="text-white h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1" data-testid={`text-contact-title-${index}`}>
                          {info.title}
                        </h3>
                        {info.link ? (
                          <a 
                            href={info.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-accent hover:text-accent/80 transition-colors"
                            data-testid={`link-contact-${index}`}
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground" data-testid={`text-contact-content-${index}`}>
                            {info.content}
                          </p>
                        )}
                        {info.content2 && (
                          <p className="text-muted-foreground">{info.content2}</p>
                        )}
                        {info.description && (
                          <p className="text-sm text-muted-foreground">{info.description}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="bg-muted p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4" data-testid="text-whatsapp-cta-title">
                Atendimento Rápido pelo WhatsApp
              </h3>
              <p className="text-muted-foreground mb-6" data-testid="text-whatsapp-cta-description">
                Para um atendimento mais ágil e direto, clique no botão abaixo e fale conosco pelo WhatsApp. Responderemos rapidamente!
              </p>
              <a 
                href="https://wa.me/5585981397420" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-lg font-semibold inline-flex items-center transition-colors w-full justify-center"
                data-testid="button-whatsapp-cta"
              >
                <FaWhatsapp className="mr-2 h-5 w-5" />
                Chamar no WhatsApp Agora
              </a>
            </div>

            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4" data-testid="text-location-title">
                  Localização de Atendimento
                </h3>
                <div className="space-y-3">
                  {neighborhoods.map((neighborhood, index) => (
                    <div key={neighborhood} className="flex items-center" data-testid={`location-${index}`}>
                      <MapPin className="text-primary mr-3 h-5 w-5" />
                      <span>{neighborhood}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
