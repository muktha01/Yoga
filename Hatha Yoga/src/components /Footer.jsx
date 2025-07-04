import React from 'react';
import { Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Dhyana Hatha Yoga</h3>
            <p className="text-gray-400 mb-4">
              Offering classical Hatha Yoga in its full depth and dimension for your complete transformation.
            </p>
            <p className="text-sm text-gray-400">
              Certified By Isha Foundation, Coimbatore
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">Programs</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Upa Yoga</li>
              <li>Surya Kriya</li>
              <li>Angamardana</li>
              <li>Bhuta Shuddhi</li>
              <li>Kids Yoga</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                +91 98856 65421
              </p>
              <p className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                info@dhyanahathayoga.com
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Dhyana Hatha Yoga. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;