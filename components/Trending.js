import React from "react";
import TrendingPost from "./UI/TrendingPost";
import { motion } from "framer-motion";

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const Trending = ({ trendingPosts }) => {
  return (
    <motion.div variants={fadeInUp} className="py-4">
      <div className="md:border-t-2 border-black dark:border-white">
        <div className="flex space-x-6 items-center">
          <div className="dark:bg-white bg-black dark:text-lightTitle text-darkTitle md:max-w-max max-w-full px-3 py-2 sm:py-1.5 flex-1">
            <p className="font-spaceMono uppercase text-sm font-bold tracking-wider select-none pointer-events-none">
              Trendler
            </p>
          </div>
          <p className="dark:text-darkTitle text-lightTitle font-spaceMono font-bold uppercase text-sm md:block hidden select-none pointer-events-none">
            Geçen Ayın en beğenİlenlerİ
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1 lg:gap-x-10 gap-x-6 mt-4 divide-y md:divide-y-0">
        {trendingPosts.map((trending, index) => {
          return <TrendingPost trending={trending.node} key={index} />;
        })}
      </div>
    </motion.div>
  );
};

export default Trending;
