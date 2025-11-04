'use client';

import Link from 'next/link';
import { FaCheckCircle, FaClock, FaRupeeSign, FaGraduationCap, FaAward } from 'react-icons/fa';

export default function CoursePage({ 
  badge,
  title, 
  subtitle, 
  description,
  duration,
  level,
  features = [],
  bgGradient = "from-blue-600 to-red-600"
}) {
  // Convert Tailwind gradient classes to inline styles
  const gradientMap = {
    'from-blue-600 to-red-600': 'linear-gradient(to right, rgb(37 99 235), rgb(220 38 38))',
    'from-green-600 to-blue-600': 'linear-gradient(to right, rgb(22 163 74), rgb(37 99 235))',
    'from-orange-600 to-red-600': 'linear-gradient(to right, rgb(234 88 12), rgb(220 38 38))',
    'from-yellow-600 to-orange-600': 'linear-gradient(to right, rgb(202 138 4), rgb(234 88 12))',
    'from-red-600 to-pink-600': 'linear-gradient(to right, rgb(220 38 38), rgb(219 39 119))',
    'from-purple-600 to-blue-600': 'linear-gradient(to right, rgb(147 51 234), rgb(37 99 235))',
    'from-blue-600 via-purple-600 to-yellow-500': 'linear-gradient(to right, rgb(37 99 235), rgb(147 51 234), rgb(234 179 8))',
    'from-indigo-600 to-purple-600': 'linear-gradient(to right, rgb(79 70 229), rgb(147 51 234))',
    'from-pink-500 to-orange-500': 'linear-gradient(to right, rgb(236 72 153), rgb(249 115 22))'
  };

  const gradientStyle = gradientMap[bgGradient] || gradientMap['from-blue-600 to-red-600'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
      {/* Hero Section */}
      <div className="text-white py-20" style={{ background: gradientStyle }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {badge && (
              <div className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold mb-4">
                {badge}
              </div>
            )}
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
            <p className="text-xl md:text-2xl mb-4">{subtitle}</p>
            <p className="text-lg opacity-90">{description}</p>
          </div>
        </div>
      </div>

      {/* Quick Info Cards */}
      <div className="container mx-auto px-4 -mt-10">
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <FaClock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-800">{duration}</div>
            <div className="text-gray-600 text-sm">Duration</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <FaRupeeSign className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-800">Affordable</div>
            <div className="text-gray-600 text-sm">Course Fee</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <FaGraduationCap className="w-8 h-8 text-purple-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-800">{level}</div>
            <div className="text-gray-600 text-sm">Level</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <FaAward className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-800">Certificate</div>
            <div className="text-gray-600 text-sm">On Completion</div>
          </div>
        </div>
      </div>

      {/* Features */}
      {features.length > 0 && (
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">What You'll Learn</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                  <FaCheckCircle className="w-6 h-6 text-green-600 mr-4 flex-shrink-0" />
                  <span className="text-lg text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="text-white py-16" style={{ background: gradientStyle }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Enroll now and get up to ₹5,000 discount for the first 30 students!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/enroll"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Enroll Now - Get ₹5000 Off
            </Link>
            <Link 
              href="/courses"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors inline-block"
            >
              View All Courses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}