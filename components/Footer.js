import Link from "next/link";
import { FaFacebook, FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="dark:bg-white bg-darkBg lg:py-20 sm:py-16 py-12 font-mono border-t transition-all transform duration-500 ease-in-out">
      <div className="max-w-7xl mx-auto lg:px-8 sm:px-6 px-4">
        <div className="flex space-x-4 items-center justify-center">
          <Link href="/">
            <a className="lg:text-4xl text-3xl font-medium dark:text-lightTitle text-darkTitle">
              Fruschain
            </a>
          </Link>
        </div>
        <nav className="flex sm:flex-row flex-col items-center justify-center lg:space-x-2 space-x-1 md:mt-10 mt-5">
          <Link href="/posts">
            <a className="navLink text-lg">Haberler</a>
          </Link>
          <Link href="/categories/nft">
            <a className="navLink text-lg">NFT</a>
          </Link>
          <Link href="/categories/kultur">
            <a className="navLink text-lg">Kültür</a>
          </Link>
          <Link href="/categories/teknoloji">
            <a className="navLink text-lg">Teknoloji</a>
          </Link>
          <Link href="/categories/metaverse">
            <a className="navLink text-lg">Metaverse</a>
          </Link>
          <Link href="/categories/blockchain">
            <a className="navLink text-lg">Blockchain</a>
          </Link>
          <Link href="/categories/defi">
            <a className="navLink text-lg">DeFi</a>
          </Link>
          <Link href="/development">
            <a className="navLink text-lg">Development</a>
          </Link>
        </nav>

        <div className="mt-10">
          <div className="flex space-x-4 items-center justify-center dark:text-lightText text-darkText">
            <FaTwitter size={24} />
            <FaInstagram size={24} />
            <FaTelegram size={24} />
            <FaFacebook size={24} />
          </div>
        </div>
        <p className="mt-7 text-center dark:text-lightText text-darkText">
          &copy; Copyright 2021, All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
