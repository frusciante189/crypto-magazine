import Image from "next/image";
import React from "react";

const FeaturedPost = ({ otherFeaturedPost }) => {
  return (
    <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-x-8 gap-y-4 mt-6">
      <div className="col-span-8">
        <div className="aspect-video relative">
          <Image
            src={otherFeaturedPost.featuredImage.url}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="col-span-4 flex flex-col justify-between">
        <div>
          <h3 className="xl:text-5xl lg:text-4xl sm:text-3xl text-2xl font-black font-inter uppercase lg:tracking-tight hover:underline decoration-6 cursor-pointer dark:text-darkTitle text-lightTitle">
            {otherFeaturedPost.title}
          </h3>
        </div>
        <div className="mt-5">
          <p className="dark:text-darkText text-lightText font-barlow xl:text-lg md:text-base text-sm">
            {otherFeaturedPost.title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
