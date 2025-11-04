import ImageCarousel from '@/components/ImageCarousel';
import { FaPaperPlane, FaPencilAlt, FaWrench } from 'react-icons/fa';

export default function Home() {
  const carouselImages = [
    '/images/banner.jpg',
    '/images/banner0.jpg',
    '/images/banner1.jpg',
    '/images/banner2.jpg',
    '/images/banner3.jpg',
    '/images/banner4.jpg',
    '/images/banner5.jpg',
  ];

  return (
    <>
      {/* Hero Section with Carousel */}
      <ImageCarousel images={carouselImages} />

      {/* Highlights Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Why only SICE */}
            <div className="text-center p-8 rounded-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-blue-50 to-white">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 text-white rounded-full mb-6">
                <FaPaperPlane size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Why only SICE?</h3>
              <p className="text-gray-600 leading-relaxed">
                Because SICE is the best for computer education in the entire Rairangpur region, 
                providing quality education since 2011.
              </p>
            </div>

            {/* Study in SICE */}
            <div className="text-center p-8 rounded-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-green-50 to-white">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-600 text-white rounded-full mb-6">
                <FaPencilAlt size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Study at SICE</h3>
              <p className="text-gray-600 leading-relaxed">
                At SICE, all classes on any computer subject are very simple. 
                Any kind of student can understand easily with our teaching methods.
              </p>
            </div>

            {/* Best for Programming */}
            <div className="text-center p-8 rounded-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-purple-50 to-white">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-600 text-white rounded-full mb-6">
                <FaWrench size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Best for Programming</h3>
              <p className="text-gray-600 leading-relaxed">
                At SICE, the method of teaching programming is very simple. 
                Even weak students can understand programming languages easily.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">VISION of SICE</h2>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed">
            To be the leader in the development of industry-oriented quality education and training, 
            and be the country's premier institution for examination and certification in the field of 
            Information, Electronics and Communications Technology (IECT).
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-blue-600 mb-2">13+</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-green-600 mb-2">150+</div>
              <div className="text-gray-600">Active Students</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-purple-600 mb-2">10+</div>
              <div className="text-gray-600">Courses Offered</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-orange-600 mb-2">2</div>
              <div className="text-gray-600">Centers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join SICE today and get up to ₹5000 discount on enrollment!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/enroll"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-colors shadow-lg text-lg"
            >
              Enroll Now
            </a>
            <a
              href="#contact"
              className="bg-white hover:bg-gray-50 text-blue-600 font-semibold px-8 py-4 rounded-full transition-colors shadow-lg border-2 border-blue-600 text-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h3 className="text-3xl font-bold mb-6">Any Questions about SICE?</h3>
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
