
export default function Footer() {
  return (
    <footer className="mt-auto py-6 border-t border-gray-200">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-500 mb-4 md:mb-0">Copyright © 2025 Brooke Behar</p>
        <div className="flex space-x-6">
          <a href="/" className="text-sm text-gray-500 hover:text-primary-500 transition-colors">Privacy Policy</a>
          <a href="/" className="text-sm text-gray-500 hover:text-primary-500 transition-colors">Terms & Conditions</a>
          <a href="/" className="text-sm text-gray-500 hover:text-primary-500 transition-colors">Shipping and Return Policy</a>
        </div>
      </div>
    </footer>
  );
}