
export default function GalleryItem({ src, alt, title, description, price }) {
  return (
    <div className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
      <div className="relative overflow-hidden">
        <img
          src={src}
          alt={alt}
          className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <h3 className="text-white text-lg font-semibold">{title}</h3>
          <p className="text-white/80 text-sm">{description}</p>
          <p className="text-white/80 text-sm">$ {price}</p>
        </div>
      </div>
    </div>
  );
}