import Image from "next/image";
import React from "react";

const CategoryHeroPost = ({ post }) => {
  return (
    <div className="pr-4 h-full flex flex-col">
      <div className="aspect-w-16 aspect-h-9 relative cursor-pointer">
        <Image src={post.featuredImage.url} layout="fill" objectFit="cover" />
      </div>
      <div className="lg:mt-10 mt-4 flex flex-col flex-1 justify-between pb-10">
        <h2 className="lg:text-5xl sm:text-4xl text-3xl font-inter font-black dark:text-darkTitle text-lightTitle hover:underline cursor-pointer">
          {post.title}
        </h2>
        <p className="font-barlow text-base lg:text-lg font-normal lg:font-medium dark:text-darkText text-lightText lg:mt-0 mt-4 cursor-pointer">
          {post.excerpt}
        </p>
      </div>
    </div>
  );
};

export default CategoryHeroPost;
