import Image from "next/image";
import Link from "next/link";
import React from "react";

const TodayPickPost = ({ todayPost }) => {
  return (
    <Link href={`/post/${todayPost.slug}`}>
      <div className="first:pb-4 last:pt-4">
        <div className="relative aspect-video cursor-pointer">
          <Image
            src={todayPost.featuredImage.url}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="mt-2 cursor-pointer">
          <p className="font-mono tracking-wider dark:text-darkTitle text-lightTitle">
            {todayPost.categories.map((category) => category.name)}
          </p>
          <h4 className="font-inter xl:text-xl md:text-lg text-xl font-bold dark:text-darkTitle text-lightTitle mt-1 hover:underline underline-offset-2 leading-snug lg:leading-normal">
            {todayPost.title}
          </h4>
        </div>
      </div>
    </Link>
  );
};

export default TodayPickPost;
