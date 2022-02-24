import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroPost = ({ firstFeaturedPost }) => {
  return (
    <Link href={`/post/${firstFeaturedPost.slug}`}>
      <div>
        <div className="sm:aspect-video sm:h-full sm:w-full max-w-[597px] max-h-[335px] relative cursor-pointer">
          <Image
            src={firstFeaturedPost.featuredImage.url}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="mt-4">
          <p className="font-mono tracking-wider dark:text-darkTitle text-lightTitle cursor-pointer">
            {firstFeaturedPost.categories[0].name}
          </p>
          <h3 className="font-inter xl:text-5xl md:text-4xl text-3xl font-black dark:text-darkTitle text-lightTitle mt-1 hover:underline cursor-pointer">
            {firstFeaturedPost.title}
          </h3>
          <p className="mt-4 dark:text-darkText text-lightText cursor-pointer font-barlow">
            {firstFeaturedPost.excerpt}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default HeroPost;
