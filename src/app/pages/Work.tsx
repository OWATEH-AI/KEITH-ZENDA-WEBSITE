import { useState, useMemo } from "react";
import { X } from "lucide-react";

// Dynamically import all images from the artworks folder
const artworkFiles = import.meta.glob("@/assets/artworks/*.{png,jpg,jpeg,webp,svg}", { eager: true });

const videoFiles = [
  {
    id: 'v1',
    title: 'Keith Zenda Art',
    src: '/videos/KEITH ZENDA ART.mp4',
    duration: 'Full Feature',
    description: 'A glimpse into the artist\'s profound process and creative expressions.'
  },
  {
    id: 'v2',
    title: 'Studio Session I',
    src: '/videos/WhatsApp Video 2026-04-04 at 10.44.48.mp4',
    duration: 'Behind The Scenes',
    description: 'Exploring forms and discovering new narratives in the studio.'
  },
  {
    id: 'v3',
    title: 'Studio Session II',
    src: '/videos/WhatsApp Video 2026-04-04 at 10.44.49.mp4',
    duration: 'Behind The Scenes',
    description: 'An intimate look at the delicate application of mixed media elements.'
  },
  {
    id: 'v4',
    title: 'Studio Session III',
    src: '/videos/WhatsApp Video 2026-04-04 at 10.44.50.mp4',
    duration: 'Behind The Scenes',
    description: 'Witnessing the creative flow and unyielding artistic dedication.'
  },
  {
    id: 'v5',
    title: 'Studio Session IV',
    src: '/videos/WhatsApp Video 2026-04-04 at 10.44.51.mp4',
    duration: 'Behind The Scenes',
    description: 'The final touches bringing the canvas to life with vivid storytelling.'
  }
];

