'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [instantOpen, setInstantOpen] = useState(false);

  const nielitCourses = [
    { name: 'CCC', href: '/courses/ccc' },
    { name: 'O Level', href: '/courses/o-level' },
    { name: 'BCC', href: '/courses/bcc' },
  ];

  const okclCourses = [
    { name: 'OS-CIT', href: '/courses/os-cit' },
    { name: "OS-CIT 'A'", href: '/courses/os-cit-a' },
    { name: "OS-CIT 'A+'", href: '/courses/os-cit-a-plus' },
  ];

  const instantCourses = [
    { name: 'Python', href: '/courses/python' },
    { name: 'Java', href: '/courses/java' },
    { name: 'Spoken English', href: '/courses/spoken-english' },
    { name: 'TallyPrime', href: '/courses/tally' },
    { name: 'AutoCAD', href: '/courses/autocad' },
    { name: 'AI', href: '/courses/ai' },
    { name: 'Scratch', href: '/courses/scratch' },
  ];

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-white">
              <h1 className="text-2xl md:text-3xl font-bold">SICE COMPUTER INSTITUTE</h1>
              <p className="text-sm md:text-base opacity-90">Rairangpur</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link href="/" className="text-white hover:text-blue-200 transition-colors font-medium">
              Home
            </Link>
            
            <div className="relative group">
              <button className="text-white hover:text-blue-200 transition-colors font-medium flex items-center">
                Courses
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link href="/courses" className="block px-4 py-3 text-blue-600 font-semibold hover:bg-blue-50 transition-colors rounded-t-lg">
                    View All Courses
                  </Link>
                  <div className="border-t border-gray-200 my-2"></div>
                  
                  <div className="px-4 py-2">
                    <div className="text-xs font-semibold text-gray-500 uppercase mb-2">NIELIT Courses</div>
                    {nielitCourses.map((course) => (
                      <Link 
                        key={course.name}
                        href={course.href}
                        className="block px-2 py-2 text-gray-800 hover:bg-blue-50 rounded transition-colors"
                      >
                        {course.name}
                      </Link>
                    ))}
                  </div>

                  <div className="border-t border-gray-200 my-2"></div>
                  
                  <div className="px-4 py-2">
                    <div className="text-xs font-semibold text-gray-500 uppercase mb-2">OKCL Courses</div>
                    {okclCourses.map((course) => (
                      <Link 
                        key={course.name}
                        href={course.href}
                        className="block px-2 py-2 text-gray-800 hover:bg-blue-50 rounded transition-colors"
                      >
                        {course.name}
                      </Link>
                    ))}
                  </div>

                  <div className="border-t border-gray-200 my-2"></div>
                  
                  <div className="px-4 py-2">
                    <div className="text-xs font-semibold text-gray-500 uppercase mb-2">Diploma</div>
                    <Link 
                      href="/courses/pgdca"
                      className="block px-2 py-2 text-gray-800 hover:bg-blue-50 rounded transition-colors"
                    >
                      PGDCA
                    </Link>
                  </div>

                  <div className="relative group/sub">
                    <div className="border-t border-gray-200 my-2"></div>
                    <button className="w-full text-left px-4 py-2 text-gray-800 hover:bg-blue-50 transition-colors flex items-center justify-between">
                      <span className="text-xs font-semibold text-gray-500 uppercase">Instant Courses</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    <div className="absolute left-full top-0 ml-1 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200">
                      <div className="py-2">
                        {instantCourses.map((course) => (
                          <Link 
                            key={course.name}
                            href={course.href}
                            className="block px-4 py-2 text-gray-800 hover:bg-blue-50 transition-colors"
                          >
                            {course.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/gallery" className="text-white hover:text-blue-200 transition-colors font-medium">
              Gallery
            </Link>
            
            <Link href="/about" className="text-white hover:text-blue-200 transition-colors font-medium">
              About Us
            </Link>

            <Link href="/enroll" className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-full font-semibold transition-colors">
              Enroll Now
            </Link>

            <Link href="#contact" className="text-white hover:text-blue-200 transition-colors font-medium">
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden pb-4 space-y-2">
            <Link 
              href="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-white hover:text-blue-200 py-2 transition-colors"
            >
              Home
            </Link>
            
            <div>
              <button 
                onClick={() => setCoursesOpen(!coursesOpen)}
                className="w-full text-left text-white hover:text-blue-200 py-2 transition-colors flex items-center justify-between"
              >
                Courses
                <svg className={`w-4 h-4 transition-transform ${coursesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {coursesOpen && (
                <div className="pl-4 space-y-2 mt-2">
                  <Link 
                    href="/courses"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-white hover:text-blue-200 py-1 transition-colors font-semibold"
                  >
                    View All Courses
                  </Link>
                  
                  <div className="text-xs text-gray-300 uppercase pt-2">NIELIT</div>
                  {nielitCourses.map((course) => (
                    <Link 
                      key={course.name}
                      href={course.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-white hover:text-blue-200 py-1 transition-colors"
                    >
                      {course.name}
                    </Link>
                  ))}
                  
                  <div className="text-xs text-gray-300 uppercase pt-2">OKCL</div>
                  {okclCourses.map((course) => (
                    <Link 
                      key={course.name}
                      href={course.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-white hover:text-blue-200 py-1 transition-colors"
                    >
                      {course.name}
                    </Link>
                  ))}
                  
                  <div className="text-xs text-gray-300 uppercase pt-2">Diploma</div>
                  <Link 
                    href="/courses/pgdca"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-white hover:text-blue-200 py-1 transition-colors"
                  >
                    PGDCA
                  </Link>

                  <div>
                    <button 
                      onClick={() => setInstantOpen(!instantOpen)}
                      className="w-full text-left text-white hover:text-blue-200 py-1 transition-colors flex items-center justify-between pt-2"
                    >
                      <span className="text-xs text-gray-300 uppercase">Instant Courses</span>
                      <svg className={`w-4 h-4 transition-transform ${instantOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {instantOpen && (
                      <div className="pl-4 space-y-1 mt-2">
                        {instantCourses.map((course) => (
                          <Link 
                            key={course.name}
                            href={course.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-white hover:text-blue-200 py-1 transition-colors"
                          >
                            {course.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-white hover:text-blue-200 py-2 transition-colors"
            >
              Gallery
            </Link>
            
            <Link 
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-white hover:text-blue-200 py-2 transition-colors"
            >
              About Us
            </Link>

            <Link 
              href="/enroll"
              onClick={() => setMobileMenuOpen(false)}
              className="block bg-white text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-full font-semibold text-center transition-colors"
            >
              Enroll Now
            </Link>

            <Link 
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-white hover:text-blue-200 py-2 transition-colors"
            >
              Contact Us
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}