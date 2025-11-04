"use client";

import { useState } from "react";
import Image from "next/image";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: "/images/banner.jpg", alt: "SICE Computer Institute" },
    { src: "/images/banner0.jpg", alt: "SICE Computer Institute" },
    { src: "/images/banner1.jpg", alt: "SICE Computer Institute" },
    { src: "/images/banner2.jpg", alt: "SICE Computer Institute" },
    { src: "/images/banner3.jpg", alt: "SICE Computer Institute" },
    { src: "/images/banner4.jpg", alt: "SICE Computer Institute" },
    { src: "/images/banner5.jpg", alt: "SICE Computer Institute" },
  ];

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-xl">Explore our institute through images</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for full-size image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors z-10"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <div className="relative max-w-6xl w-full h-full flex items-center justify-center">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1200}
              height={800}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <p className="absolute bottom-8 text-white text-center text-lg">
            {selectedImage.alt}
          </p>
        </div>
      )}

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Any Questions about SICE?
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>
                <textarea
                  placeholder="Message"
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors"
                ></textarea>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Map and Contact Info */}
            <div>
              <h3 className="text-3xl font-bold mb-6">Visit Us</h3>
              <div className="bg-gray-800 rounded-lg overflow-hidden h-64 mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.8736447890487!2d86.17455531495632!3d22.268121985349806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1e0bf5a7498073%3A0x466a71dfe581c797!2sSICE%20COMPUTER%20INSTITUTE!5e0!3m2!1sen!2sin!4v1635789012345!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="grayscale"
                ></iframe>
              </div>
              <div className="space-y-2 text-gray-300">
                <p className="font-semibold text-lg">📍 Address:</p>
                <p>1st Floor, Medical Chowk, Rairangpur</p>
                <p>Odisha - 757043, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
