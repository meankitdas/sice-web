'use client';

import Link from 'next/link';
import { FaCheckCircle, FaClock, FaRupeeSign, FaGraduationCap, FaPython, FaBook, FaCode, FaChartLine } from 'react-icons/fa';

export default function PythonCoursePage() {
  const courseModules = [
    'Introduction to Python & Setup',
    'Variables, Data Types & Operators',
    'Control Flow - If/Else, Loops',
    'Functions & Modules',
    'Lists, Tuples & Dictionaries',
    'File Handling & Exception Handling',
    'Object-Oriented Programming',
    'Libraries: NumPy, Pandas',
    'GUI Programming with Tkinter',
    'Mini Project Development'
  ];

  const benefits = [
    'Learn Most Popular Programming Language',
    'Hands-on Practical Projects',
    'Industry-Relevant Curriculum',
    'Career Opportunities in AI/ML',
    'Perfect for Beginners',
    'Certificate of Completion'
  ];

  const careerPaths = [
    'Python Developer',
    'Data Analyst',
    'Web Developer (Django/Flask)',
    'Automation Engineer',
    'Machine Learning Engineer',
    'Data Scientist'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-yellow-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FaPython className="w-20 h-20 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Python Programming</h1>
            <p className="text-xl md:text-2xl mb-4">Learn the #1 Programming Language</p>
            <p className="text-lg opacity-90">
              Master Python from basics to advanced concepts
            </p>
          </div>
        </div>
      </div>

      {/* Quick Info Cards */}
      <div className="container mx-auto px-4 -mt-10">
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <FaClock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-800">2-3 Months</div>
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
            <FaCode className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-800">Projects</div>
            <div className="text-gray-600 text-sm">Hands-on</div>
          </div>
        </div>
      </div>

      {/* About Course */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Why Learn Python?</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-lg text-gray-700 mb-4">
              Python is the most popular programming language in 2024! It's widely used in web development, data science, artificial intelligence, machine learning, automation, and more. Python's simple syntax makes it perfect for beginners while being powerful enough for advanced applications.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Our comprehensive Python course covers everything from basic syntax to advanced concepts like object-oriented programming and popular libraries. You'll work on real-world projects and build a portfolio that showcases your skills to potential employers.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">Easy</div>
                <div className="text-gray-700">Beginner Friendly</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">Versatile</div>
                <div className="text-gray-700">Multiple Applications</div>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <div className="text-3xl font-bold text-yellow-600 mb-2">In-Demand</div>
                <div className="text-gray-700">High Paying Jobs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Curriculum */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Course Curriculum</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {courseModules.map((module, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">{module}</h3>
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">What You'll Get</h2>
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

      {/* Career Opportunities */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Career Opportunities</h2>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <p className="text-lg text-gray-700 mb-6">
                Python developers are in high demand! After mastering Python, you can pursue these exciting career paths:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {careerPaths.map((career, index) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <FaChartLine className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-lg">{career}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <p className="text-gray-700">
                  <strong>Average Salary:</strong> ₹3-8 LPA for freshers | ₹8-20 LPA for experienced
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Enroll */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Who Should Enroll?</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <FaCheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Complete Beginners</h3>
                  <p className="text-gray-600">No prior programming experience needed</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaCheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Students</h3>
                  <p className="text-gray-600">Enhance your academic knowledge</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaCheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Working Professionals</h3>
                  <p className="text-gray-600">Upskill and switch to tech roles</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaCheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Career Switchers</h3>
                  <p className="text-gray-600">Start your programming career</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-yellow-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Python Journey Today!</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of successful Python developers. Limited seats available!
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