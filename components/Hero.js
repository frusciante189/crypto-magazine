import React from "react";

const Hero = () => {
  return (
    <div className="py-4">
      <div className="grid lg:grid-cols-12 grid-cols-1">
        <div className="col-span-9">todays</div>
        <div className="col-span-3">recent</div>
      </div>
    </div>
  );
};

export default Hero;
