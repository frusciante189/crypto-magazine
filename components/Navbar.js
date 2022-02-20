import React from "react";
import { MenuIcon } from "@heroicons/react/outline";

const Navbar = () => {
  return (
    <header className="py-4 sticky top-0 left-0">
      <div className="lg:px-8 sm:px-6 px-4">
        <div className="flex items-center space-x-8">
          <div className="flex space-x-4 items-center">
            <span>
              <MenuIcon className="w-6 h-6" />
            </span>
            <h1>Fruschain</h1>
          </div>
          <nav className="flex items-center space-x-4">
            <span>Backchannel</span>
            <span>Business</span>
            <span>Culture</span>
            <span>Gear</span>
            <span>Ideas</span>
            <span>Science</span>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
