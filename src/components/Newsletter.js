import React from 'react';

export default function Newsletter() {
  return (
    <section className="py-16 text-center" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-lg uppercase tracking-wider font-medium mb-3 text-gray-800">JOIN MY NEWSLETTER</h2>
        <p className="text-gray-600 mb-6">
          Stay up to date with original artworks, prints and exhibitions
        </p>
        <form className="flex flex-col sm:flex-row justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="border border-gray-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-800 mb-2 sm:mb-0 sm:mr-2"
            required
          />
          <button
            type="submit"
            className="border border-gray-800 px-5 py-2 uppercase text-sm tracking-wider hover:bg-gray-800 hover:text-white transition-colors duration-300 flex items-center justify-center"
          >
            <span className="material-symbols-outlined mr-2 text-sm">mail</span>
            SIGN UP
          </button>
        </form>
      </div>
    </section>
  );
}