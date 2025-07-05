import React from 'react';
import { Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-r from-orange-500 to-amber-600">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Yogic Nexus Yoga
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Classical Hatha Yoga in its full depth and dimension. Transform your body and mind through ancient yogic practices.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-50 transition-colors">
            Start Your Journey
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-colors">
            Learn More
          </button>
        </div>
        <div className="mt-8 text-lg">
          <p className="flex items-center justify-center gap-2">
            <Phone size={20} />
            Contact: +91 98856 65421
          </p>
          <p className="mt-2 text-orange-200">Certified By Isha Foundation, Coimbatore</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;