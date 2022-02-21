import { PlayIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";

const FeaturedVideo = () => {
  return (
    <div className="">
      <div className="aspect-video relative rounded-sm overflow-hidden group">
        <Image
          src="https://images.unsplash.com/photo-1504270997636-07ddfbd48945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
          layout="fill"
          objectFit="cover"
          className="group-hover:opacity-90 transition-colors duration-300 ease-in-out"
        />
        <div className="absolute bottom-3 left-3 p-4 bg-neutral-100 dark:bg-darkBg rounded-full group-hover:bg-opacity-90 transition-colors duration-300 ease-in-out">
          <PlayIcon className="w-8 h-8 text-lightTitle dark:text-darkTitle" />
        </div>
      </div>
      <h2 className="font-inter font-black text-xl mt-5 dark:text-darkTitle text-lightTitle">
        Rhett & Link Test Tiny Gadgets
      </h2>
    </div>
  );
};

export default FeaturedVideo;
