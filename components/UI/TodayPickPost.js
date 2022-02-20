import Image from "next/image";
import React from "react";

const TodayPickPost = () => {
  return (
    <div className="first:pb-4 last:pt-4">
      <div className="relative aspect-video">
        <Image
          src="https://images.unsplash.com/photo-1516542076529-1ea3854896f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="mt-2">
        <p className="font-mono tracking-wider dark:text-darkTitle text-lightTitle">
          NFT
        </p>
        <h4 className="font-inter xl:text-xl md:text-lg text-xl font-bold dark:text-darkTitle text-lightTitle mt-1 hover:underline underline-offset-2 leading-snug lg:leading-normal">
          It might Be Time to Take Methane Removal Seriously
        </h4>
      </div>
    </div>
  );
};

export default TodayPickPost;
