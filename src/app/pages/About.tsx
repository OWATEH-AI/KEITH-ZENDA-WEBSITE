import artistPhoto from "@/assets/329d20e03b55a53a474fa4daeb10b21d3ab00299.png";

export function About() {
  const interviews = [
    {
      id: "interview-1",
      num: "I",
      title: "Keith Zenda — Interview I",
      driveUrl: "https://drive.google.com/file/d/1AQOPooG9sGnt_74hnykqU14rLDY0gK3a/view",
    },
    {
      id: "interview-2",
      num: "II",
      title: "Keith Zenda — Interview II",
      driveUrl: "https://drive.google.com/file/d/1odBhIUkypBDS2TgWuxjU8Ua6IGkJXijB/view",
    },
  ];

  return (
    <div className="pt-24 pb-10 px-6 md:pt-36 md:pb-20 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="mb-12 md:mb-24 lg:mb-32">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.01em] leading-tight">
            Embracing the Unseen: A Journey of Transformation
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-start">
          {/* Text */}
          <div className="space-y-6 md:space-y-8 max-w-xl">
            <p className="text-base md:text-[1.0625rem] leading-[1.85] md:leading-[1.95] tracking-[0.002em] opacity-90">
              As I reflect on my artistic journey, I'm reminded of the power of transformation. From the precise brushstrokes of realism to the expressive gestures of abstraction, my path has been one of exploration and discovery.
            </p>
            <p className="text-base md:text-[1.0625rem] leading-[1.85] md:leading-[1.95] tracking-[0.002em] opacity-90">
              Growing up in Zimbabwe, I was captivated by the vibrant colors and textures of our culture. Realism was my first love, a way to capture the world around me with precision and detail. But as I grew, so did my desire to convey the emotions and energies that lay beneath the surface.
            </p>
            <p className="text-base md:text-[1.0625rem] leading-[1.85] md:leading-[1.95] tracking-[0.002em] opacity-90">
              My journey into abstract expressionism was a natural evolution, a merging of my technical skills with my inner world. The freedom to express, to experiment, and to create without boundaries has been liberating.
            </p>
            <p className="text-base md:text-[1.0625rem] leading-[1.85] md:leading-[1.95] tracking-[0.002em] opacity-90">
              My new series, <em>Liberation</em>, is a culmination of this journey. Inspired by Zimbabwe's history, culture, and landscapes, these abstract works are a reflection of my own liberation – a release from the constraints of representation, and an embracing of the unknown.
            </p>
          </div>

          {/* Image */}
          <div className="md:mt-4 sticky top-36">
            <img
              src={artistPhoto}
              alt="Keith Zenda"
              className="w-full h-auto grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
            />
            <div className="mt-8 space-y-4 opacity-50">
               <p className="text-xs uppercase tracking-widest font-light">Keith Zenda, Zimbabwean Visual Artist</p>
               <p className="text-xs uppercase tracking-widest font-light italic">Founder of ARTGALZIM CENTER</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-20 md:my-28 lg:my-36 flex items-center gap-6">
          <div className="flex-1 h-[1px] bg-foreground/10"></div>
          <span className="text-[10px] uppercase tracking-[0.35em] opacity-40">In the Spotlight</span>
          <div className="flex-1 h-[1px] bg-foreground/10"></div>
        </div>

        {/* Interview Videos Section */}
        <section id="interviews" aria-label="Keith Zenda Interviews">
          <div className="mb-10 md:mb-16">
            <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: 'var(--gold)', opacity: 0.85 }}>
              Conversations
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-[0.01em] leading-tight">
              Interviews &amp; Profile
            </h2>
            <p className="mt-4 max-w-lg text-sm md:text-base opacity-60 leading-relaxed">
              Watch Keith Zenda speak about his practice, cultural heritage, and the stories behind his art.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {interviews.map((interview) => (
              <div key={interview.id} id={interview.id}>
                {/* Clickable play card */}
                <a
                  href={interview.driveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Watch ${interview.title}`}
                  style={{
                    display: "block",
                    position: "relative",
                    width: "100%",
                    paddingBottom: "56.25%",
                    background: "linear-gradient(135deg, #0d0d0d 0%, #1a1208 60%, #0d0d0d 100%)",
                    overflow: "hidden",
                    textDecoration: "none",
                    border: "1px solid rgba(255,255,255,0.07)",
                    cursor: "pointer",
                  }}
                  className="group"
                >
                  {/* Subtle grid texture overlay */}
                  <div style={{
                    position: "absolute", inset: 0,
                    backgroundImage: "radial-gradient(circle, rgba(180,140,60,0.06) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                  }} />

                  {/* Corner accent lines */}
                  <div style={{
                    position: "absolute", top: 16, left: 16,
                    width: 32, height: 32,
                    borderTop: "1px solid rgba(180,140,60,0.4)",
                    borderLeft: "1px solid rgba(180,140,60,0.4)",
                  }} />
                  <div style={{
                    position: "absolute", bottom: 16, right: 16,
                    width: 32, height: 32,
                    borderBottom: "1px solid rgba(180,140,60,0.4)",
                    borderRight: "1px solid rgba(180,140,60,0.4)",
                  }} />

                  {/* Centre content */}
                  <div style={{
                    position: "absolute", inset: 0,
                    display: "flex", flexDirection: "column",
                    alignItems: "center", justifyContent: "center", gap: 16,
                  }}>
                    {/* Play button circle */}
                    <div style={{
                      width: 72, height: 72, borderRadius: "50%",
                      border: "1.5px solid rgba(180,140,60,0.7)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      background: "rgba(180,140,60,0.08)",
                    }}
                      className="transition-all duration-300 ease-out group-hover:scale-110 group-hover:bg-[#b48c3c20] group-hover:border-[#b48c3c]"
                    >
                      {/* Triangle */}
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                        <polygon
                          points="7,4 21,12 7,20"
                          fill="rgba(180,140,60,0.9)"
                          stroke="rgba(180,140,60,0.9)"
                          strokeLinejoin="round"
                          strokeWidth="1"
                        />
                      </svg>
                    </div>

                    {/* Label */}
                    <div style={{ textAlign: "center" }}>
                      <p style={{
                        fontSize: "0.6rem", letterSpacing: "0.35em",
                        textTransform: "uppercase", color: "rgba(180,140,60,0.75)",
                        marginBottom: 4,
                      }}>
                        Interview {interview.num}
                      </p>
                      <p style={{
                        fontSize: "0.6rem", letterSpacing: "0.25em",
                        textTransform: "uppercase", color: "rgba(255,255,255,0.3)",
                      }} className="transition-colors duration-300 group-hover:text-white/60">
                        Click to open video ↗
                      </p>
                    </div>
                  </div>

                  {/* Hover shimmer */}
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(135deg, transparent 40%, rgba(180,140,60,0.08) 100%)",
                    pointerEvents: "none",
                  }}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                  />
                </a>

                {/* Caption */}
                <div className="mt-5">
                  <h3 className="text-sm uppercase tracking-widest font-light" style={{ color: "var(--gold)" }}>
                    {interview.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}