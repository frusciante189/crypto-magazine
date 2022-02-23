import Image from "next/image";
import Link from "next/link";
import React from "react";

const Category = ({ post }) => {
  return (
    <div>
      <Link href={`/categories/${post[0].node.categories[0].slug}`}>
        <div className="dark:bg-white bg-black dark:text-lightTitle text-darkTitle max-w-max px-3 py-2 sm:py-1.5">
          <p className="font-spaceMono uppercase text-sm font-bold tracking-wider cursor-pointer">
            {post[0].node.categories[0].name}
          </p>
        </div>
      </Link>
      <Link href={`/posts/${post[0].node.slug}`}>
        <div className="aspect-video relative cursor-pointer">
          <Image
            src={post[0].node.featuredImage.url}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </Link>
      <div className="divide-y dark:text-darkText text-lightText">
        {post.map((item, index) => {
          return (
            <Link href={`/posts/${item.node.slug}`} key={index}>
              <h3 className="py-2.5 font-inter text-lg font-bold cursor-pointer hover:underline decoration-2 underline-offset-2">
                {item.node.title}
              </h3>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
