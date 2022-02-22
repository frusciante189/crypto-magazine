import Image from "next/image";
import React from "react";

const Category = ({ post }) => {
  return (
    <div>
      <div className="dark:bg-white bg-black dark:text-lightTitle text-darkTitle max-w-max px-3 py-2 sm:py-1.5">
        <p className="font-spaceMono uppercase text-sm font-bold tracking-wider">
          {post[0].node.categories[0].name}
        </p>
      </div>
      <div className="aspect-video relative">
        <Image
          src={post[0].node.featuredImage.url}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="divide-y dark:text-darkText text-lightText">
        {post.map((item, index) => {
          return (
            <h3 key={index} className="py-2.5 font-inter text-lg font-bold">
              {item.node.title}
            </h3>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
