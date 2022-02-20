import React from "react";
import RecentPost from "./UI/RecentPost";

const MostRecent = () => {
  return (
    <div className="md:pl-4 md:border-l">
      <div className="md:border-t-2 border-black dark:border-white">
        <div className="dark:bg-white bg-black dark:text-lightTitle text-darkTitle md:max-w-max max-w-full px-3 py-2 sm:py-1.5">
          <p className="font-spaceMono uppercase text-sm font-bold">
            Most Recent
          </p>
        </div>
      </div>
      {/* xl de 5 post lg de 3 post */}
      <div className="lg:mt-7 mt-4 divide-y grid lg:grid-cols-1 md:grid-cols-2 grid-cols-1 md:gap-x-4 lg:gap-x-0">
        <RecentPost />
        <RecentPost />
        <RecentPost />
        <RecentPost />
        <RecentPost />
      </div>
    </div>
  );
};

export default MostRecent;
