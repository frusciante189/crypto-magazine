import React from "react";
import FeaturedVideo from "./UI/FeaturedVideo";

const FeaturedVideos = () => {
  return (
    <div className="max-w-screen-2xl mx-auto lg:px-8 sm:px-6 px-4 ">
      <div className="py-4">
        <div className="md:border-t-2 border-black dark:border-white">
          <div className="dark:bg-white bg-black dark:text-lightTitle text-darkTitle md:max-w-max max-w-full px-3 py-2 sm:py-1.5">
            <p className="font-spaceMono uppercase text-sm font-bold">
              Featured Videos
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-10 mt-10">
          <FeaturedVideo />
          <FeaturedVideo />
          <FeaturedVideo />
        </div>
      </div>
    </div>
  );
};

export default FeaturedVideos;
