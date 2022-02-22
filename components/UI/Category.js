import Image from "next/image";
import React from "react";

const Category = () => {
  return (
    <div>
      <div className="dark:bg-white bg-black dark:text-lightTitle text-darkTitle max-w-max px-3 py-2 sm:py-1.5">
        <p className="font-spaceMono uppercase text-sm font-bold tracking-wider">
          Business
        </p>
      </div>
      <div className="aspect-video relative">
        <Image
          src="https://images.unsplash.com/photo-1501163268664-3fdf329d019f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="divide-y dark:text-darkText text-lightText">
        <h3 className="py-2.5 font-inter text-lg font-bold">
          The Best Podcasts for Everyone
        </h3>
        <h3 className="py-2.5 font-inter text-lg font-bold">
          It's Time for a Scary Ghostbusters Movie
        </h3>
        <h3 className="py-2.5 font-inter text-lg font-bold">
          Futurama, Content Machines, and the Art of Survival
        </h3>
      </div>
    </div>
  );
};

export default Category;
