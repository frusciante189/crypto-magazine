import Link from "next/link";
import React from "react";
import FeaturedVideo from "./UI/FeaturedVideo";

const FeaturedVideos = () => {
  return (
    <div className="max-w-screen-2xl mx-auto lg:px-8 sm:px-6 px-4 ">
      <div className="py-4">
        <div className="md:border-t-2 border-black dark:border-white">
          <Link href="/development">
            <div className="flex space-x-4 items-center cursor-pointer">
              <div className="dark:bg-white bg-black dark:text-lightTitle text-darkTitle md:max-w-max max-w-full px-3 py-2 sm:py-1.5 flex-1">
                <p className="font-spaceMono uppercase text-sm font-bold tracking-wider ">
                  Development
                </p>
              </div>
              <p className="dark:text-darkTitle text-lightTitle font-spaceMono font-bold uppercase text-sm md:block hidden tracking-tighte">
                Full Stack Blockchain Developer Yol haritası
              </p>
            </div>
          </Link>
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
