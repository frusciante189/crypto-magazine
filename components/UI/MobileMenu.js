import { XIcon } from "@heroicons/react/outline";
import React, { useRef, useEffect } from "react";
import { FaFacebook, FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa";
import useWindowSize from "../../hooks/useWindowSize";
import DarkMode from "./DarkMode";

const MobileMenu = ({ isOpen, setIsOpen }) => {
  const ref = useRef(null);
  const size = useWindowSize();

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (size.width < 1024) {
        if (!ref.current.contains(e.target)) {
          if (!isOpen) return;
          setIsOpen(false);
        }
      }
    };
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [ref, isOpen]);

  return (
    <div
      ref={ref}
      className={`fixed top-0 right-0 sm:w-80 w-full h-full bg-white dark:bg-darkBg z-50 
  transition-all duration-500 ease-in-out transform font-mono
  ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
  `}
    >
      <div className="pt-10 pb-5 px-5 h-full flex flex-col">
        <div className="mt-3">
          <h1 className="lg:text-4xl sm:text-3xl text-2xl text-center font-medium dark:text-darkTitle text-lightTitle">
            Fruschain
          </h1>
          <nav className="flex flex-col items-start mt-10">
            <span className="navLink text-base">Backchannel</span>
            <span className="navLink text-base">Business</span>
            <span className="navLink text-base">Culture</span>
            <span className="navLink text-base">Gear</span>
            <span className="navLink text-base">Ideas</span>
            <span className="navLink text-base">Science</span>
          </nav>
        </div>
        <div className="mt-auto">
          <div className="text-center">
            <DarkMode />
          </div>
          <div className="flex space-x-4 items-center justify-center dark:text-darkText text-lightText mt-3">
            <FaTwitter size={24} />
            <FaInstagram size={24} />
            <FaTelegram size={24} />
            <FaFacebook size={24} />
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 focus:outline-none">
        <button
          className="dark:text-darkTitle text-lightTitle p-3 hover:rotate-90 transition-all duration-300 transform ease-in-out"
          onClick={() => setIsOpen(false)}
        >
          <XIcon className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
