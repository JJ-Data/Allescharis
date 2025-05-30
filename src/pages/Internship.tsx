import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

export default function InternshipPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <header className="relative w-full h-[65dvh] shadow-lg">
        <img
          src="/assets/internship-hero.jpg"
          alt="Internship background"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute bg-[#00005B]/70 w-full h-full flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Internship at Alles Charis
          </h1>
          <p className="text-lg md:text-xl max-w-3xl">
            Equipping young talents with skills, discipline, and purpose in the
            LPG sector.
          </p>
        </div>
      </header>

      {/* Process Section */}
      <section className="py-20 px-6 md:px-16 bg-gray-50 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-blue-900">
          Our Internship Process
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Application Form",
            "Aptitude Test",
            "Screening",
            "Interview",
            "Final Selection",
            "Onboarding",
          ].map((step, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-blue-700 text-3xl font-bold mb-2">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold">{step}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-20 px-6 md:px-16 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-blue-900">
          Departments We Train In
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            "Accounting",
            "Marketing",
            "IT",
            "Logistics",
            "Administration",
            "Business Development",
            "Legal",
            "HR",
            "Operations",
          ].map((dept, index) => (
            <motion.div
              key={index}
              className="bg-blue-50 text-blue-900 p-4 rounded-xl font-semibold shadow hover:bg-blue-100 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {dept}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 md:px-16 bg-gray-50 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-blue-900">
          What Our Interns Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Asanga E.",
              dept: "Operations",
              text: "My internship at Alles Charis transformed my perspective on professional work. I learned discipline, industry tools, and gained confidence.",
            },
            {
              name: "Esther O.",
              dept: "Business Development",
              text: "I was part of the Business Development team and it opened my eyes to market strategy and client engagement. It was a fulfilling experience.",
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow p-6 relative"
              whileHover={{ scale: 1.02 }}
            >
              <FaQuoteLeft className="text-blue-500 text-3xl mb-4" />
              <p className="italic text-gray-700 mb-4">"{testimonial.text}"</p>
              <p className="font-bold text-blue-800">{testimonial.name}</p>
              <p className="text-sm text-gray-500">
                {testimonial.dept} Department
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-16 bg-white px-4 sm:px-8 lg:px-20">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
          Internship Moments
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {[
            "/assets/interns1.jpg",
            "/assets/interns2.jpg",
            "/assets/interns3.jpg",
            "/assets/interns4.jpg",
          ].map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Internship Moment ${idx + 1}`}
              className="w-full h-48 object-cover rounded-lg shadow-md hover:scale-105 transition duration-300"
            />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-blue-900 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Join Our Internship Program?
        </h2>
        <p className="mb-8 text-lg">
          Build skills. Gain experience. Make impact.
        </p>
        <a href="/contact">
          <Button className="bg-white text-blue-900 font-semibold px-6 py-3 hover:bg-gray-100 transition">
            Get Involved
          </Button>
        </a>
      </section>
    </div>
  );
}
