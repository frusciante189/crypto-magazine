import Image from "next/image";
import React from "react";

const TrendingPost = () => {
  return (
    <div className="flex md:flex-col items-center flex-row-reverse gap-x-8 py-4 md:first:py-4 first:pt-0 md:last:py-4 last:pb-0">
      <div className="md:aspect-video w-[75px] h-[75px] md:w-full md:h-full relative md:flex-shrink flex-shrink-0">
        <Image
          src="https://images.unsplash.com/photo-1463171379579-3fdfb86d6285?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="">
        <p className="font-mono tracking-wider dark:text-darkTitle text-lightTitle lg:mt-4 mt-2 text-sm">
          Science
        </p>
        <h2 className="lg:mt-2 mt-1 font-inter font-bold text-lg dark:text-darkTitle text-lightTitle leading-tight">
          Twitter Has Started Blocking Porn in Germany
        </h2>
        <p className="xl:mt-4 lg:mt-3 mt-2 text-sm dark:text-darkText text-lightText leading-tight">
          Dozens of accounts have been vanished as Twitter bows to pressure to
          make it harder for children to find adult content online.
        </p>
      </div>
    </div>
  );
};

export default TrendingPost;
