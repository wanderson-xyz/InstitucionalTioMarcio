import { Link } from "wouter";
import { Bus, Phone, MapPin } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  const navItems = [
    { href: "/", label: "Início" },
    { href: "/sobre", label: "Sobre" },
    { href: "/depoimentos", label: "Depoimentos" },
    { href: "/faq", label: "FAQ" },
    { href: "/contato", label: "Contato" },
  ];

  const schools = [
    "Colégio Antares",
    "Ari de Sá",
    "Farias Brito",
    "Nova Dimensão",
    "Master"
  ];

  const neighborhoods = [
    "Cidade dos Funcionários",
    "Cambeba",
    "Parque del Sol",
    "Seis Bocas"
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-3">
                <Bus className="text-primary-foreground" />
              </div>
              <span className="text-lg font-bold">Tio Márcio Transport</span>
            </div>
            <p className="text-sm opacity-75 mb-4">
              Aos pais, tranquilidade. Aos filhos, segurança e pontualidade.
            </p>
            <div className="space-y-2">
              <a 
                href="https://wa.me/5585981397420" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 transition-colors text-sm flex items-center"
                data-testid="link-footer-whatsapp"
              >
                <Phone className="mr-1 h-4 w-4" />
                (85) 98139-7420
              </a>
              <a 
                href="https://www.instagram.com/tiomarciotrasnporteescolar?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 transition-colors text-sm flex items-center"
                data-testid="link-footer-instagram"
              >
                <FaInstagram className="mr-1 h-4 w-4" />
                @tiomarciotrasnporteescolar
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="opacity-75 hover:opacity-100 transition-opacity cursor-pointer"
                    data-testid={`link-footer-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Escolas Atendidas</h4>
            <ul className="space-y-2 text-sm opacity-75">
              {schools.map((school) => (
                <li key={school} data-testid={`text-school-${school.toLowerCase().replace(/\s+/g, '-')}`}>
                  {school}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Bairros Atendidos</h4>
            <ul className="space-y-2 text-sm opacity-75">
              {neighborhoods.map((neighborhood) => (
                <li key={neighborhood} data-testid={`text-neighborhood-${neighborhood.toLowerCase().replace(/\s+/g, '-')}`}>
                  {neighborhood}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-75" data-testid="text-copyright">
            &copy; 2024 Transporte Escolar Tio Márcio. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
