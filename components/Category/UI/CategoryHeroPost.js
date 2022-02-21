import Image from "next/image";
import React from "react";

const CategoryHeroPost = () => {
  return (
    <div className="pr-4 h-full flex flex-col">
      <div className="lg:aspect-square aspect-video relative">
        <Image
          src="https://images.unsplash.com/photo-1595285203796-2da1c77274e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="lg:mt-10 mt-4 flex flex-col flex-1 justify-between pb-10">
        <h2 className="lg:text-5xl sm:text-4xl text-3xl font-inter font-black dark:text-darkTitle text-lightTitle">
          ‘Disruption’ Is a Two-Way Street
        </h2>
        <p className="font-barlow text-base lg:text-lg font-normal lg:font-medium dark:text-darkText text-lightText lg:mt-0 mt-4">
          There's a wave of innovation that we're failing to recognize—and it's
          being led by users and networks, not tech companies.
        </p>
      </div>
    </div>
  );
};

export default CategoryHeroPost;
