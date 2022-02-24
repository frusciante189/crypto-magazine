import Image from "next/image";
import React from "react";

const FeaturedSingle = () => {
  return (
    <div className="lg:px-4 first:pl-0 last:pr-0 py-4 first:pt-0 lg:first:pt-4 lg:last:pb-4 last:pb-0">
      <div className="grid grid-cols-3 lg:gap-x-10 gap">
        <div className="col-span-2">
          <p className="font-mono dark:text-darkTitle text-lightTitle">
            Metaverse
          </p>
          <h3 className="font-inter dark:text-darkTitle text-lightTitle font-bold text-lg mt-1.5 leading-tight hover:underline underline-offset-1">
            Here's the Gear You Need to Start Your Own Podcast
          </h3>
        </div>
        <div className="col-span-1 items-center my-auto">
          <div className="lg:aspect-w-1 lg:aspect-h-1 relative">
            <Image
              src="https://images.unsplash.com/photo-1510070112810-d4e9a46d9e91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSingle;
