'use client';

import Link from 'next/link';
import { FaCertificate, FaCode, FaLaptopCode, FaChartLine, FaPython, FaJava, FaBrain, FaCalculator, FaDraftingCompass, FaGraduationCap, FaBook } from 'react-icons/fa';
import { SiScratch } from 'react-icons/si';

export default function CoursesPage() {
  const nielitCourses = [
    {
      name: 'CCC',
      fullName: 'Course on Computer Concepts',
      duration: '80 Hours',
      description: 'Basic computer course designed to impart basic level IT literacy program for the common man.',
      icon: <FaLaptopCode className="w-12 h-12" />,
      link: '/courses/ccc',
      category: 'NIELIT',
      level: 'Beginner',
      scholarship: true
    },
    {
      name: 'O Level',
      fullName: 'Diploma in Information Technology',
      duration: '1 Year',
      description: 'Foundation level course in Computer Applications equivalent to foundation level in computer science.',
      icon: <FaCertificate className="w-12 h-12" />,
      link: '/courses/o-level',
      category: 'NIELIT',
      level: 'Intermediate',
      scholarship: true
    },
    {
      name: 'BCC',
      fullName: 'Basic Computer Course',
      duration: '60 Hours',
      description: 'Comprehensive introduction to computers and basic operations for beginners.',
      icon: <FaLaptopCode className="w-12 h-12" />,
      link: '/courses/bcc',
      category: 'NIELIT',
      level: 'Beginner',
      scholarship: true
    }
  ];

  const okclCourses = [
    {
      name: 'OS-CIT',
      fullName: 'Odisha State Certificate in Information Technology',
      duration: '3 Months',
      description: 'Government recognized IT course for basic computer knowledge.',
      icon: <FaCertificate className="w-12 h-12" />,
      link: '/courses/os-cit',
      category: 'OKCL',
      level: 'Beginner'
    },
    {
      name: "OS-CIT 'A'",
      fullName: 'Advanced Certificate in Information Technology',
      duration: '6 Months',
      description: 'Advanced level IT course covering comprehensive computer applications.',
      icon: <FaCertificate className="w-12 h-12" />,
      link: '/courses/os-cit-a',
      category: 'OKCL',
      level: 'Intermediate'
    },
    {
      name: "OS-CIT 'A+'",
      fullName: 'Professional Certificate in Information Technology',
      duration: '9 Months',
      description: 'Professional level IT course with advanced programming and applications.',
      icon: <FaCertificate className="w-12 h-12" />,
      link: '/courses/os-cit-a-plus',
      category: 'OKCL',
      level: 'Advanced'
    }
  ];

  const diplomaCourses = [
    {
      name: 'PGDCA',
      fullName: 'Post Graduate Diploma in Computer Applications',
      duration: '1 Year',
      description: 'Advanced diploma program covering programming, databases, and software development.',
      icon: <FaGraduationCap className="w-12 h-12" />,
      link: '/courses/pgdca',
      category: 'Diploma',
      level: 'Post Graduate'
    }
  ];

  const instantCourses = [
    {
      name: 'Python Programming',
      duration: '2-3 Months',
      description: 'Learn Python programming from basics to advanced concepts.',
      icon: <FaPython className="w-12 h-12" />,
      link: '/courses/python',
      category: 'Programming'
    },
    {
      name: 'Java Programming',
      duration: '3 Months',
      description: 'Master Java programming and object-oriented concepts.',
      icon: <FaJava className="w-12 h-12" />,
      link: '/courses/java',
      category: 'Programming'
    },
    {
      name: 'Spoken English',
      duration: '3 Months',
      description: 'Improve your English communication and speaking skills.',
      icon: <FaBook className="w-12 h-12" />,
      link: '/courses/spoken-english',
      category: 'Language'
    },
    {
      name: 'TallyPrime',
      duration: '2 Months',
      description: 'Complete accounting software training with GST compliance.',
      icon: <FaChartLine className="w-12 h-12" />,
      link: '/courses/tally',
      category: 'Accounting'
    },
    {
      name: 'AutoCAD',
      duration: '2 Months',
      description: 'Professional 2D and 3D drafting and design software training.',
      icon: <FaDraftingCompass className="w-12 h-12" />,
      link: '/courses/autocad',
      category: 'Design'
    },
    {
      name: 'Artificial Intelligence',
      duration: '3 Months',
      description: 'Introduction to AI, machine learning basics, and practical applications.',
      icon: <FaBrain className="w-12 h-12" />,
      link: '/courses/ai',
      category: 'Programming'
    },
    {
      name: 'Scratch Programming',
      duration: '1 Month',
      description: 'Visual programming for kids and beginners. Fun way to learn coding.',
      icon: <SiScratch className="w-12 h-12" />,
      link: '/courses/scratch',
      category: 'Kids'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-red-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Courses</h1>
            <p className="text-xl md:text-2xl mb-4">Empowering Your Future with Quality Education</p>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              From beginner to advanced, we offer comprehensive computer courses certified by NIELIT and OKCL
            </p>
          </div>
        </div>
      </div>

      {/* 100% Placement Badge */}
      <div className="container mx-auto px-4 -mt-8">
        <div className="bg-yellow-400 text-black font-bold py-3 px-6 rounded-full inline-block shadow-lg transform hover:scale-105 transition-transform">
          🎯 100% Placement Assistance
        </div>
      </div>

      {/* NIELIT Courses Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">NIELIT Courses</h2>
          <p className="text-lg text-gray-600">Scholarship Available - National Institute of Electronics & Information Technology</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {nielitCourses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </section>

      {/* OKCL Courses Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">OKCL Courses</h2>
            <p className="text-lg text-gray-600">Odisha Knowledge Corporation Limited - Government Certified</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {okclCourses.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Diploma Courses Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Diploma Program</h2>
          <p className="text-lg text-gray-600">Advanced Professional Diploma</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diplomaCourses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </section>

      {/* Instant Courses Section */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Instant Courses</h2>
            <p className="text-lg text-gray-600">Specialized skill-based training programs</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instantCourses.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-red-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8">Get up to ₹5,000 discount for the first 30 students!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/enroll"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Enroll Now
            </Link>
            <Link 
              href="/about#contact_us"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function CourseCard({ course }) {
  return (
    <Link href={course.link}>
      <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 h-full border border-gray-100 hover:scale-105 cursor-pointer">
        <div className="flex flex-col h-full">
          {/* Icon */}
          <div className="text-blue-600 mb-4">
            {course.icon}
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            {course.category && (
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                {course.category}
              </span>
            )}
            {course.level && (
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">
                {course.level}
              </span>
            )}
            {course.scholarship && (
              <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">
                💰 Scholarship
              </span>
            )}
          </div>

          {/* Course Name */}
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{course.name}</h3>
          {course.fullName && (
            <p className="text-sm text-gray-600 mb-3">{course.fullName}</p>
          )}

          {/* Duration */}
          <div className="flex items-center text-gray-600 mb-4">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-semibold">{course.duration}</span>
          </div>

          {/* Description */}
          <p className="text-gray-700 mb-6 flex-grow">{course.description}</p>

          {/* Learn More Button */}
          <div className="mt-auto">
            <div className="bg-gradient-to-r from-blue-600 to-red-600 text-white text-center py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-red-700 transition-all">
              Learn More →
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}