import React from "react";

const Overlay = ({ isOpen }) => {
  return (
    <div
      className={
        isOpen
          ? "bg-black fixed h-screen left-0 opacity-40 top-0 w-screen z-10 lg:hidden transition-all duration-500 ease-in-out transform"
          : ""
      }
    />
  );
};

export default Overlay;
