import React, { useState, useEffect } from "react";
import Provider from "../context/context";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <Provider>
      <main className="antialiased">{children}</main>
      <Footer />
    </Provider>
  );
};

export default Layout;
