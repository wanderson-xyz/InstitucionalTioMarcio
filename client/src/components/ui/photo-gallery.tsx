import { useState } from "react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Van escolar exterior",
    title: "Van Escolar"
  },
  {
    src: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Interior da van com cintos de segurança",
    title: "Interior Seguro"
  },
  {
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Crianças embarcando com segurança",
    title: "Embarque Seguro"
  },
  {
    src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Van escolar estacionada na escola",
    title: "Na Escola"
  },
  {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Pais deixando crianças na escola",
    title: "Pais e Filhos"
  },
  {
    src: "https://images.unsplash.com/photo-1569163139394-de4e5f43e4e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Equipamentos de segurança da van",
    title: "Equipamentos de Segurança"
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
