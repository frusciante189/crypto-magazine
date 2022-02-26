import React from "react";
import Provider from "../context/context";
import Footer from "./Footer";
import { AnimatePresence } from "framer-motion";

const Layout = ({ children }) => {
  return (
    <Provider>
      <AnimatePresence exitBeforeEnter>
        <main className="antialiased">{children}</main>
        <Footer />
      </AnimatePresence>
    </Provider>
  );
};

export default Layout;
