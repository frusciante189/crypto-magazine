import Image from "next/image";
import React from "react";

const SubPost = () => {
  return (
    <div className="px-4 h-full flex flex-col">
      <div className="lg:aspect-square aspect-video relative">
        <Image
          src="https://images.unsplash.com/flagged/photo-1573162915877-b08d86c58ed5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h2 className="lg:text-5xl sm:text-4xl text-3xl font-inter font-black dark:text-darkTitle text-lightTitle mt-8">
        ‘Disruption’ Is a Two-Way Street
      </h2>
      <p className="font-barlow text-base lg:text-lg font-normal lg:font-medium dark:text-darkText text-lightText mt-8 mb-4">
        There's a wave of innovation that we're failing to recognize—and it's
        being led by users and networks, not tech companies.
      </p>
    </div>
  );
};

export default SubPost;
