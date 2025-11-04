'use client';

import Link from 'next/link';
import { FaCheckCircle, FaClock, FaRupeeSign, FaGraduationCap, FaAward, FaBook, FaCode, FaDatabase, FaNetworkWired } from 'react-icons/fa';

export default function OLevelCoursePage() {
  const courseModules = [
    {
      name: 'IT Tools and Business Systems',
      icon: <FaNetworkWired className="w-6 h-6" />,
      topics: ['Operating Systems', 'MS Office', 'Internet & Email', 'E-Commerce']
    },
    {
      name: 'Internet Technology and Web Design',
      icon: <FaCode className="w-6 h-6" />,
      topics: ['HTML', 'CSS', 'JavaScript', 'Web Development Basics']
    },
    {
      name: 'Programming and Problem Solving through C',
      icon: <FaCode className="w-6 h-6" />,
      topics: ['C Programming', 'Data Structures', 'Algorithms', 'Problem Solving']
    },
    {
      name: 'Introduction to Multimedia',
      icon: <FaBook className="w-6 h-6" />,
      topics: ['Graphics', 'Animation', 'Audio-Video Editing', 'Multimedia Tools']
    }
  ];

  const benefits = [
    'Government Recognized Diploma',
    'Scholarship Available',
    'Equivalent to Foundation in Computer Science',
    'Job Opportunities in IT Sector',
    'Gateway to Higher IT Courses',
    '100% Placement Assistance',
    'Practical Project Experience',
    'Industry-Ready Skills'
  ];

  const careerOptions = [
    'Junior Programmer',
    'Web Developer',
    'Computer Operator',
    'Data Entry Operator',
    'IT Support Technician',
    'Office Administrator'
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">O Level Course</h1>
            <p className="text-xl md:text-2xl mb-4">Diploma in Information Technology</p>
            <p className="text-lg opacity-90">
              Foundation Level IT Certification - Equivalent to PGDCA
            </p>
          </div>
        </div>
      </div>

      {/* Quick Info Cards */}
      <div className="container mx-auto px-4 -mt-10">
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <FaClock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-800">1 Year</div>
            <div className="text-gray-600 text-sm">Duration</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <FaBook className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-800">4 Modules</div>
            <div className="text-gray-600 text-sm">Subjects</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <FaGraduationCap className="w-8 h-8 text-purple-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-800">Intermediate</div>
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">About O Level Course</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-lg text-gray-700 mb-4">
              The O Level is a foundation level course in Computer Applications certified by NIELIT. This course is equivalent to a foundation level course in Computer Science and Information Technology. The O Level course is designed to provide a comprehensive understanding of computers and their applications.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              The course covers fundamental concepts of computer science, programming, web technologies, and multimedia. O Level certification is widely recognized by government departments and private sector organizations across India.
            </p>
            <p className="text-lg text-gray-700">
              At SICE, we provide comprehensive training with experienced faculty, modern computer labs, and real-world project experience to ensure you're industry-ready upon completion.
            </p>
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Course Curriculum</h2>
            <div className="grid gap-6">
              {courseModules.map((module, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
                  <div className="flex items-start mb-4">
                    <div className="text-blue-600 mr-4 mt-1">
                      {module.icon}
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Module {index + 1}</div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3">{module.name}</h3>
                      <div className="grid md:grid-cols-2 gap-2">
                        {module.topics.map((topic, topicIndex) => (
                          <div key={topicIndex} className="flex items-center text-gray-700">
                            <FaCheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                            <span>{topic}</span>
                          </div>
                        ))}
                      </div>
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

      {/* Career Opportunities */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Career Opportunities</h2>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <p className="text-lg text-gray-700 mb-6">
                After completing O Level, you'll be qualified for various entry-level IT positions:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {careerOptions.map((career, index) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <FaCheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-lg">{career}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Eligibility Criteria</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="flex items-start">
                <FaCheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <span>The student should have passed Class 10 or equivalent from a recognized Board.</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <span>Basic computer knowledge is recommended but not mandatory</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <span>Suitable for students and working professionals</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Examination Pattern */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Examination Pattern</h2>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Theory Examination</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 4 Papers (One for each module)</li>
                    <li>• Duration: 2 Hours per paper</li>
                    <li>• Online/Offline Mode</li>
                    <li>• Pass Marks: 50% in each paper</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Practical Examination</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Hands-on Programming Tasks</li>
                    <li>• Web Development Project</li>
                    <li>• Multimedia Project</li>
                    <li>• Evaluated by NIELIT Examiners</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <p className="text-gray-700">
                  <strong>Note:</strong> All four modules must be cleared within 3 years from the date of registration. You can appear for exams as per your convenience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-red-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your IT Career Today!</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get NIELIT O Level certification and unlock countless opportunities in the IT industry
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