export function Work() {
  const dynamicArtworks = useMemo(() => {
    return Object.entries(artworkFiles).map(([path, module], index) => {
      // Extract filename from path (e.g., "Red Liberation (Mixed media) [120x90] [2024].png")
      const filename = path.split("/").pop() || "";
      const nameWithoutExt = filename.replace(/\.[^/.]+$/, "");

      // Default values
      let title = nameWithoutExt;
      let medium = "Artistic Work";
      let size = "Variable dimensions";
      let year = new Date().getFullYear().toString();

      // Simple parsing logic for: Title (Medium) [Size] [Year]
      try {
        const mediumMatch = nameWithoutExt.match(/\((.*?)\)/);
        if (mediumMatch) medium = mediumMatch[1];

        const brackets = [...nameWithoutExt.matchAll(/\[(.*?)\]/g)].map(m => m[1]);
        if (brackets.length >= 1) size = brackets[0];
        if (brackets.length >= 2) year = brackets[1];

        // Title is everything before the first '(' or '['
        title = nameWithoutExt.split(/[(\[]/)[0].trim();
      } catch (e) {
        console.error("Error parsing filename:", filename, e);
      }

      let description = `Part of the personal collection by Keith Zenda. This piece embodies the essence of ${medium.toLowerCase()}, reflecting the artist's ongoing exploration of form and emotion.`;

      if (title.toLowerCase().includes("red liberation")) {
        year = "2026";
        size = "60x90cm";
        description = "An intense abstract work dominated by a deep red, textured fabric-like form that appears torn and dripping, set against a gradient background that shifts from fiery red to warm peach tones fading into darkness. The thick impasto suggests blood-soaked cloth, evoking themes of violence, suffering, and the raw physicality of pain, while the dripping strokes imply wounds and loss, inviting viewers to contemplate anguish and resilience.";
      } else if (title.toLowerCase().includes("personal journey") || title.toLowerCase().includes("personal")) {
        year = "2026";
        size = "60x90cm";
        description = "An intense abstract work dominated by a deep red, textured fabric-like form that appears torn and dripping, set against a fiery gradient background. Here, the artist's physical presence alongside the piece amplifies its raw emotion. The thick impasto evokes themes of suffering and the physicality of pain, while the dripping strokes imply wounds and loss, inviting viewers into an intimately personal contemplation of anguish and ultimate resilience.";
      }

      return {
        id: `dynamic-${index}`,
        title: title || "Untitled",
        medium,
        size,
        year,
        image: (module as any).default,
        description
      };
    }).sort((a, b) => b.year.localeCompare(a.year)); // Sort by year descending
  }, []);

  const [selectedArtwork, setSelectedArtwork] = useState<any | null>(null);

  return (
    <>
      <div className="pt-28 pb-8 px-6 md:pt-36 md:pb-10 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section: Selected Works (Images) */}
          <div className="mb-12 md:mb-20 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.15em] mb-6 uppercase" style={{ color: 'var(--gold)' }}>
              Selected Works
            </h1>
            <p className="max-w-2xl text-foreground/70 leading-relaxed md:text-lg">
              An archive of visual narratives, exploring identity, culture, and profound human experiences through mixed media.
            </p>
            <div className="h-[1px] w-24 bg-gold mt-10"></div>
          </div>

          {/* Artworks Grid */}
          <div className="space-y-12 md:space-y-16 mb-16">
            {dynamicArtworks.map((artwork, index) => (
              <div
                key={artwork.id}
                className={`grid md:grid-cols-12 gap-8 md:gap-16 items-center ${
                  index % 2 === 1 ? "md:grid-flow-dense" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`md:col-span-6 lg:col-span-5 ${index % 2 === 1 ? "md:col-start-7 lg:col-start-8" : ""} cursor-pointer group relative overflow-hidden rounded-[2px] group-hover:shadow-[0_0_40px_rgba(255,215,0,0.1)] transition-all duration-500`}
                  onClick={() => setSelectedArtwork(artwork)}
                >
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full max-h-[70vh] object-cover md:object-contain bg-black/20 transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex justify-between items-end">
                    <span className="text-white text-xs md:text-sm tracking-widest uppercase">View Artwork</span>
                  </div>
                </div>

                {/* Details */}
                <div
                  className={`md:col-span-6 lg:col-span-5 flex flex-col justify-center ${
                    index % 2 === 1 ? "md:col-start-1 lg:col-start-2 md:row-start-1" : ""
                  }`}
                >
                  <div className="relative">
                    {/* Decorative element */}
                    <div className="absolute -left-6 top-4 w-px h-16 bg-gradient-to-b from-[var(--gold)] to-transparent hidden md:block opacity-50" />
                    
                    <h2
                      className="mb-6 font-light transition-colors duration-300 hover:text-[var(--gold)]"
                      style={{ fontSize: '2.25rem', letterSpacing: '0.02em', color: 'var(--gold)' }}
                    >
                      {artwork.title}
                    </h2>

                    <div className="space-y-3 mb-10 text-white/60">
                      <p className="flex items-center gap-4 border-b border-white/5 pb-2" style={{ fontSize: '0.875rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                        <span className="w-16 text-white/40">Medium</span> {artwork.medium}
                      </p>
                      <p className="flex items-center gap-4 border-b border-white/5 pb-2" style={{ fontSize: '0.875rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                        <span className="w-16 text-white/40">Size</span> {artwork.size}
                      </p>
                      <p className="flex items-center gap-4 border-b border-white/5 pb-2" style={{ fontSize: '0.875rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                        <span className="w-16 text-white/40">Year</span> {artwork.year}
                      </p>
                    </div>
                    
                    <p className="text-white/80 font-light leading-relaxed" style={{ fontSize: '1.0625rem' }}>
                      {artwork.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Section: Video Showcase */}
          <div className="mb-12 md:mb-20 animate-fade-in-up mt-24">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.15em] mb-6 uppercase" style={{ color: 'var(--gold)' }}>
              Visual Stories
            </h1>
            <p className="max-w-2xl text-foreground/70 leading-relaxed md:text-lg">
              Immersive studio sessions and behind-the-scenes processes that bring the canvas to life.
            </p>
            <div className="h-[1px] w-24 bg-gold mt-10"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {videoFiles.map((video, index) => (
              <div 
                key={video.id} 
                className={`group relative flex flex-col ${index === 0 ? 'md:col-span-2 lg:col-span-2' : ''}`}
              >
                <div className="relative overflow-hidden rounded-[2px] shadow-2xl aspect-video bg-black/50 border border-white/5">
                  <video 
                    src={video.src} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    controls
                    controlsList="nodownload"
                    onContextMenu={(e) => e.preventDefault()}
                    preload="metadata"
                  />
                </div>
                <div className="mt-6 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-light tracking-wide text-[var(--gold)]">{video.title}</h3>
                    <span className="text-xs uppercase tracking-widest text-white/40 whitespace-nowrap ml-4">{video.duration}</span>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed font-light mt-auto">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Artwork Modal */}
      {selectedArtwork && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-6 md:p-12 animate-in fade-in duration-300"
          onClick={() => setSelectedArtwork(null)}
        >
          <button
            onClick={() => setSelectedArtwork(null)}
            className="absolute top-6 right-6 md:top-12 md:right-12 text-white/50 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X size={36} strokeWidth={1} />
          </button>
          <img
            src={selectedArtwork.image}
            alt={selectedArtwork.title}
            className="max-w-full max-h-[90vh] object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-6 md:bottom-12 left-6 md:left-12 text-white pointer-events-none">
             <h3 className="text-2xl font-light text-[var(--gold)] mb-2">{selectedArtwork.title}</h3>
             <p className="text-white/50 uppercase tracking-widest text-sm">{selectedArtwork.medium} — {selectedArtwork.year}</p>
          </div>
        </div>
      )}
    </>
  );
}