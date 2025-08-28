import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X, Bus } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Início" },
    { href: "/sobre", label: "Sobre" },
    { href: "/depoimentos", label: "Depoimentos" },
    { href: "/faq", label: "FAQ" },
    { href: "/contato", label: "Contato" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-secondary text-secondary-foreground shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center" data-testid="link-home-logo">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-3">
                <Bus className="text-primary-foreground text-xl" />
              </div>
              <span className="text-xl font-bold">Tio Márcio</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "nav-link hover:text-primary transition-colors cursor-pointer",
                  location === item.href && "text-primary"
                )}
                data-testid={`link-${item.label.toLowerCase()}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-secondary-foreground hover:text-primary"
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-secondary border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "block px-3 py-2 hover:text-primary transition-colors cursor-pointer",
                  location === item.href && "text-primary"
                )}
                data-testid={`link-mobile-${item.label.toLowerCase()}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
