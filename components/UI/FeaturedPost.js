import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeaturedPost = ({ otherFeaturedPost }) => {
  return (
    <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-x-8 gap-y-4 lg:mt-6 mt-2">
      <div className="col-span-8">
        <Link href={`/post/${otherFeaturedPost.slug}`}>
          <div className="aspect-w-16 aspect-h-9 relative cursor-pointer">
            <Image
              src={otherFeaturedPost.featuredImage.url}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </Link>
      </div>
      <div className="col-span-4 flex flex-col justify-between">
        <Link href={`/post/${otherFeaturedPost.slug}`}>
          <h3 className="xl:text-5xl lg:text-4xl sm:text-3xl text-2xl font-black font-inter uppercase lg:tracking-tight hover:underline decoration-6 cursor-pointer dark:text-darkTitle text-lightTitle">
            {otherFeaturedPost.title}
          </h3>
        </Link>
        <div className="mt-5">
          <Link href={`/post/${otherFeaturedPost.slug}`}>
            <p className="dark:text-darkText text-lightText font-barlow xl:text-lg md:text-base text-sm">
              {otherFeaturedPost.title}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
