import Image from "next/image";
import React from "react";
import HeroPost from "./UI/HeroPost";
import TodayPickPost from "./UI/TodayPickPost";

const TodayPicks = () => {
  return (
    <>
      <div className="md:border-t-2 border-black dark:border-white">
        <div className="dark:bg-white bg-black dark:text-lightTitle text-darkTitle md:max-w-max max-w-full px-3 py-2 sm:py-1.5">
          <p className="font-spaceMono uppercase text-sm font-bold">
            Today's Picks
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-9 grid-cols-1 md:gap-x-8 mt-8">
        <div className="col-span-3 divide-y mt-6 md:mt-0">
          <TodayPickPost />
          <TodayPickPost />
        </div>
        <div className="col-span-6 row-start-1 md:row-start-auto">
          <HeroPost />
        </div>
      </div>
    </>
  );
};

export default TodayPicks;
