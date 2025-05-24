import GalleryItem from './GalleryItem';

const items = [
  {
    id: 1,
    src: '/placeholder_1.jpg',
    alt: 'Abstract painting',
    title: 'Sprial of Color',
    description: 'Oils on canvas, 2023',
    price: "2000",
  },
  {
    id: 2,
    src: '/placeholder_2.jpg',
    alt: 'Portrait painting',
    title: 'Euphoria girl',
    description: 'Oils on canvas, 2024',
    price: "2000",
  },
  {
    id: 3,
    src: '/placeholder_3.jpg',
    alt: 'Garlic',
    title: 'Garlic',
    description: 'Oils n shit, 2022',
    price: "2000",
  },
  {
    id: 4,
    src: '/placeholder_4.jpg',
    alt: 'More Eurphoria girl',
    title: 'More Eurphoria girl',
    description: 'Oils n shit, 2022',
    price: "2000",
  },
  {
    id: 5,
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
      </div>
    </section>
  );
}
