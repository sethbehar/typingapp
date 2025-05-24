export default function About() {
  return (
    <section className="py-16 bg-white" id="about">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">ABOUT ME</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <img
              src="/about.jpeg"
              alt="Felipe Tenorio in his studio"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-700 mb-4 leading-relaxed">
              Brooke is a broke artist from Weston, Florida.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              She is figuring out life.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Her brother motivates her to paint because she needs to lock in.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="inline-block border-2 border-gray-800 hover:bg-gray-800 hover:text-white transition-colors duration-300 rounded-full px-6 py-2 text-sm uppercase tracking-wider">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}