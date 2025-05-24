export default function Header() {

  const scrollToSection = (e, id) => {
    e.preventDefault();
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <header className="border-b border-gray-200 sticky top-0 bg-white z-10 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a
          href="#hero"
            onClick={(e) => scrollToSection(e, 'hero')}
          className="text-xl font-bold tracking-wider hover:text-primary-500 transition-colors"
        >
          BROOKE BEHAR
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          <details className="relative group">
            <summary href="#gallery"
            onClick={(e) => scrollToSection(e, 'gallery')} className="text-sm uppercase tracking-wide hover:text-primary-500 transition-colors list-none flex items-center cursor-pointer">
              SHOP
            </summary>
          </details>
          <a href="#about"
            onClick={(e) => scrollToSection(e, 'about')} className="text-sm uppercase tracking-wide hover:text-primary-500 transition-colors">ABOUT</a>
          <a href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')} className="text-sm uppercase tracking-wide hover:text-primary-500 transition-colors">CONTACT</a>
        </nav>

        <div className="flex items-center space-x-4">
          <a href="/" className="hover:text-primary-500 transition-transform hover:scale-110">
            <img width={25} height={25} src="/insta.svg" alt='IG' className="text-lg"/>
          </a>
          <a href="/" className="hover:text-primary-500 transition-transform hover:scale-110">
            <img width={25} height={25} src="/tiktok.svg" alt='IG' className="text-lg"/>
          </a>
        </div>
      </div>
    </header>
  );
}
