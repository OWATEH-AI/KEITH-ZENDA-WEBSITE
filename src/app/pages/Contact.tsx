export function Contact() {
  return (
    <div className="pt-28 pb-16 px-6 md:pt-36 md:pb-20 md:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="mb-16 md:mb-24 animate-fade-in-up flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-[0.15em] mb-6 uppercase">
            Contact
          </h1>
          <p className="max-w-2xl text-foreground/70 leading-relaxed md:text-lg">
            Connect with us for inquiries, gallery tours, and art acquisitions.
          </p>
          <div className="h-[1px] w-24 bg-gold mt-10 mb-6"></div>
        </div>

        {/* Contact Info - Centered */}
        <div className="max-w-xl mx-auto text-center space-y-8 md:space-y-10">
          <div className="space-y-2">
            <p className="opacity-40" style={{ fontSize: '0.8125rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Email
            </p>
            <a
              href="mailto:keithzendart@gmail.com"
              className="block text-foreground hover:opacity-60 transition-opacity"
              style={{ fontSize: '1.125rem', letterSpacing: '0.005em' }}
            >
              keithzendart@gmail.com
            </a>
          </div>

          <div className="space-y-2">
            <p className="opacity-40" style={{ fontSize: '0.8125rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Phone
            </p>
            <a
              href="https://wa.me/263776330869"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-foreground hover:opacity-60 transition-opacity"
              style={{ fontSize: '1.125rem', letterSpacing: '0.005em' }}
            >
              +263 77 633 0869
            </a>
          </div>

          <div className="space-y-2">
            <p className="opacity-40" style={{ fontSize: '0.8125rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Instagram
            </p>
            <a
              href="https://instagram.com/zendaism"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-foreground hover:opacity-60 transition-opacity"
              style={{ fontSize: '1.125rem', letterSpacing: '0.005em' }}
            >
              @zendaism
            </a>
          </div>

          <div className="space-y-2">
            <p className="opacity-40" style={{ fontSize: '0.8125rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Website
            </p>
            <a
              href="http://www.keithzenda.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-foreground hover:opacity-60 transition-opacity"
              style={{ fontSize: '1.125rem', letterSpacing: '0.005em' }}
            >
              www.keithzenda.com
            </a>
          </div>

          <div className="space-y-2">
            <p className="opacity-40" style={{ fontSize: '0.8125rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Location
            </p>
            <div className="space-y-1" style={{ fontSize: '1.125rem', letterSpacing: '0.005em' }}>
              <p className="opacity-80">ARTGALZIM CENTER</p>
              <p className="opacity-80">Mverechena Business Center</p>
              <p className="opacity-80">Domboshava, Zimbabwe</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}