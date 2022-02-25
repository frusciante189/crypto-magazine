import { PlayIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";

const FeaturedVideo = () => {
  return (
    <div>
      <div className="relative">
        <div className="aspect-w-16 aspect-h-9 relative rounded-sm overflow-hidden group cursor-pointer">
          <Image
            src="https://images.unsplash.com/photo-1504270997636-07ddfbd48945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
            layout="fill"
            objectFit="cover"
            className="group-hover:opacity-90 transition-colors duration-300 ease-in-out"
          />
        </div>
        <div className="absolute bottom-3 left-3 p-4 bg-neutral-100 dark:bg-darkBg rounded-full group-hover:bg-opacity-90 transition-colors duration-300 ease-in-out cursor-pointer">
          <PlayIcon className="lg:w-8 md:w-6 md:h-6 lg:h-8 w-8 h-8 text-lightTitle dark:text-darkTitle" />
        </div>
      </div>
      <h2 className="font-inter font-black text-xl mt-5 dark:text-darkTitle text-lightTitle cursor-pointer">
        Rhett & Link Test Tiny Gadgets
      </h2>
    </div>
  );
};

export default FeaturedVideo;
