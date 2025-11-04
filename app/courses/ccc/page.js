'use client';

import Link from 'next/link';
import { FaCheckCircle, FaClock, FaRupeeSign, FaGraduationCap, FaAward, FaBook } from 'react-icons/fa';

export default function CCCCoursePage() {
  const courseModules = [
    'Introduction to Computer',
    'Introduction to GUI Operating System',
    'Elements of Word Processing',
    'Spreadsheets',
    'Computer Communication and Internet',
    'WWW and Web Browsers',
    'Communication and Collaboration',
    'Making Small Presentations'
  ];

  const benefits = [
    'Government Recognized Certificate',
    'Scholarship Available',
    'Job Opportunities in Government Sector',
    'Basic Computer Literacy',
    'Practical Hands-on Training',
    '100% Placement Assistance'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-red-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold mb-4">
              NIELIT Certified • Scholarship Available
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">CCC Course</h1>
            <p className="text-xl md:text-2xl mb-4">Course on Computer Concepts</p>
            <p className="text-lg opacity-90">
              Master the basics of computers and get government-recognized certification
            </p>
          </div>
        </div>
      </div>

      {/* Quick Info Cards */}
      <div className="container mx-auto px-4 -mt-10">
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <FaClock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-800">80 Hours</div>
            <div className="text-gray-600 text-sm">Duration</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <FaRupeeSign className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-800">Affordable</div>
            <div className="text-gray-600 text-sm">Course Fee</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <FaGraduationCap className="w-8 h-8 text-purple-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-800">Beginner</div>
            <div className="text-gray-600 text-sm">Level</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <FaAward className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-800">NIELIT</div>
            <div className="text-gray-600 text-sm">Certification</div>
          </div>
        </div>
      </div>

      {/* About Course */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">About CCC Course</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-lg text-gray-700 mb-4">
              The Course on Computer Concepts (CCC) is a basic computer literacy program designed by NIELIT (National Institute of Electronics & Information Technology). This course is aimed at the common man to equip him with the essential skills of using the computer for day to day purposes.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              CCC certification is now mandatory for many government jobs and is widely recognized across India. The course covers fundamental concepts and practical skills needed to use computers effectively in personal and professional settings.
            </p>
            <p className="text-lg text-gray-700">
              At SICE, we provide comprehensive training with experienced faculty, modern computer labs, and practical hands-on sessions to ensure you're fully prepared for the NIELIT examination.
            </p>
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Course Curriculum</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {courseModules.map((module, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-start">
                    <FaBook className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Module {index + 1}</div>
                      <h3 className="text-lg font-semibold text-gray-800">{module}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Course Benefits</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                <FaCheckCircle className="w-6 h-6 text-green-600 mr-4 flex-shrink-0" />
                <span className="text-lg text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Eligibility Criteria</h2>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start">
                  <FaCheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span>The student should have passed Class 5 or equivalent from a recognized Board.</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span>No age limit - Open for all age groups</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Perfect for beginners with no prior computer knowledge</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Examination Pattern */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Examination Pattern</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Theory</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 100 Multiple Choice Questions</li>
                  <li>• Duration: 90 Minutes</li>
                  <li>• Online Examination</li>
                  <li>• Pass Marks: 50%</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Practical</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Hands-on Computer Tasks</li>
                  <li>• MS Office Applications</li>
                  <li>• Internet & Email</li>
                  <li>• Evaluated by Experts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-red-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Certified?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join SICE and get your NIELIT CCC certification. Limited seats available with scholarship!
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