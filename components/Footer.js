'use client';

import Link from 'next/link';
import { FaFacebook, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaArrowUp } from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">About SICE</h3>
            <p className="text-gray-300 mb-4">
              Shibam Institute of Computer Education (SICE) is dedicated to providing quality computer education since 2011.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/sice.rairangpur" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                <FaFacebook size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/enroll" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Enroll Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-300">
                  1st Floor, Medical Chowk,<br />
                  Rairangpur, Odisha - 757043, India
                </span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-blue-400 mr-3 flex-shrink-0" />
                <a href="tel:9776633572" className="text-gray-300 hover:text-blue-400 transition-colors">
                  9776633572
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">info@sice.edu.in</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Business Hours</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <FaClock className="text-blue-400 mr-3 flex-shrink-0" />
                <span>Mon - Sat: 7:00 AM – 7:00 PM</span>
              </li>
              <li className="pl-8">Sunday: Closed</li>
            </ul>

            <div className="mt-6">
              <h4 className="font-semibold mb-2">Locations</h4>
              <div className="space-y-2">
                <a 
                  href="https://maps.app.goo.gl/Df4mJm67PqWr3vtP7?g_st=aw" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-blue-400 hover:text-blue-300 transition-colors"
                >
                  📍 Bisoi Center
                </a>
                <a 
                  href="https://www.google.com/maps/place/SICE+COMPUTER+INSTITUTE/@22.268122,86.1745553,17z" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-blue-400 hover:text-blue-300 transition-colors"
                >
                  📍 Rairangpur Center
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm text-center md:text-left mb-4 md:mb-0">
              © 2025 Shibam Institute of Computer Education. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors shadow-lg"
              aria-label="Scroll to top"
            >
              <FaArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}