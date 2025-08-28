import { useState } from "react";
import vanExterior from "@assets/generated_images/Van_escolar_Master_profissional_60d184f1.png";
import vanInterior from "@assets/generated_images/Interior_van_escolar_seguro_d83e819a.png";
import frotaVans from "@assets/generated_images/Frota_vans_escolares_organizadas_84c5b2f5.png";
import motoristaSeguranca from "@assets/generated_images/Motorista_verificando_segurança_van_d6404ee8.png";
import oficinaMantencao from "@assets/generated_images/Oficina_manutenção_vans_escolares_a599fdec.png";
import criancasEmbarcando from "@assets/generated_images/Crianças_embarcando_van_segura_0fa47637.png";

const galleryImages = [
  {
    src: vanExterior,
    alt: "Van escolar Master - exterior",
    title: "Nossa Van Escolar"
  },
  {
    src: vanInterior,
    alt: "Interior da van com equipamentos de segurança",
    title: "Interior Seguro"
  },
  {
    src: frotaVans,
    alt: "Frota de vans escolares organizadas",
    title: "Nossa Frota"
  },
  {
    src: motoristaSeguranca,
    alt: "Motorista verificando equipamentos de segurança",
    title: "Inspeção de Segurança"
  },
  {
    src: oficinaMantencao,
    alt: "Oficina para manutenção das vans escolares",
    title: "Nossas Instalações"
  },
  {
    src: criancasEmbarcando,
    alt: "Crianças embarcando na van com segurança",
    title: "Embarque Seguro"
  }
];

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="gallery-item cursor-pointer"
            onClick={() => setSelectedImage(index)}
            data-testid={`img-gallery-${index}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Modal for enlarged image */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
          data-testid="modal-gallery"
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors"
              data-testid="button-close-modal"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
