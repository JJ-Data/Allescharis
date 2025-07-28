import { Button } from "./ui/button";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Stations", path: "/stations" },
  { name: "Our Team", path: "/team" },
];

const opportunitiesDropdown = [
  { name: "CSR", path: "/csr" },
  { name: "Careers", path: "/careers" },
  { name: "Internship", path: "/internship" },
];

const mediaDropdown = [
  { name: "Blogs", path: "/blogs" },
  { name: "Gallery", path: "/media" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [opportunitiesOpen, setOpportunitiesOpen] = useState(false);
  const [mediaOpen, setMediaOpen] = useState(false);
  let dropdownTimeout: NodeJS.Timeout;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      className={`p-3 sticky top-0 z-[999] transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-md backdrop-blur-sm" : "bg-white"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex w-full justify-between items-center container mx-auto">
        <motion.img
          src="/assets/Alles Charis Logo 2.png"
          alt="logo"
          className="h-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        />
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-blue-900">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col md:flex md:flex-row justify-center items-center gap-5 capitalize absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent p-5 md:p-0 transition-all duration-500`}
        >
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <NavLink
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="text-base text-gray-700 hover:text-blue-900 font-semibold aria-[current=page]:text-blue-800 aria-[current=page]:hover:text-gray-500 py-1.5 px-4 rounded-sm transition-all duration-500"
              >
                {item.name}
              </NavLink>
            </motion.div>
          ))}

          {/* Media Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => {
              clearTimeout(dropdownTimeout);
              setMediaOpen(true);
            }}
            onMouseLeave={() => {
              dropdownTimeout = setTimeout(() => setMediaOpen(false), 200);
            }}
          >
            <button className="text-base text-gray-700 hover:text-blue-900 font-semibold py-1.5 px-4 rounded-sm transition-all duration-500">
              Media
            </button>
            {mediaOpen && (
              <div className="absolute top-full left-0 bg-white shadow-lg mt-2 rounded-md w-48 z-50">
                {mediaDropdown.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => {
                      setIsOpen(false);
                      setMediaOpen(false);
                    }}
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-900 transition duration-300"
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          {/* Opportunities Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => {
              clearTimeout(dropdownTimeout);
              setOpportunitiesOpen(true);
            }}
            onMouseLeave={() => {
              dropdownTimeout = setTimeout(
                () => setOpportunitiesOpen(false),
                200
              );
            }}
          >
            <button className="text-base text-gray-700 hover:text-blue-900 font-semibold py-1.5 px-4 rounded-sm transition-all duration-500">
              Opportunities
            </button>
            {opportunitiesOpen && (
              <div className="absolute top-full left-0 bg-white shadow-lg mt-2 rounded-md w-48 z-50">
                {opportunitiesDropdown.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => {
                      setIsOpen(false);
                      setOpportunitiesOpen(false);
                    }}
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-900 transition duration-300"
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.7 }}
          >
            <a href="/contact">
              <Button className="bg-blue-900 hover:bg-black text-white transition-all duration-500 blue-glow">
                Contact Us
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}
