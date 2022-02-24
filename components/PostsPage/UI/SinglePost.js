import Image from "next/image";
import React from "react";

const SinglePost = ({ post }) => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-9">
        <div className="grid grid-cols-12 gap-x-10">
          <div className="aspect-w-1 aspect-h-1 relative col-span-5">
            <Image
              src={post.featuredImage.url}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="col-span-7 my-auto">
            <p className="font-mono uppercase text-sm dark:text-darkTitle text-lightTitle">
              {post.categories[0].name}
            </p>
            <h2 className="mt-2 font-inter font-bold text-3xl">{post.title}</h2>
            <p className="mt-4 font-barlow font-medium">{post?.excerpt}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
