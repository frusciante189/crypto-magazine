import Image from "next/image";
import React from "react";

const SingleHeroPost = ({ post }) => {
  return (
    <div className="last:pb-4">
      <div className="aspect-w-16 aspect-h-9 relative">
        <Image src={post.featuredImage.url} layout="fill" objectFit="cover" />
      </div>
      <h2 className="text-lightTitle dark:text-darkTitle text-2xl font-bold font-inter mt-4">
        {post.title}
      </h2>
      <p className="mt-4 font-barlow dark:text-darkText text-lightText">
        {post.excerpt}
      </p>
    </div>
  );
};

export default SingleHeroPost;
