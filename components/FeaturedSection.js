import React from "react";
import FeaturedPost from "./UI/FeaturedPost";
import FeaturedSingle from "./UI/FeaturedSingle";

const FeaturedSection = () => {
  return (
    <div className="py-4">
      <div className="md:border-t-2 border-black dark:border-white">
        <div className="dark:bg-white bg-black dark:text-lightTitle text-darkTitle md:max-w-max max-w-full px-3 py-2 sm:py-1.5">
          <p className="font-spaceMono uppercase text-sm font-bold">
            Blockchain Development
          </p>
        </div>
      </div>
      <div className="divide-y">
        <div className="py-4">
          <FeaturedPost />
        </div>
        <div className="py-4 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:divide-x divide-y lg:divide-y-0 gap-x-5">
          <FeaturedSingle />
          <FeaturedSingle />
          <FeaturedSingle />
          <FeaturedSingle />
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
