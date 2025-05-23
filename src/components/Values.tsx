import {
  FaLightbulb,
  FaUserTie,
  FaShieldAlt,
  FaHandshake,
  FaBolt,
} from "react-icons/fa";
import { useEffect, useState } from "react";

const principles = [
  {
    title: "Innovation",
    description:
      "We embrace creativity and forward-thinking solutions, driving progress and excellence in the LPG sector.",
    Icon: FaLightbulb,
    hoverClass: "group-hover:text-yellow-400 group-hover:scale-110",
  },
  {
    title: "Respect",
    description:
      "We honor the diverse needs of our stakeholders and foster relationships built on dignity, empathy, and mutual understanding.",
    Icon: FaUserTie,
    hoverClass: "group-hover:text-blue-400 group-hover:-rotate-6",
  },
  {
    title: "Integrity",
    description:
      "We operate with honesty, transparency, and accountability, ensuring trust and fairness in all our interactions.",
    Icon: FaShieldAlt,
    hoverClass: "group-hover:text-green-500 group-hover:scale-105",
  },
  {
    title: "Dependability",
    description:
      "We are steadfast in delivering consistent and reliable services, earning the confidence of our customers and partners.",
    Icon: FaHandshake,
    hoverClass: "group-hover:text-purple-500 group-hover:scale-105",
  },
  {
    title: "Efficiency",
    description:
      "We optimize our operations to provide seamless and high-quality energy solutions, ensuring value at every stage of the LPG value chain.",
    Icon: FaBolt,
    hoverClass: "group-hover:text-red-500 group-hover:scale-110",
  },
];

export default function Values() {
  const [trigger, setTrigger] = useState(false);

  // Scroll trigger for animated I.R.I.D.E.
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTrigger(false); // reset first
          setTimeout(() => setTrigger(true), 100); // restart animation
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("values-title");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="values-section"
      className="bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-8 py-24 transition-colors duration-500"
    >
      <div className="max-w-5xl mx-auto">
        {/* Animated Title */}
        <h3
          id="values-title"
          className="text-4xl font-bold mb-12 text-center text-blue-900 dark:text-blue-100"
        >
          Core Principles{" "}
          <span className="inline-flex space-x-1 text-blue-600 dark:text-blue-400 font-mono">
            {["I", "R", "I", "D", "E"].map((letter, i) => (
              <span
                key={i}
                className={`opacity-0 ${trigger ? "animate-fade-in" : ""}`}
                style={{
                  animationDelay: `${i * 200}ms`,
                  animationFillMode: "forwards",
                }}
              >
                {letter}
              </span>
            ))}
          </span>
        </h3>

        {/* Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map(({ title, description, Icon, hoverClass }, index) => (
            <div
              key={index}
              className={`group bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 opacity-0 ${
                trigger ? "animate-fade-in-up" : ""
              }`}
              style={{
                animationDelay: `${index * 200}ms`,
                animationFillMode: "forwards",
              }}
            >
              <div className="flex items-center mb-4">
                <Icon
                  className={`text-3xl text-blue-700 dark:text-blue-300 transition-transform duration-300 ${hoverClass}`}
                />
                <h4 className="ml-3 text-2xl font-semibold text-blue-800 dark:text-blue-200">
                  {title}
                </h4>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
