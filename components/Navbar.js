import React from "react";
import { MenuIcon } from "@heroicons/react/outline";
import DarkMode from "./UI/DarkMode";
import Link from "next/link";
import MobileMenu from "./UI/MobileMenu";
import Overlay from "./UI/Overlay";
import { useProvider } from "../context/context";
import { motion } from "framer-motion";

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const Navbar = ({ categories }) => {
  const { isOpen, setIsOpen } = useProvider();
  return (
    <>
      <motion.header
        variants={fadeInUp}
        className="py-4 sticky top-0 left-0 font-mono dark:bg-darkBg bg-white transition-all transform duration-500 ease-in-out border-b dark:border-zinc-600 z-40"
      >
        <div className="lg:px-8 sm:px-6 px-4">
          <div className="flex items-center justify-between">
            <div className="flex lg:space-x-8 items-center space-x-2">
              <div className="flex items-center">
                <Link href="/">
                  <a className="lg:text-4xl sm:text-3xl text-2xl font-medium dark:text-darkTitle text-lightTitle">
                    Fruschain
                  </a>
                </Link>
              </div>
              <nav className="md:flex hidden items-center lg:space-x-2 space-x-px">
                {categories?.map((category, index) => {
                  return (
                    <Link
                      href={`${
                        (category.name === "Haberler" && "/posts") ||
                        (category.name === "Development" && "/development") ||
                        `/tags/${category.slug}`
                      }`}
                      key={index}
                    >
                      <a className="navLink dark:text-darkText text-lightText">
                        {category.name}
                      </a>
                    </Link>
                  );
                })}
              </nav>
            </div>
            <div className="flex items-center space-x-3">
              <DarkMode />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden block sm:p-2 p-1.5 focus:outline-none rounded-lg text-lightTitle dark:text-darkTitle border focus:border-transparent dark:focus:border-transparent focus:outline-2 focus:outline-transparent focus:ring-2 focus:ring-indigo-500
      transition-all transform duration-500 ease-in-out"
              >
                <MenuIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>
      <MobileMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        categories={categories}
      />
      <Overlay isOpen={isOpen} />
    </>
  );
};

export default Navbar;
