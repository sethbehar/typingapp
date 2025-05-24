import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import ArtworkPage from './ArtworkPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <Gallery />
              <About />
              <Newsletter />
              <Footer />
            </>
          }
        />
        <Route path="/artwork/:id" element={<ArtworkPage />} />
      </Routes>
    </Router>
  );
}
