import React from "react";
import MostRecent from "./MostRecent";
import TodayPicks from "./TodayPicks";

const Hero = () => {
  return (
    <div className="py-4">
      <div className="grid lg:grid-cols-12 grid-cols-1 gap-x-4 lg:gap-y-0 gap-y-10">
        <div className="lg:col-span-9">
          <TodayPicks />
        </div>
        <div className="lg:col-span-3">
          <MostRecent />
        </div>
      </div>
    </div>
  );
};

export default Hero;
