import { Button } from "./ui/button";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-3 sticky top-0 z-[999]">
      <div className="flex w-full justify-between items-center container mx-auto">
        <img
          src="/assets/Alles Charis Logo 2.png"
          alt="logo"
          className="h-12"
        />
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <ul
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col md:flex md:flex-row justify-center items-center gap-5 capitalize absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent p-5 md:p-0 transition-all duration-500`}
        >
          <NavLink
            to="/"
            className="text-base text-gray-700 hover:text-blue-900 font-semibold aria-[current=page]:text-blue-800 aria-[current=page]:hover:text-gray-500 py-1.5 px-4 rounded-sm transition-all duration-500"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-base text-gray-700 hover:text-blue-900 font-semibold aria-[current=page]:text-blue-800 aria-[current=page]:hover:text-gray-500 py-1.5 px-4 rounded-sm transition-all duration-500"
          >
            about us
          </NavLink>
          <NavLink
            to="/services"
            className="text-base text-gray-700 hover:text-blue-900 font-semibold aria-[current=page]:text-blue-800 aria-[current=page]:hover:text-gray-500 py-1.5 px-4 rounded-sm transition-all duration-500"
          >
            Services
          </NavLink>
          <NavLink
            to="/stations"
            className="text-base text-gray-700 hover:text-blue-900 font-semibold aria-[current=page]:text-blue-800 aria-[current=page]:hover:text-gray-500 py-1.5 px-4 rounded-sm transition-all duration-500"
          >
            Stations
          </NavLink>
          <NavLink
            to="/team"
            className="text-base text-gray-700 hover:text-blue-900 font-semibold aria-[current=page]:text-blue-800 aria-[current=page]:hover:text-gray-500 py-1.5 px-4 rounded-sm transition-all duration-500"
          >
            Our Team
          </NavLink>
          <NavLink
            to="/media"
            className="text-base text-gray-700 hover:text-blue-900 font-semibold aria-[current=page]:text-blue-800 aria-[current=page]:hover:text-gray-500 py-1.5 px-4 rounded-sm transition-all duration-500"
          >
            Media
          </NavLink>
          <NavLink
            to="/careers"
            className="text-base text-gray-700 hover:text-blue-900 font-semibold aria-[current=page]:text-blue-800 aria-[current=page]:hover:text-gray-500 py-1.5 px-4 rounded-sm transition-all duration-500"
          >
            Careers
          </NavLink>
          <a href="/contact">
            <Button className="bg-blue-900 hover:bg-black text-white transition-all duration-500">
              Contact Us
            </Button>
          </a>
        </ul>
      </div>
    </nav>
  );
}
