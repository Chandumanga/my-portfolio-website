import React, { useState } from "react";
import { NAVIGATION_LINKS } from "../constants";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import logo from "../assets/image-1.png"; // Ensure your logo is imported correctly

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      // Adjust the offset dynamically based on window height
      const offset = window.innerWidth < 1024 ? -85 : -120; // Adjust the offset for different screen sizes (e.g., smaller screens get a smaller offset)
      
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed left-0 right-0 top-2 z-50">
      {/* Desktop Menu */}
      <div className="mx-auto hidden max-w-4xl items-center justify-center rounded-lg border border-stone-50/30 bg-black/20 py-4 backdrop-blur-lg lg:flex">
        <div className="flex items-center justify-between gap-8">
          <div>
            <a href="#">
              <img src={logo} width={200} height={200} alt="logo" className="rounded-full" />
            </a>
          </div>
          <div>
            <ul className="flex items-center gap-8 text-lg">
              {NAVIGATION_LINKS.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-white hover:text-yellow-400"
                    onClick={(e) => handleLinkClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="rounded-lg backdrop-blur-md lg:hidden">
        <div className="flex items-center justify-between">
          <div>
            <a href="#">
              <img src={logo} width={120} alt="logo" className="m-4" />
            </a>
          </div>
          <div className="flex items-center">
            <button
              className="focus:outline-none lg:hidden"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <FaTimes className="m-2 h-8 w-8 text-white" />
              ) : (
                <FaBars className="m-2 h-8 w-8 text-white" />
              )}
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <ul className="ml-4 mt-4 flex flex-col items-center gap-6 backdrop-blur-md">
            {NAVIGATION_LINKS.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-lg text-white hover:text-yellow-400"
                  onClick={(e) => handleLinkClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
