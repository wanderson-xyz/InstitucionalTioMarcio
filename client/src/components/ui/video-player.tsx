interface VideoPlayerProps {
  title?: string;
  className?: string;
}

export default function VideoPlayer({ 
  title = "Vídeo Institucional", 
  className = "" 
}: VideoPlayerProps) {
  // Convert Google Drive share URL to embed URL
  const embedUrl = "https://drive.google.com/file/d/1ZMi1kx0wUR9MzimWpy7ZMLAvZixvxQKg/preview";

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
