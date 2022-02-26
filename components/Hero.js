import React from "react";
import MostRecent from "./MostRecent";
import TodayPicks from "./TodayPicks";
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

const Hero = ({ firstFeaturedPost, todaysPick, latestHeroPosts }) => {
  return (
    <motion.div variants={fadeInUp} className="lg:py-4 py-2">
      <div className="grid lg:grid-cols-12 grid-cols-1 gap-x-4 lg:gap-y-0 gap-y-10">
        <div className="lg:col-span-9">
          <TodayPicks
            firstFeaturedPost={firstFeaturedPost}
            todaysPick={todaysPick}
          />
        </div>
        <div className="lg:col-span-3">
          <MostRecent latestHeroPosts={latestHeroPosts} />
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
