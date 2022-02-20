import Image from "next/image";
import React from "react";

const LatestPost = () => {
  return (
    <div className="py-4">
      <div className="sm:border-t-2 sm:border-black">
        <div className="dark:bg-white bg-black dark:text-lightTitle text-darkTitle sm:max-w-max max-w-full px-3 py-2 sm:py-1.5">
          <p className="font-spaceMono uppercase text-sm font-bold">
            Blockchain Development
          </p>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-x-8">
        <div className="col-span-8">
          <div className="aspect-video relative">
            <Image
              src="https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1143&q=80"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="col-span-4">content</div>
      </div>
    </div>
  );
};

export default LatestPost;
