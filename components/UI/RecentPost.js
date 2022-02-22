import Image from "next/image";
import React from "react";

const RecentPost = ({ post }) => {
  return (
    <div className="flex xl:space-x-6 lg:space-x-2 items-center py-4 first:pt-0 last:pb-0">
      <div className="flex-grow">
        <h3 className="font-inter xl:text-lg text-base dark:text-darkText text-lightText font-bold lg:pr-0 pr-12 hover:underline decoration-2 underline-offset-1">
          {post.title}
        </h3>
        <p className="xl:mt-1.5 mt-1 dark:text-darkText text-lightText font-mono xl:tracking-tight lg:tracking-normal">
          {post.categories.map((category, index) => category.name)}
        </p>
      </div>
      <div className="flex-shrink-0 lg:block hidden">
        <Image
          src={post.featuredImage.url}
          objectFit="cover"
          width={75}
          height={75}
        />
      </div>
    </div>
  );
};

export default RecentPost;
