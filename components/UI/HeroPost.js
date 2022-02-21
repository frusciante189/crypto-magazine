import Image from "next/image";
import React from "react";

const HeroPost = () => {
  return (
    <div className="">
      <div className="aspect-video relative">
        <Image
          src="https://images.unsplash.com/photo-1640622842924-fb0017b9d786?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="mt-4">
        <p className="font-mono tracking-wider dark:text-darkTitle text-lightTitle">
          DeFi
        </p>
        <h3 className="font-inter xl:text-5xl md:text-4xl text-3xl font-black dark:text-darkTitle text-lightTitle mt-1 hover:underline">
          The End Game of China's Zero-Covid Policy Nightmare
        </h3>
        <p className="mt-4 dark:text-darkText text-lightText">
          After six globe-trotting decades spent probing “the phenomenon,” the
          French information scientist is sure of only one thing: The truth is
          really, really out there.
        </p>
      </div>
    </div>
  );
};

export default HeroPost;
