import Link from "next/link";
import { FaFacebook, FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="dark:bg-darkBg bg-white lg:py-20 sm:py-16 py-12 font-mono border-t transition-all transform duration-500 ease-in-out">
      <div className="max-w-7xl mx-auto lg:px-8 sm:px-6 px-4">
        <div className="flex space-x-4 items-center justify-center">
          <Link href="/">
            <a className="lg:text-4xl text-3xl font-medium dark:text-darkTitle text-lightTitle">
              Fruschain
            </a>
          </Link>
        </div>
        <nav className="flex sm:flex-row flex-col items-center justify-center lg:space-x-2 space-x-1 md:mt-10 mt-5">
          <span className="navLink text-lg">Backchannel</span>
          <span className="navLink text-lg">Business</span>
          <span className="navLink text-lg">Culture</span>
          <span className="navLink text-lg">Gear</span>
          <span className="navLink text-lg">Ideas</span>
          <span className="navLink text-lg">Science</span>
        </nav>

        <div className="mt-10">
          <div className="flex space-x-4 items-center justify-center dark:text-darkText text-lightText">
            <FaTwitter size={24} />
            <FaInstagram size={24} />
            <FaTelegram size={24} />
            <FaFacebook size={24} />
          </div>
        </div>
        <p className="mt-7 text-center dark:text-darkText text-lightText">
          &copy; Copyright 2021, All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
