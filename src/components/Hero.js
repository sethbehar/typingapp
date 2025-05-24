export default function Hero() {

  const scrollToGallery = (e) => {
    e.preventDefault();
    document
      .getElementById('gallery')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-[500px] flex items-center justify-center" id="hero">
      <div className="absolute inset-0 z-0">
        <img
          src="/placeholder_3.jpg"
          alt="Close-up of artistic portrait"
          className="w-full h-full object-cover brightness-75"
        />
      </div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-6xl md:text-7xl font-bold mb-4 tracking-wider">BROOKE BEHAR</h1>
        <p className="text-xl tracking-widest uppercase mb-8"></p>
        <a
          href="#gallery"
          onClick={scrollToGallery}
          className="inline-block border-2 border-white hover:bg-white hover:text-black transition-colors duration-300 rounded-full px-8 py-3 uppercase tracking-wider"
        >
          SHOP
        </a>
      </div>
    </section>
  );
}