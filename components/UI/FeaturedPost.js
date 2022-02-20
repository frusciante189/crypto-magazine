import Image from "next/image";
import React from "react";

const FeaturedPost = () => {
  return (
    <div className="py-4">
      <div className="md:border-t-2 border-black dark:border-white">
        <div className="dark:bg-white bg-black dark:text-lightTitle text-darkTitle md:max-w-max max-w-full px-3 py-2 sm:py-1.5">
          <p className="font-spaceMono uppercase text-sm font-bold">
            Blockchain Development
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-x-8 gap-y-4 mt-6">
        <div className="col-span-8">
          <div className="aspect-video relative">
            <Image
              src="https://images.unsplash.com/photo-1638913662252-70efce1e60a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="col-span-4 flex flex-col justify-between">
          <div>
            <h3 className="xl:text-5xl lg:text-4xl sm:text-3xl text-2xl font-black font-inter uppercase lg:tracking-tight hover:underline decoration-6 cursor-pointer dark:text-darkTitle text-lightTitle">
              Jacques Vallee still doesn't know what ufos are
            </h3>
          </div>
          <div className="mt-5">
            <p className="dark:text-darkText text-lightText font-barlow xl:text-lg md:text-base text-sm">
              After six globe-trotting decades spent probing “the phenomenon,”
              the French information scientist is sure of only one thing: The
              truth is really, really out there.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
