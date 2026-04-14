export type MediaItem = {
  src: string;
  title: string;
  description: string;
  category: "construction" | "mentorship";
  type: "image" | "video";
};

export const communityMedia: MediaItem[] = [
  // ═══════════════════════════════════════════════════════════════════
  // EXISTING COMMUNITY IMAGES (WhatsApp originals)
  // ═══════════════════════════════════════════════════════════════════
  {
    src: "WhatsApp Image 2022.34.18.jpeg",
    title: "Guest of Honor",
    description: "Our Guest of Honor Chief Chinamhora gracing the official gallery opening.",
    category: "construction",
    type: "image"
  },
  {
    src: "WhatsApp Image 2026-04-09 at 22.34.18.jpeg",
    title: "Marquee Setup",
    description: "A view of the marquee set up for the opening event of the Keith Zenda Art Space.",
    category: "construction",
    type: "image"
  },
  // ═══════════════════════════════════════════════════════════════════
  // NEW IMAGES — GALLERY CONSTRUCTION & OPENING (from PICTURES 2)
  // ═══════════════════════════════════════════════════════════════════
  {
    src: "IMG-20260410-WA0036.jpg",
    title: "Opening Ceremony Guests",
    description: "A large group of community members and guests seated outdoors for the gallery opening ceremony.",
    category: "construction",
    type: "image"
  },
  {
    src: "IMG-20260410-WA0041.jpg",
    title: "Opening Speech",
    description: "Keith Zenda standing outdoors during the opening event.",
    category: "construction",
    type: "image"
  },

  {
    src: "IMG-20260410-WA0045.jpg",
    title: "Guests Under the Marquee",
    description: "Guests sitting in chairs under the marquee during the gallery opening event.",
    category: "construction",
    type: "image"
  },
  {
    src: "IMG-20260410-WA0047.jpg",
    title: "Students in the Painting Workshop",
    description: "School students in bright yellow uniforms seated at long workshop tables inside the gallery, concentrating on their painting exercises with art supplies spread before them and Keith Zenda's large portrait artworks adorning the walls behind.",
    category: "mentorship",
    type: "image"
  },
  {
    src: "IMG-20260410-WA0048.jpg",
    title: "Student Artwork Showcase",
    description: "A proud group of young students in yellow school uniforms standing together inside the gallery, each holding up the vibrant landscape and nature paintings they created during their mentorship session, with Keith Zenda's artworks displayed on the walls behind them.",
    category: "mentorship",
    type: "image"
  },
  {
    src: "IMG-20260410-WA0049.jpg",
    title: "Celebrating Young Creativity",
    description: "Another angle capturing the enthusiastic students proudly holding their completed paintings aloft, showcasing a wonderful variety of colorful landscapes, flowers, and abstract work created under guidance at the Art Space.",
    category: "mentorship",
    type: "image"
  },
  {
    src: "IMG-20260410-WA0050.jpg",
    title: "Focused Painting Session",
    description: "Young students deeply focused on their art, seated at workshop tables with palettes of paint, brushes, and canvases — a lively and creative scene with Keith Zenda's artwork providing visual inspiration from the gallery walls.",
    category: "mentorship",
    type: "image"
  },
  {
    src: "IMG-20260410-WA0055.jpg",
    title: "Outdoor Welcome Talk",
    description: "Keith Zenda and a community leader addressing a large group of visiting children outdoors on the gallery's artificial turf lawn, welcoming them and explaining the importance of art and heritage before their gallery tour begins.",
    category: "mentorship",
    type: "image"
  },
  {
    src: "IMG-20260410-WA0056.jpg",
    title: "Keith Zenda Engaging Young Minds",
    description: "Keith Zenda standing inside the gallery in front of his powerful narrative paintings, engaging with a group of captivated community children while a visitor records the moment on their phone — a testament to the gallery's educational impact.",
    category: "mentorship",
    type: "image"
  },
  {
    src: "IMG-20260410-WA0057.jpg",
    title: "Interactive Gallery Discussion",
    description: "Keith Zenda alongside a community guide, leading an animated conversation with young visitors inside the gallery. The children crowd around eagerly as the stories behind the large-scale paintings of cultural life are explained.",
    category: "mentorship",
    type: "image"
  },
  {
    src: "IMG-20260410-WA0062.jpg",
    title: "Children Gathering at the Gallery",
    description: "A large group of excited community children gathered on the gravel courtyard outside the gallery building, waiting with anticipation for their guided tour and art mentorship experience to begin.",
    category: "mentorship",
    type: "image"
  },
  {
    src: "IMG-20260410-WA0064.jpg",
    title: "Up Close with the Art",
    description: "Young visitors leaning in to closely examine the fine details and textures of the artworks hung on the gallery walls, with expressions of wonder and curiosity as they discover the visual narratives woven into each piece.",
    category: "mentorship",
    type: "image"
  },
  {
    src: "IMG-20260410-WA0080.jpg",
    title: "Foundation Materials",
    description: "An early construction phase of the gallery, showing foundation walls and piles of building materials on-site.",
    category: "construction",
    type: "image"
  },
  {
    src: "IMG-20260410-WA0094.jpg",
    title: "The Gallery by Night",
    description: "A breathtaking nighttime view of the completed Keith Zenda Art Space — the building illuminated with dramatic blue LED lighting that highlights the entrance mural, with the glass-fronted gallery rooms glowing warmly from within, creating a stunning landmark in the Domboshava landscape.",
    category: "construction",
    type: "image"
  },
  {
    src: "IMG-20260410-WA0095.jpg",
    title: "Mounting the Facade Artwork",
    description: "A team member mounting a beautiful portrait painting onto the gallery's tall entrance display frame, standing on a bucket to reach the top of the steel structure — flanked by traditional clay pots and decorative water features beneath.",
    category: "construction",
    type: "image"
  },
  {
    src: "IMG-20260410-WA0114.jpg",
    title: "Brickwork & Beam Construction",
    description: "Workers in blue overalls laying bricks and installing concrete lintels and roof beams during the mid-stage construction of the gallery — the floor plan and room layout clearly visible with multiple walls at various heights.",
    category: "construction",
    type: "image"
  },
  {
    src: "IMG-20260410-WA0159.jpg",
    title: "School Visit to the Gallery",
    description: "Young students in yellow school uniforms being guided by Keith Zenda at the entrance of the gallery, discovering the exterior water feature and decorative elements at the base of the entrance pillar during their organized school visit.",
    category: "mentorship",
    type: "image"
  },
  {
    src: "IMG-20260410-WA0161.jpg",
    title: "Inside the Gallery — Full Exhibition View",
    description: "A panoramic interior shot of the completed gallery in full exhibition mode — high vaulted ceilings with timber trusses, white-painted walls lined with artwork on easels and mounted displays, comfortable lounge furniture, and visitors browsing the curated collections.",
    category: "construction",
    type: "image"
  },
  {
    src: "IMG-20260410-WA0165.jpg",
    title: "The Completed Gallery Facade",
    description: "The stunning finished exterior of the ArtGalZim Center in Domboshava — featuring the bold blue 'ART GALLERY' signage, a monumental display of artwork on the entrance pillar, landscaped artificial turf with stepping stones, decorative clay pots, and a modern water feature.",
    category: "construction",
    type: "image"
  },
  {
    src: "IMG-20260410-WA0166.jpg",
    title: "Keith Zenda — A Dream Realized",
    description: "Keith Zenda standing proudly with open arms in front of his completed Art Gallery — the ArtGalZim Center in Domboshava — a powerful image symbolizing the fulfillment of years of vision, hard work, and community dedication.",
    category: "construction",
    type: "image"
  },
  {
    src: "IMG-20260410-WA0168.jpg",
    title: "Gallery Perimeter & Security Fencing",
    description: "The completed gallery viewed from the roadside perspective — showing the professional black security fencing, gravelled parking area, and the gallery's modern white facade with its signature entrance pillar visible through the fence, set along the main Domboshava road.",
    category: "construction",
    type: "image"
  },
  {
    src: "IMG-20260410-WA0175.jpg",
    title: "Gallery Exterior — Signature Entrance",
    description: "A striking full-frontal view of the ArtGalZim Center's completed entrance — the 'ART GALLERY' signage illuminated above a vibrant portrait painting of an African woman in golden headwrap, framed by decorative clay pots, green landscaping, and the modern water feature below.",
    category: "construction",
    type: "image"
  },
  {
    src: "IMG-20260410-WA0177.jpg",
    title: "Workers in Courtyard",
    description: "Workers in blue overalls walking across the artificial grass tiles in the gallery's outdoor courtyard.",
    category: "construction",
    type: "image"
  },
  {
    src: "IMG-20260410-WA0184.jpg",
    title: "Exterior Building View",
    description: "A wide-angle landscape shot of the Keith Zenda Art Space building seen from across the main road.",
    category: "construction",
    type: "image"
  },
  {
    src: "IMG-20260410-WA0185.jpg",
    title: "Floor Finish Application",
    description: "Workers applying a black finish to the concrete floor inside the gallery during the final stages of construction.",
    category: "construction",
    type: "image"
  },
  {
    src: "IMG-20260410-WA0199.jpg",
    title: "Roof Framing Progress",
    description: "Construction progress showing the brick walls and roof framing of the gallery building.",
    category: "construction",
    type: "image"
  },
  {
    src: "IMG-20260410-WA0233.jpg",
    title: "Interior Flooring Phase",
    description: "The interior of the gallery building during the flooring installation phase of construction.",
    category: "construction",
    type: "image"
  },



  // ═══════════════════════════════════════════════════════════════════
  // VIDEOS — GALLERY CONSTRUCTION & OPENING (from VIDEEOS 2)
  // ═══════════════════════════════════════════════════════════════════
  {
    src: "VID-20260410-WA0003.mp4",
    title: "Visual Chronicles - V01",
    description: "Official Gallery Opening & Mentorship Archive",
    category: "construction",
    type: "video"
  },
  {
    src: "VID-20260410-WA0004.mp4",
    title: "Visual Chronicles - V02",
    description: "Official Gallery Opening & Mentorship Archive",
    category: "construction",
    type: "video"
  },
  {
    src: "VID-20260410-WA0010.mp4",
    title: "Visual Chronicles - V03",
    description: "Official Gallery Opening & Mentorship Archive",
    category: "construction",
    type: "video"
  },
  {
    src: "VID-20260410-WA0011.mp4",
    title: "Visual Chronicles - V04",
    description: "Official Gallery Opening & Mentorship Archive",
    category: "construction",
    type: "video"
  },
  {
    src: "VID-20260410-WA0012.mp4",
    title: "Visual Chronicles - V05",
    description: "Official Gallery Opening & Mentorship Archive",
    category: "construction",
    type: "video"
  },
  {
    src: "VID-20260413-WA0018.mp4",
    title: "Visual Chronicles - V06",
    description: "Official Gallery Opening & Mentorship Archive",
    category: "construction",
    type: "video"
  },
  {
    src: "VID-20260413-WA0019.mp4",
    title: "Visual Chronicles - V07",
    description: "Official Gallery Opening & Mentorship Archive",
    category: "construction",
    type: "video"
  },
  {
    src: "VID-20260413-WA0020.mp4",
    title: "Visual Chronicles - V08",
    description: "Official Gallery Opening & Mentorship Archive",
    category: "construction",
    type: "video"
  },

  // ═══════════════════════════════════════════════════════════════════
  // VIDEOS — MENTORSHIP & EDUCATION (from VIDEEOS 2)
  // ═══════════════════════════════════════════════════════════════════
  {
    src: "VID-20260410-WA0002.mp4",
    title: "Visual Chronicles - V09",
    description: "Official Gallery Opening & Mentorship Archive",
    category: "mentorship",
    type: "video"
  },
  {
    src: "VID-20260410-WA0016.mp4",
    title: "Visual Chronicles - V10",
    description: "Official Gallery Opening & Mentorship Archive",
    category: "mentorship",
    type: "video"
  },
  {
    src: "VID-20260410-WA0018.mp4",
    title: "Visual Chronicles - V11",
    description: "Official Gallery Opening & Mentorship Archive",
    category: "mentorship",
    type: "video"
  },
  {
    src: "VID-20260410-WA0019.mp4",
    title: "Visual Chronicles - V12",
    description: "Official Gallery Opening & Mentorship Archive",
    category: "mentorship",
    type: "video"
  },
  {
    src: "VID-20260410-WA0020.mp4",
    title: "Visual Chronicles - V13",
    description: "Official Gallery Opening & Mentorship Archive",
    category: "mentorship",
    type: "video"
  },
  {
    src: "VID-20260410-WA0033.mp4",
    title: "Visual Chronicles - V14",
    description: "Official Gallery Opening & Mentorship Archive",
    category: "mentorship",
    type: "video"
  },
  {
    src: "VID-20260413-WA0017.mp4",
    title: "Visual Chronicles - V15",
    description: "Official Gallery Opening & Mentorship Archive",
    category: "mentorship",
    type: "video"
  }
];
