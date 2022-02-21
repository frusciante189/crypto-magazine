import Image from "next/image";
import React from "react";

const RecentPost = () => {
  return (
    <div className="flex xl:space-x-6 lg:space-x-2 items-center py-4 first:pt-0 last:pb-0">
      <div className="flex-grow">
        <h3 className="font-inter xl:text-lg text-base dark:text-darkText text-lightText font-bold lg:pr-0 pr-12 hover:underline decoration-2 underline-offset-1">
          Millions of WordPress Sites Got a Forced Update
        </h3>
        <p className="xl:mt-1.5 mt-1 dark:text-darkText text-lightText font-mono xl:tracking-tight lg:tracking-normal">
          Smart Contracts
        </p>
      </div>
      <div className="flex-shrink-0 lg:block hidden">
        <Image
          src="https://images.unsplash.com/photo-1487014679447-9f8336841d58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1605&q=80"
          objectFit="cover"
          width={75}
          height={75}
          unoptimized
        />
      </div>
    </div>
  );
};

export default RecentPost;
