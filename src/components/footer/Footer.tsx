import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-4 mt-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-wrap justify-between items-center space-y-4 sm:space-y-0">
          {/* Logo and Copyright */}
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/150" // Replace with your logo
              alt="Company Logo"
              className="h-8 mr-3"
            />
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} MyNovaProfessors. All rights
              reserved.
            </p>
          </div>
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center md:justify-start space-x-6">
            <Link
              to="overview"
              spy={true}
              smooth={true}
              duration={600}
              className="cursor-pointer text-sm text-gray-600 hover:text-orange-500"
            >
              Home
            </Link>
            <Link
              to="overview"
              spy={true}
              smooth={true}
              duration={600}
              className="cursor-pointer text-sm text-gray-600 hover:text-orange-500"
            >
              About
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={600}
              className="cursor-pointer text-sm text-gray-600 hover:text-orange-500"
            >
              Contact
            </Link>
          </nav>
          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start">
            <a
              href="mailto:email@zeiyon.com?subject=Interested in your work"
              target="_blank"
              className="text-gray-400 hover:text-orange-500"
            >
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
            </a>
            <a
              href="https://github.com/Zeiyon/"
              target="_blank"
              className="text-gray-400 hover:text-orange-500 ml-3"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
            <a
              href="https://www.linkedin.com/in/talhab"
              target="_blank"
              className="text-gray-400 hover:text-orange-500 ml-3"
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
