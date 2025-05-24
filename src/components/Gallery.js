import GalleryItem from './GalleryItem';

const items = [
  {
    src: '/placeholder_1.jpg',
    alt: 'Abstract painting',
    title: 'Sprial of Color',
    description: 'Oils on canvas, 2023',
    price: "2000",
  },
  {
    src: '/placeholder_2.jpg',
    alt: 'Portrait painting',
    title: 'Euphoria girl',
    description: 'Oils on canvas, 2024',
    price: "2000",
  },
  {
    src: '/placeholder_3.jpg',
    alt: 'Garlic',
    title: 'Garlic',
    description: 'Oils n shit, 2022',
    price: "2000",
  },
  {
    src: '/placeholder_4.jpg',
    alt: 'More Eurphoria girl',
    title: 'More Eurphoria girl',
    description: 'Oils n shit, 2022',
    price: "2000",
  },
  {
    src: '/placeholder_5.jpg',
    alt: 'Monroe',
    title: 'Monroe Lady',
    description: 'Oils n shit, 2022',
    price: "2000",
  },
];

export default function Gallery() {
  return (
    <section className="py-16 bg-gray-50" id="gallery">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <GalleryItem key={idx} {...item} />
          ))}
        </div>
        {/* <div className="mt-8 text-center">
          <a
            href="/"
            className="inline-block border-2 border-gray-800 hover:bg-gray-800 hover:text-white transition-colors duration-300 rounded-full px-8 py-3 uppercase tracking-wider"
          >
            View All Works
          </a>
        </div> */}
      </div>
    </section>
  );
}
