import artistPhoto from "@/assets/329d20e03b55a53a474fa4daeb10b21d3ab00299.png";

export function About() {
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
              My new series, <em>Red Liberation</em>, is a culmination of this journey. Inspired by Zimbabwe's history, culture, and landscapes, these abstract works are a reflection of my own liberation – a release from the constraints of representation, and an embracing of the unknown.
            </p>
            <p className="text-base md:text-[1.0625rem] leading-[1.85] md:leading-[1.95] tracking-[0.002em] opacity-90">
              The red hues evoke the ancient rhythms of Africa, the resilience of our people, and the blood shed by brave hearts who fought for freedom. From the transatlantic slave trade to colonialism, our continent was ravaged, our people brutalized. But through it all, the spirit of resistance burned bright.
            </p>
            <p className="text-base md:text-[1.0625rem] leading-[1.85] md:leading-[1.95] tracking-[0.002em] opacity-90">
              Men and women, young and old, rose up to challenge the status quo. They sacrificed everything for a dream of a free and equal society. Their blood, sweat, and tears watered the seeds of independence, and today we reap the fruits of their labor.
            </p>
            <p className="text-base md:text-[1.0625rem] leading-[1.85] md:leading-[1.95] tracking-[0.002em] opacity-90">
              <em>Red Liberation</em> is a tribute to their courage, their resilience, and their unwavering commitment to freedom. It's a celebration of our heritage, our culture, and our identity. Join me on this journey, as I continue to explore, express, and evolve.
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
      </div>
    </div>
  );
}