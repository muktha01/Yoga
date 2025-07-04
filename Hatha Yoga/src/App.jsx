import React from 'react';
import Navbar from './components /Navbar';
import Hero from './components /Hero';
import About from './components /About';
import Programs from './components /Programs';
import Benefits from './components /Benefits';
import Testimonials from './components /Testimonials';
import Gallery from './components /Gallery';
import Contact from './components /Contact';
import Footer from './components /Footer';


const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Benefits />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;