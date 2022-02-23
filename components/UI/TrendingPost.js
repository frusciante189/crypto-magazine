import Image from "next/image";
import Link from "next/link";
import React from "react";

const TrendingPost = ({ trending }) => {
  return (
    <Link href={`/post/${trending.slug}`}>
      <div className="flex md:flex-col items-center flex-row-reverse md:gap-x-8 gap-x-6 py-4 md:first:py-4 first:pt-0 md:last:py-4 last:pb-0 ">
        <div className="md:aspect-video lg:h-[190px] md:h-[140px] w-[75px] h-[75px] md:w-full relative md:flex-shrink flex-shrink-0 cursor-pointer">
          <Image
            src={trending.featuredImage.url}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="cursor-pointer">
          <p className="font-mono tracking-wider dark:text-darkTitle text-lightTitle lg:mt-4 mt-2 text-sm">
            {trending.categories[0].name}
          </p>
          <h2 className="lg:mt-2 mt-1 font-inter font-bold text-lg dark:text-darkTitle text-lightTitle leading-tight">
            {trending.title}
          </h2>
          <p className="xl:mt-4 lg:mt-3 mt-2 text-sm dark:text-darkText text-lightText leading-tight">
            {trending.excerpt}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default TrendingPost;
