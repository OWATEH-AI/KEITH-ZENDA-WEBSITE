import { Link } from "react-router";
import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";

// Dynamically import all images from the artworks folder for the hero slideshow
const artworkFiles = import.meta.glob("@/assets/artworks/*.{png,jpg,jpeg,webp,svg}", { eager: true });

export function Home() {
  const images = useMemo(() => 
    Object.values(artworkFiles).map((mod: any) => mod.default), 
  []);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000); // 6 seconds per slide
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Cinematic Slideshow */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
        <AnimatePresence mode="wait">
          <motion.div
            key={images[currentIndex]}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1.18 }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 2.5,
              ease: "easeInOut",
              scale: { duration: 8, ease: "linear" } // Persistent zoom effect
            }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={images[currentIndex]}
              alt="Keith Zenda Artwork"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40"></div>
        <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]"></div>

        <div className="relative z-10 text-white text-center px-6 max-w-4xl">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ fontSize: '0.9rem', letterSpacing: '0.6em' }} 
            className="uppercase font-light mb-8"
          >
            Keith Zenda Art
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.7 }}
            style={{ fontSize: 'clamp(3.5rem, 12vw, 7.5rem)', fontWeight: 200, letterSpacing: '0.05em', lineHeight: '0.9', color: 'var(--gold)' }} 
            className="mb-10 uppercase"
          >
            Red <br/> Liberation
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="flex flex-col items-center gap-6 md:gap-10"
          >
            <div className="w-[1px] h-12 md:h-20 bg-gradient-to-b from-gold to-transparent"></div>
            
            <div className="space-y-4 md:space-y-6 px-4">
              <h2 className="text-lg md:text-2xl font-light tracking-wide max-w-2xl mx-auto opacity-95">
                A Journey of Transformation: Embracing the Unseen
              </h2>
              <p className="max-w-xl mx-auto italic font-light opacity-80 leading-relaxed text-base md:text-lg" style={{ letterSpacing: '0.01em' }}>
                "From the precise brushstrokes of realism to the expressive gestures of abstraction, 
                capturing the resilient spirit of Zimbabwe."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Cinematic Scroll Indicator */}
        <div className="absolute bottom-10 w-full flex justify-center">
           <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="flex flex-col items-center gap-3"
           >
              <span className="text-[10px] uppercase tracking-[0.5em] text-white/50">Discovery Through Material</span>
              <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
           </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-5xl mx-auto px-6 py-20 md:px-12 md:py-32 lg:py-40">
        <div className="space-y-10 md:space-y-16">
          <div>
            <h1 className="mb-3 md:mb-5 text-4xl md:text-5xl lg:text-[64px] font-light tracking-[0.01em] leading-tight">
              KEITH ZENDA
            </h1>
            <p className="opacity-50 text-base md:text-lg tracking-[0.05em] uppercase">
              Visual Artist
            </p>
          </div>

          <div className="max-w-2xl pt-4 md:pt-8 space-y-8 md:space-y-10">
            <p className="text-lg md:text-[1.1875rem] leading-[1.85] tracking-[0.002em] opacity-90">
              Exploring transformation, material, and identity through abstraction rooted in Zimbabwean cultural memory.
            </p>
            <div>
              <Link
                to="/about"
                className="inline-block border-b border-black/20 pb-1 text-sm uppercase tracking-widest hover:border-black transition-all duration-300"
              >
                Read the story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Press Section */}
      <section className="bg-foreground/5 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
            {/* Press Image */}
            <div className="w-full md:w-1/2 relative">
              <img 
                src="/press/Screenshot 2026-04-12 060436.png" 
                alt="NewsDay Feature: Art, identity and freedom in Keith Zenda's Zim journey" 
                className="w-full shadow-2xl border border-foreground/10"
              />
            </div>
            
            {/* Press Content */}
            <div className="w-full md:w-1/2 space-y-8">
              <p className="text-gold tracking-[0.2em] uppercase text-sm font-medium">In the Press</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-tight" style={{ color: 'var(--gold)' }}>
                Art, identity and freedom in <br className="hidden md:block" />Keith Zenda’s Zim journey
              </h2>
              <div className="w-16 h-[1px] bg-foreground/20"></div>
              <p className="text-foreground/70 text-lg leading-relaxed font-light">
                Featured prominently in NewsDay Zimbabwe's Southern Eye. This comprehensive article delves into Keith Zenda's evolving artistic process, his exploration of deep cultural identity, and the freedom found in blending stunning realism with profound abstraction.
              </p>
              <div className="pt-4">
                <a 
                  href="https://www.newsday.co.zw/life-amp-style/article/200053658/art-identity-and-freedom-in-keith-zendas-zim-journey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 text-xs md:text-sm tracking-widest uppercase border border-foreground/20 text-foreground px-8 py-4 hover:border-gold hover:text-gold transition-all duration-300"
                >
                  Read Full Article
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}