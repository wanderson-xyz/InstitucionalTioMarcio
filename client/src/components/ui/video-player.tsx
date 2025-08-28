import { useState } from "react";
import { Play } from "lucide-react";
import vanImage from "@assets/generated_images/Van_escolar_Master_profissional_60d184f1.png";

interface VideoPlayerProps {
  title?: string;
  className?: string;
}

export default function VideoPlayer({ 
  title = "Vídeo Institucional", 
  className = "" 
}: VideoPlayerProps) {
  const [showVideo, setShowVideo] = useState(false);
  // Convert Google Drive share URL to embed URL
  const embedUrl = "https://drive.google.com/file/d/1ZMi1kx0wUR9MzimWpy7ZMLAvZixvxQKg/preview";

  if (showVideo) {
    return (
      <div className={`bg-card rounded-lg shadow-lg overflow-hidden ${className}`}>
        <div className="aspect-video">
          <iframe
            src={embedUrl}
            width="100%"
            height="100%"
            allow="autoplay"
            title={title}
            className="w-full h-full border-0"
            data-testid="video-institutional"
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-card rounded-lg shadow-lg overflow-hidden ${className}`}>
      <div className="aspect-video relative cursor-pointer group" onClick={() => setShowVideo(true)}>
        <img
          src={vanImage}
          alt="Van Escolar Tio Márcio"
          className="w-full h-full object-cover"
          data-testid="video-thumbnail"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-50 transition-all duration-300">
          <div className="bg-white bg-opacity-90 rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
            <Play className="h-8 w-8 text-primary ml-1" fill="currentColor" />
          </div>
        </div>
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-lg font-semibold drop-shadow-lg">{title}</h3>
        </div>
      </div>
    </div>
  );
}
