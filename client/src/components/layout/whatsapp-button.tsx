import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5585981397420"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      title="Chamar no WhatsApp"
      data-testid="button-whatsapp-float"
    >
      <FaWhatsapp className="h-7 w-7" />
    </a>
  );
}
