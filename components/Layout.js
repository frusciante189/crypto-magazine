import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { ThemeProvider } from "../context/theme";
import useWindowSize from "../hooks/useWindowSize";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const size = useWindowSize();
  const router = useRouter();

  useEffect(() => {
    if (isOpen && size.width > 768) {
      setIsOpen(false);
    }
  }, [size.width]);

  useEffect(() => {
    if (isOpen && size.width < 768) {
      router.events.on("routeChangeStart", () => setIsOpen(false));
    }
    return () => {
      if (isOpen && size.width < 768) {
        router.events.off("routeChangeStart"), () => setIsOpen(false);
      }
    };
  }, [isOpen, router]);

  return (
    <ThemeProvider>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <main className="antialiased">{children}</main>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
