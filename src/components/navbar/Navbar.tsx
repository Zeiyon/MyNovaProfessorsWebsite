import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white flex justify-center shadow-lg">
      <div className="max-w-7xl flex flex-wrap justify-between items-center w-full p-4 md:p-0">
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="text-2xl font-bold text-gray-600">
            MyNovaProfessors
          </div>
          <button
            className="text-gray-600 hover:text-black md:hidden"
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>

        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } flex-col md:flex-row md:flex space-x-0 md:space-x-4 justify-center md:justify-start w-full md:w-auto`}
        >
          <Link
            to="overview"
            spy={true}
            smooth={true}
            duration={300}
            className="cursor-pointer text-gray-700 font-semibold hover:text-orange-500 transition-all duration-75 p-4 text-lg border-b-2 border-transparent hover:border-orange-500"
          >
            Overview
          </Link>
          <Link
            to="testimonials"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer text-gray-700 font-semibold hover:text-orange-500 transition-all duration-75 p-4 text-lg border-b-2 border-transparent hover:border-orange-500"
          >
            Testimonials
          </Link>
          <Link
            to="features"
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
            className="cursor-pointer text-gray-700 font-semibold hover:text-orange-500 transition-all duration-75 p-4 text-lg border-b-2 border-transparent hover:border-orange-500"
          >
            Features
          </Link>
          <Link
            to="faq"
            spy={true}
            smooth={true}
            duration={600}
            className="cursor-pointer text-gray-700 font-semibold hover:text-orange-500 transition-all duration-75 p-4 text-lg border-b-2 border-transparent hover:border-orange-500"
          >
            FAQ
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={600}
            className="cursor-pointer text-gray-700 font-semibold hover:text-orange-500 transition-all duration-75 p-4 text-lg border-b-2 border-transparent hover:border-orange-500"
          >
            Contact
          </Link>
        </div>

        <div className="hidden md:flex justify-end space-x-4 pr-4">
          <button className="bg-orange-600 text-white font-semibold px-5 py-2 text-[1rem] rounded-lg hover:bg-orange-700">
            Get Started
          </button>
          <a
            href="https://github.com"
            className="text-gray-600 hover:text-black"
          >
            <FontAwesomeIcon className="pr-2 pt-1" icon={faGithub} size="2xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
