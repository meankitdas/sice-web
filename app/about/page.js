import Image from "next/image";
import {
  FaGraduationCap,
  FaBook,
  FaLaptop,
  FaUsers,
  FaCertificate,
  FaChalkboardTeacher,
} from "react-icons/fa";

export default function AboutPage() {
  const facilities = [
    {
      icon: <FaLaptop className="text-4xl" />,
      title: "Modern Computer Lab",
      description:
        "State-of-the-art computer lab with 24x7 internet facility for hands-on learning.",
    },
    {
      icon: <FaBook className="text-4xl" />,
      title: "Free Study Materials",
      description:
        "All study materials provided free of cost to students with comprehensive library access.",
    },
    {
      icon: <FaChalkboardTeacher className="text-4xl" />,
      title: "Qualified Faculty",
      description:
        "Experienced and qualified instructors dedicated to student success.",
    },
    {
      icon: <FaCertificate className="text-4xl" />,
      title: "Certification Programs",
      description:
        "Industry-recognized certifications in various computer courses.",
    },
    {
      icon: <FaUsers className="text-4xl" />,
      title: "Student Support",
      description:
        "Personality development and spoken English classes included.",
    },
    {
      icon: <FaGraduationCap className="text-4xl" />,
      title: "Career Guidance",
      description:
        "Special training for interviews and career placement assistance.",
    },
  ];

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About SICE</h1>
          <p className="text-xl">Shibam Institute of Computer Education</p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/banner.jpg"
              alt="SICE Computer Institute"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
              About SICE (Facilities)
            </h2>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Shibam Institute of Computer Education (SICE), located in
                Rairangpur at Medical Chowk, is not a new organization. It is an
                institute that has never compromised with its quality of
                delivery since its founding in 2011. From that date, it has been
                growing continuously without looking back.
              </p>

              <p>
                Shibam Institute of Computer Education (SICE) provides you with
                MCA, A Level, O Level, PGDCA, and DCA Courses. Apart from that,
                it also provides package courses like C, C++, VB.NET, ADO.NET,
                C#, JAVA, and Oracle. SICE believes in the overall development
                of its students. That is the reason why it provides weekly
                classes for personality development and spoken English. Special
                training classes are now provided to help students succeed in
                interviews.
              </p>

              <p>
                Many of our successful candidates have secured good jobs and
                established their careers in the world of software in places
                like Hyderabad, Delhi, Bangalore, and Bhubaneswar. These
                achievements are possible because of the level of quality that
                we maintain.
              </p>

              <p>
                We provide all study materials free of cost to our students.
                Besides that, we have a well-stocked library where you can
                explore and discover new ideas. Qualified faculty and professors
                conduct classes here. The institute has a modern computer lab
                with 24x7 internet facility. We have a full strength of more
                than 150 students. In short, we can say that it is a
                student-oriented organization where all preferences are given to
                student comfort and success.
              </p>

              <p>
                With the commencement of the School of Distance Education &
                Learning, SICE has made education accessible to those aspirants
                who, for some reason, could not be part of the regular stream of
                education. Shibam Institute of Computer Education (SICE)
                measures its success not in terms of profit but in terms of the
                output it delivers to society.
              </p>

              <p className="font-semibold text-blue-600">
                "Student success is our success" is the belief of Shibam
                Institute of Computer Education (SICE).
              </p>

              <p>
                In every semester, our students perform better and better in
                their examinations. The number of students receiving
                scholarships is increasing day by day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
            Our Facilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-blue-600 mb-4">{facility.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {facility.title}
                </h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MD Message Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              MD's Message
            </h2>
            <div className="text-lg leading-relaxed space-y-4">
              <p>
                Welcome to Shibam Institute of Computer Education (SICE) and its
                Computer Education Programme. It is our endeavor to educate
                students about a world of endless opportunities that await them
                through a flexible and skill-oriented mode of education.
              </p>
              <p>
                We provide a system through which a student can slowly gather
                information and knowledge, take a break to work, and rejoin us
                again without losing any credits gained with us.
              </p>
              <p>
                The Shibam Institute of Computer Education (SICE) has set a
                target of improving the access, reach, and quality of technical
                education in the state of Odisha. To leverage the growing need
                for IT-trained professionals in the state, SICE is a pioneer in
                the field of Educational Training Business through its 200
                centers all over India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
              Come Visit Us
            </h3>
            <p className="text-lg text-gray-700 mb-8">
              To conclude, we invite you to visit Shibam Institute of Computer
              Education (SICE) to know us better. Please come to our campus for
              more details and give us a chance to serve you on your educational
              journey.
            </p>
            <a
              href="#contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-colors shadow-lg"
            >
              Contact Us Today
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
