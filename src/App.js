import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div id="webcrumbs" className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <Gallery />
      <About />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;