import Image from "next/image";
import React from "react";
import HeroPost from "./UI/HeroPost";
import TodayPickPost from "./UI/TodayPickPost";

const TodayPicks = ({ firstFeaturedPost, todaysPick }) => {
  return (
    <>
      <div className="md:border-t-2 border-black dark:border-white">
        <div className="dark:bg-white bg-black dark:text-lightTitle text-darkTitle md:max-w-max max-w-full px-3 py-2 sm:py-1.5 md:block hidden">
          <p className="font-spaceMono uppercase text-sm font-bold tracking-wider select-none pointer-events-none">
            Günün Seçİmlerİ
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-9 grid-cols-1 md:gap-x-8 mt-8">
        <div className="col-span-3 divide-y mt-6 md:mt-0">
          {todaysPick.map((todayPost, index) => {
            return <TodayPickPost todayPost={todayPost.node} key={index} />;
          })}
        </div>
        <div className="col-span-6 row-start-1 md:row-start-auto">
          <HeroPost firstFeaturedPost={firstFeaturedPost} />
        </div>
      </div>
    </>
  );
};

export default TodayPicks;
