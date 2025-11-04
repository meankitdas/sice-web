'use client';

import Link from 'next/link';
import { FaCheckCircle, FaClock, FaGraduationCap, FaAward } from 'react-icons/fa';

export default function PGDCACoursePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
      <div className="bg-gradient-to-r from-blue-600 to-red-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold mb-4">
              Post Graduate Diploma
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">PGDCA Course</h1>
            <p className="text-xl md:text-2xl mb-4">Post Graduate Diploma in Computer Applications</p>
            <p className="text-lg opacity-90">Advanced diploma program for graduates</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-10">
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <FaClock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-800">1 Year</div>
            <div className="text-gray-600 text-sm">Duration</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <FaGraduationCap className="w-8 h-8 text-purple-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-800">PG Level</div>
            <div className="text-gray-600 text-sm">Qualification</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <FaAward className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-800">Diploma</div>
            <div className="text-gray-600 text-sm">Certification</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <FaCheckCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-800">100%</div>
            <div className="text-gray-600 text-sm">Placement</div>
          </div>
        </div>
      </div>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">About PGDCA</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-lg text-gray-700 mb-4">
              PGDCA is a one-year post-graduate diploma program in Computer Applications. This comprehensive course covers programming languages, databases, software engineering, and advanced computer applications.
            </p>
            <p className="text-lg text-gray-700">
              Perfect for graduates looking to build a career in IT and software development.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-red-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Advance Your Career?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Enroll in PGDCA and take your IT skills to the next level!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/enroll" className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors inline-block">
              Enroll Now - Get ₹5000 Off
            </Link>
            <Link href="/courses" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors inline-block">
              View All Courses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}