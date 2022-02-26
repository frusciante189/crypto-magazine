import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeaturedSingle = ({ post }) => {
  return (
    <div className="lg:px-4 first:pl-0 last:pr-0 py-4 first:pt-0 lg:first:pt-4 lg:last:pb-4 last:pb-0">
      <div className="grid grid-cols-12 lg:gap-x-5 gap-x-2 gap">
        <div className="xl:col-span-8 col-span-6">
          <Link href={`/tags/${post.categories[0].slug}`}>
            <p className="font-mono dark:text-darkTitle text-lightTitle cursor-pointer hover:underline">
              {post.categories[0].name}
            </p>
          </Link>
          <Link href={`/post/${post.slug}`}>
            <h3 className="font-inter dark:text-darkTitle text-lightTitle font-semibold text-base lg:text-lg mt-1.5 leading-tight hover:underline underline-offset-1 cursor-pointer">
              {post.title}
            </h3>
          </Link>
        </div>
        <div className="xl:col-span-4 col-span-6">
          <div className="aspect-w-1 aspect-h-1  relative cursor-pointer">
            <Image
              src={post.featuredImage.url}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSingle;
