import { Outlet, Link, useLocation } from "react-router";
import logo from "@/assets/logo.jpeg";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={className} fill="currentColor">
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
  </svg>
);

export function Layout() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b-2 shadow-xl" style={{ borderColor: 'var(--gold)' }}>
        <div className="max-w-7xl mx-auto px-4 md:px-12 py-3 md:py-4 overflow-x-hidden">
          <div className="flex items-center justify-between gap-4 md:gap-8">
            <Link to="/" className="flex items-center gap-3 md:gap-4 text-foreground tracking-[0.2em] font-medium hover:opacity-100 flex-shrink-0" style={{ fontSize: '0.95rem' }}>
              <img 
                src={logo} 
                alt="Keith Zenda Art Logo" 
                className="h-8 md:h-12 w-auto rounded-sm"
              />
              <span className="hidden lg:inline">KEITH ZENDA ART</span>
            </Link>

            <div className="flex items-center gap-3 sm:gap-6 md:gap-10 overflow-x-auto no-scrollbar px-1">
              {[
                { name: "Home", path: "/" },
                { name: "Work", path: "/work" },
                { name: "About", path: "/about" },
                { name: "Community", path: "/community" },
                { name: "Contact", path: "/contact" }
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative text-foreground tracking-widest transition-all duration-500 pb-1 group text-[10px] sm:text-xs md:text-sm uppercase ${
                    isActive(item.path) ? "opacity-100" : "opacity-40 hover:opacity-70"
                  }`}
                >
                  {item.name}
                  <span 
                    className={`absolute bottom-0 left-0 h-[2px] bg-gold transition-all duration-500 ease-out ${
                      isActive(item.path) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Global Footer */}
      <footer className="w-full py-8 text-center mt-auto">
        <a 
          href="https://www.owatech-ai.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[10px] md:text-xs text-[var(--gold)] underline underline-offset-4 opacity-90 hover:opacity-100 uppercase tracking-[0.2em] transition-opacity duration-300"
        >
          POWERED BY OWA TECHNOLOGIES
        </a>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/263776330869" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all duration-300 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7 md:w-8 md:h-8" />
        <span className="absolute right-full mr-4 bg-background border border-gold/20 text-foreground px-3 py-1.5 rounded-sm text-xs tracking-widest whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
          CHAT WITH US
        </span>
      </a>
    </div>
  );
}