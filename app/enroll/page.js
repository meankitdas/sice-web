'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaGraduationCap, FaCheckCircle, FaMapMarkerAlt, FaClock, FaGift, FaPhone, FaEnvelope, FaTags } from 'react-icons/fa';

export default function EnrollPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const endDate = new Date('2025-12-15T00:00:00');
      const now = new Date();
      const difference = endDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const isOfferExpired = timeLeft.days === 0 && timeLeft.hours === 0 && 
                         timeLeft.minutes === 0 && timeLeft.seconds === 0;

  const benefits = [
    'Industry-recognized certification',
    'Experienced faculty members',
    'Modern computer lab facilities',
    'Free study materials',
    'Job placement assistance',
    'Flexible class timings',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)',
        }}></div>
        
        <div className="relative container mx-auto px-4 py-16 md:py-24 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <FaGraduationCap className="text-4xl" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Join SICE Today
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Shibam Institute of Computer Education
            </p>
            <div className="inline-flex items-center bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-bold text-lg shadow-lg mb-8">
              <FaGift className="mr-2" />
              Limited Time Offer
            </div>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Special Offer Card */}
          <div className="bg-gradient-to-r from-blue-600 via-red-500 to-red-600 rounded-3xl p-1 mb-8 shadow-2xl transform hover:scale-[1.02] transition-transform">
            <div className="bg-white rounded-3xl p-8 md:p-12">
              <div className="text-center">
                <div className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-red-500 text-white px-6 py-2 rounded-full font-bold text-sm mb-4">
                  <FaTags className="mr-2" />
                  SPECIAL ENROLLMENT OFFER
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
                  Save Up to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-500">₹5,000</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Enroll now and get exclusive discounts on all courses!
                </p>

                {/* Countdown Timer */}
                {!isOfferExpired ? (
                  <div className="mb-8">
                    <p className="text-lg font-semibold text-gray-700 mb-4 flex items-center justify-center">
                      <FaClock className="mr-2 text-red-500" />
                      Offer ends in:
                    </p>
                    <div className="grid grid-cols-4 gap-3 md:gap-6 max-w-2xl mx-auto">
                      {[
                        { value: timeLeft.days, label: 'Days' },
                        { value: timeLeft.hours, label: 'Hours' },
                        { value: timeLeft.minutes, label: 'Minutes' },
                        { value: timeLeft.seconds, label: 'Seconds' },
                      ].map((item, index) => (
                        <div key={index} className="relative">
                          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-4 md:p-6 shadow-lg">
                            <div className="text-3xl md:text-5xl font-bold text-white mb-1">
                              {item.value.toString().padStart(2, '0')}
                            </div>
                            <div className="text-xs md:text-sm text-blue-100 font-medium uppercase">
                              {item.label}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="mb-8">
                    <p className="text-2xl font-bold text-red-500">Offer Expired!</p>
                    <p className="text-gray-600 mt-2">Contact us for current enrollment options</p>
                  </div>
                )}

                {/* Enroll Button */}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSey0giIirSBhqMmvIepCPJA2e2WtGhyDgUPEao-0V-1rM8S3A/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-xl px-12 py-5 rounded-full shadow-2xl transition-all transform hover:scale-105"
                >
                  <FaGraduationCap className="mr-3 text-2xl" />
                  Enroll Now - Save ₹5,000
                </a>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Why Choose SICE?</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0 text-xl" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 shadow-lg text-white">
              <h3 className="text-2xl font-bold mb-6">What You'll Get</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-white/20 rounded-full p-2 mr-3">
                    <FaGraduationCap className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Quality Education</h4>
                    <p className="text-blue-100">Learn from experienced faculty with industry expertise</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white/20 rounded-full p-2 mr-3">
                    <FaCheckCircle className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Certification</h4>
                    <p className="text-blue-100">Get recognized certificates upon course completion</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white/20 rounded-full p-2 mr-3">
                    <FaClock className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Flexible Timings</h4>
                    <p className="text-blue-100">Choose class timings that suit your schedule</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Location Cards */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">Visit Our Centers</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="https://maps.app.goo.gl/Df4mJm67PqWr3vtP7?g_st=aw"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
              >
                <div className="flex items-start">
                  <div className="bg-blue-100 group-hover:bg-blue-600 rounded-full p-4 mr-4 transition-colors">
                    <FaMapMarkerAlt className="text-2xl text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">Bisoi Center</h4>
                    <p className="text-gray-600 mb-4">Get directions to our Bisoi campus</p>
                    <span className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                      View on Map
                      <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>

              <a
                href="https://www.google.com/maps?q=SICE+COMPUTER+INSTITUTE,+Rairangpur,+Odisha"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
              >
                <div className="flex items-start">
                  <div className="bg-blue-100 group-hover:bg-blue-600 rounded-full p-4 mr-4 transition-colors">
                    <FaMapMarkerAlt className="text-2xl text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">Rairangpur Center</h4>
                    <p className="text-gray-600 mb-4">Get directions to our main campus</p>
                    <span className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                      View on Map
                      <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Back to Home Link */}
          <div className="text-center">
            <Link
              href="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Have Questions? We're Here to Help!
          </h3>
          <p className="text-gray-300 mb-6 text-lg">
            Contact us for more information about our courses and enrollment process
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9776633572"
              className="inline-flex items-center justify-center bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full transition-colors"
            >
              <FaPhone className="mr-2" />
              Call: 9776633572
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              <FaEnvelope className="mr-2" />
              Send Message
            </Link>
          </div>
          <p className="text-gray-400 mt-6 text-sm">
            © 2025 Shibam Institute of Computer Education
          </p>
        </div>
      </div>
    </div>
  );
}