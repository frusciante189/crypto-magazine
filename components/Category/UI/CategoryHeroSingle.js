import Image from "next/image";
import React from "react";

const CategoryHeroSingle = ({ post }) => {
  return (
    <div className="last:pb-4">
      <div className="aspect-w-16 aspect-h-9 relative cursor-pointer">
        <Image src={post.featuredImage.url} layout="fill" objectFit="cover" />
      </div>
      <h2 className="text-lightTitle dark:text-darkTitle text-2xl font-bold font-inter mt-4 cursor-pointer hover:underline">
        {post.title}
      </h2>
      <p className="lg:mt-4 mt-2 font-barlow dark:text-darkText text-lightText cursor-pointer">
        {post.excerpt}
      </p>
    </div>
  );
};

export default CategoryHeroSingle;
