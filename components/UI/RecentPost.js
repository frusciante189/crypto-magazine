import Image from "next/image";
import Link from "next/link";
import React from "react";

const RecentPost = ({ post }) => {
  return (
    <div className="flex xl:space-x-6 lg:space-x-2 items-center py-4 first:pt-0 last:pb-0">
      <Link href={`/post/${post.slug}`}>
        <div className="flex-grow cursor-pointer">
          <h3 className="font-inter xl:text-lg xl:leading-snug text-base dark:text-darkText text-lightText font-bold lg:pr-0 pr-12 hover:underline decoration-2 underline-offset-1">
            {post.title}
          </h3>
          <p className="xl:mt-1.5 mt-1 dark:text-darkText text-lightText font-mono xl:tracking-tight lg:tracking-normal">
            {post.categories[0].name}
          </p>
        </div>
      </Link>
      <Link href={`/post/${post.slug}`}>
        <div className="flex-shrink-0 lg:block hidden cursor-pointer">
          <Image
            src={post.featuredImage.url}
            objectFit="cover"
            width={75}
            height={75}
          />
        </div>
      </Link>
    </div>
  );
};

export default RecentPost;
