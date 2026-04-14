import { useEffect, useState } from "react";
import { communityMedia, MediaItem } from "../data/communityData";

export function Community() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState<"pictures" | "videos">("pictures");

  // Filter based on active tab
  const filteredMedia = communityMedia.filter(
    (item) => item.type === (activeTab === "pictures" ? "image" : "video")
  );

  // Group by category
  const constructionMedia = filteredMedia.filter((item) => item.category === "construction");
  const mentorshipMedia = filteredMedia.filter((item) => item.category === "mentorship");

  const renderMediaCard = (item: MediaItem, index: number) => {
    return (
      <div 
        key={index} 
        className="break-inside-avoid flex flex-col gap-4 mb-8 group animate-fade-in-up"
        style={{ animationDelay: `${(index % 10) * 100}ms` }}
      >
        <div className="relative overflow-hidden bg-foreground/5 shadow-sm rounded-[1px]">
          {item.type === "image" ? (
            <img
              src={`/community/${item.src}`}
              alt={item.title}
              className="w-full h-auto object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="aspect-video">
              <video
                src={`/videos/community/${item.src}`}
                controls
                className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                preload="metadata"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          )}
          <div className="absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-colors duration-500 ease-out pointer-events-none"></div>
        </div>
        <div className="flex flex-col gap-2 px-1">
          <h3 className={`tracking-widest uppercase text-xs font-medium ${item.type === 'video' ? 'text-gold' : 'text-foreground'}`}>
            {item.title}
          </h3>
          <p className="text-sm text-foreground/60 leading-relaxed font-light">
            {item.description}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="mb-12 md:mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-[0.15em] mb-6">
            COMMUNITY & <span className="text-gold italic font-serif">Mentorship</span>
          </h1>
          <p className="max-w-2xl text-foreground/70 leading-relaxed md:text-lg">
            A look into the vibrant official gallery opening featuring local community chiefs,
            and the active mentorship dedicated to nurturing the next generation of creative minds.
          </p>
          <div className="h-[1px] w-24 bg-gold mt-10"></div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-8 justify-center mb-16 border-b border-foreground/10 pb-4 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          <button
            onClick={() => setActiveTab("pictures")}
            className={`text-xl md:text-2xl tracking-[0.15em] uppercase font-light transition-colors duration-300 relative ${
              activeTab === "pictures" ? "text-gold" : "text-foreground/50 hover:text-foreground"
            }`}
          >
            Pictures
            {activeTab === "pictures" && (
              <span className="absolute -bottom-[17px] left-0 right-0 h-[2px] bg-gold w-full animate-fade-in-up"></span>
            )}
          </button>
          <button
            onClick={() => setActiveTab("videos")}
            className={`text-xl md:text-2xl tracking-[0.15em] uppercase font-light transition-colors duration-300 relative ${
              activeTab === "videos" ? "text-gold" : "text-foreground/50 hover:text-foreground"
            }`}
          >
            VIDEOS
            {activeTab === "videos" && (
              <span className="absolute -bottom-[17px] left-0 right-0 h-[2px] bg-gold w-full animate-fade-in-up"></span>
            )}
          </button>
        </div>

        {activeTab === "pictures" ? (
          <>
            {/* Pictures Section 1: Construction & Opening */}
            {constructionMedia.length > 0 && (
              <div className="mb-20 animate-fade-in">
                <h2 className="text-2xl md:text-3xl font-light text-foreground tracking-wider mb-8 flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-gold block"></span>
                  The Gallery Journey: Construction & Opening
                </h2>
                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                  {constructionMedia.map((item, index) => renderMediaCard(item, index))}
                </div>
              </div>
            )}

            {/* Pictures Section 2: Mentorship */}
            {mentorshipMedia.length > 0 && (
              <div className="animate-fade-in">
                <h2 className="text-2xl md:text-3xl font-light text-foreground tracking-wider mb-8 flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-gold block"></span>
                  Mentorship & Community: Inspiring the Youth
                </h2>
                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                  {mentorshipMedia.map((item, index) => renderMediaCard(item, index))}
                </div>
              </div>
            )}
          </>
        ) : (
          /* Video Archive Section: All categories combined under one heading */
          <div className="animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-light text-foreground tracking-wider mb-8 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-gold block"></span>
              Visual Chronicles: Official Opening & Mentorship
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {filteredMedia.map((item, index) => renderMediaCard(item, index))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
