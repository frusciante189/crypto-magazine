import React from "react";
import TrendingPost from "./UI/TrendingPost";

const Trending = () => {
  return (
    <div className="py-4">
      <div className="md:border-t-2 border-black dark:border-white">
        <div className="flex space-x-6 items-center">
          <div className="dark:bg-white bg-black dark:text-lightTitle text-darkTitle md:max-w-max max-w-full px-3 py-2 sm:py-1.5 flex-1">
            <p className="font-spaceMono uppercase text-sm font-bold">
              Trending Stories
            </p>
          </div>
          <p className="dark:text-darkTitle text-lightTitle font-spaceMono font-bold uppercase text-sm md:block hidden">
            Top stories from last month
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1 lg:gap-x-10 gap-x-6 mt-4 divide-y md:divide-y-0">
        <TrendingPost />
        <TrendingPost />
        <TrendingPost />
        <TrendingPost />
      </div>
    </div>
  );
};

export default Trending;
