import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
  const socialIconVariants = {
    hover: {
      y: -5,
      scale: 1.2,
      transition: { duration: 0.3 },
    },
  };

  const linkVariants = {
    hover: {
      x: 5,
      color: "#60a5fa", // blue-400
      transition: { duration: 0.2 },
    },
  };

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <motion.footer
      className="bg-gradient-to-b from-blue-950 to-blue-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      <div className="container p-5 flex flex-col md:flex-row justify-between">
        <motion.div
          className="flex flex-row md:flex-col justify-between gap-3"
          variants={itemVariants}
        >
          <Link to="/" className="text-white text-xl">
            <motion.img
              src="/assets/Alles Charis Logo 2.png"
              alt="logo"
              className="h-24 shadow-lg shadow-blue-900/50 bg-white rounded-2xl"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(30, 64, 175, 0.7)",
              }}
              transition={{ duration: 0.3 }}
            />
          </Link>
          <div className="flex space-x-4">
            <motion.a
              href="https://facebook.com/allescharis"
              variants={socialIconVariants}
              whileHover="hover"
              className="blue-glow rounded-full p-1.5 bg-blue-800"
            >
              <FaFacebook className="text-white" size={22} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/company/alles-charis/posts/?feedView=all"
              variants={socialIconVariants}
              whileHover="hover"
              className="blue-glow rounded-full p-1.5 bg-blue-800"
            >
              <FaLinkedin className="text-white" size={22} />
            </motion.a>
            <motion.a
              href="https://youtu.be/6TUoe7RjgaQ?si=FlDiIo0Bz_o7tjqw"
              variants={socialIconVariants}
              whileHover="hover"
              className="blue-glow rounded-full p-1.5 bg-blue-800"
            >
              <FaYoutube className="text-white" size={22} />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/allescharis_/?hl=en"
              variants={socialIconVariants}
              whileHover="hover"
              className="blue-glow rounded-full p-1.5 bg-blue-800"
            >
              <AiFillInstagram className="text-white" size={22} />
            </motion.a>
          </div>
        </motion.div>
        <div className="grid grid-cols-3 sm:grid-cols-3 gap-6 md:gap-8 lg:gap-16 text-white text-sm sm:text-base mt-8 md:mt-0">
          <motion.div className="flex flex-col gap-5" variants={itemVariants}>
            <motion.a
              href="/about"
              className="hover:text-blue-300 transition-colors"
              variants={linkVariants}
              whileHover="hover"
            >
              About Us
            </motion.a>
            <motion.a
              href="/services"
              className="hover:text-blue-300 transition-colors"
              variants={linkVariants}
              whileHover="hover"
            >
              What We Do
            </motion.a>
            <motion.div whileHover="hover" variants={linkVariants}>
              <Link
                to="/team"
                className="hover:text-blue-300 transition-colors"
              >
                Our Team
              </Link>
            </motion.div>
            <motion.a
              href="/about"
              className="hover:text-blue-300 transition-colors"
              variants={linkVariants}
              whileHover="hover"
            >
              Our Values
            </motion.a>
          </motion.div>
          <motion.div className="flex flex-col gap-5" variants={itemVariants}>
            <motion.a
              href="/services"
              className="hover:text-blue-300 transition-colors"
              variants={linkVariants}
              whileHover="hover"
            >
              Services
            </motion.a>
            <motion.a
              href="/blog"
              className="hover:text-blue-300 transition-colors"
              variants={linkVariants}
              whileHover="hover"
            >
              Blogs
            </motion.a>
            <motion.div whileHover="hover" variants={linkVariants}>
              <Link
                to="/media"
                className="hover:text-blue-300 transition-colors"
              >
                Gallery
              </Link>
            </motion.div>
            <motion.a
              href="/csr"
              className="hover:text-blue-300 transition-colors"
              variants={linkVariants}
              whileHover="hover"
            >
              CSR
            </motion.a>
          </motion.div>
          <motion.div className="flex flex-col gap-5" variants={itemVariants}>
            <motion.a
              href="/contact"
              className="hover:text-blue-300 transition-colors"
              variants={linkVariants}
              whileHover="hover"
            >
              Contact
            </motion.a>
            <motion.a
              href="/internship"
              className="hover:text-blue-300 transition-colors"
              variants={linkVariants}
              whileHover="hover"
            >
              Internship
            </motion.a>
            <motion.div whileHover="hover" variants={linkVariants}>
              <Link
                to="/careers"
                className="hover:text-blue-300 transition-colors"
              >
                Careers
              </Link>
            </motion.div>
            <motion.a
              href="/stations"
              className="hover:text-blue-300 transition-colors"
              variants={linkVariants}
              whileHover="hover"
            >
              Station Locations
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Add animated gradient border at the bottom of the footer */}
      <div className="relative h-1 w-full overflow-hidden bg-blue-950">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "linear",
          }}
        />
      </div>

      {/* Copyright info */}
      <div className="text-white text-center text-sm py-4 bg-blue-950">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          © {new Date().getFullYear()} Alles Charis. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
}
