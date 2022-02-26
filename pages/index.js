import Head from "next/head";
import Categories from "../components/Categories";
import FeaturedSection from "../components/FeaturedSection";
import FeaturedVideos from "../components/FeaturedVideos";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Trending from "../components/Trending";
import { motion } from "framer-motion";
import {
  get10Latest,
  get5Latest,
  getCategories,
  getFirstFeaturedPost,
  getHomeBlockchainPosts,
  getHomeCulturePosts,
  getHomeDeFiPosts,
  getHomeMetaversePosts,
  getHomeNFTPosts,
  getHomeTechnologyPosts,
  getLatestHeroPosts,
  getOtherFeaturedPost,
  getTodaysPicks,
  getTrendingPosts,
} from "../library";

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 5,
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

export default function Home({
  categories,
  firstFeaturedPost,
  otherFeaturedPosts,
  todaysPick,
  latestHeroPosts,
  trendingPosts,
  nftPosts,
  culturePosts,
  technologyPosts,
  metaversePosts,
  blockchainPosts,
  deFiPosts,
  last5,
  last10,
}) {
  return (
    <motion.div
      exit={{ opacity: 1 }}
      initial="initial"
      animate="animate"
      variants={stagger}
    >
      <Head>
        <title>Fruschain</title>
        <meta name="description" content="Frus Nextjs Blog Course" />
      </Head>
      <motion.div variants={fadeInUp}>
        <Navbar categories={categories} />
      </motion.div>
      <div className="dark:bg-darkBg bg-white transition-all transform duration-500 ease-in-out lg:py-6 sm:py-4 py-2">
        <div className="max-w-screen-2xl mx-auto lg:px-8 sm:px-6 px-4 ">
          <Hero
            firstFeaturedPost={firstFeaturedPost}
            todaysPick={todaysPick}
            latestHeroPosts={latestHeroPosts}
          />
          <Trending trendingPosts={trendingPosts} />
          <FeaturedSection
            otherFeaturedPost={otherFeaturedPosts[0].node}
            lastPosts={last5}
          />
          <Categories
            nftPosts={nftPosts}
            culturePosts={culturePosts}
            technologyPosts={technologyPosts}
            metaversePosts={metaversePosts}
            blockchainPosts={blockchainPosts}
            deFiPosts={deFiPosts}
          />
          <FeaturedSection
            otherFeaturedPost={otherFeaturedPosts[1].node}
            lastPosts={last10}
          />
        </div>
        <Newsletter />
        <FeaturedVideos />
      </div>
    </motion.div>
  );
}

export async function getStaticProps() {
  const categories = (await getCategories()) || [];
  const firstFeaturedPost = (await getFirstFeaturedPost()) || [];
  const todaysPick = (await getTodaysPicks()) || [];
  const latestHeroPosts = (await getLatestHeroPosts()) || [];
  const trendingPosts = (await getTrendingPosts()) || [];
  const otherFeaturedPosts = (await getOtherFeaturedPost()) || [];
  const nftPosts = (await getHomeNFTPosts()) || [];
  const culturePosts = (await getHomeCulturePosts()) || [];
  const technologyPosts = (await getHomeTechnologyPosts()) || [];
  const metaversePosts = (await getHomeMetaversePosts()) || [];
  const blockchainPosts = (await getHomeBlockchainPosts()) || [];
  const deFiPosts = (await getHomeDeFiPosts()) || [];
  const last5 = (await get5Latest()) || [];
  const last10 = (await get10Latest()) || [];

  return {
    props: {
      categories,
      firstFeaturedPost,
      todaysPick,
      latestHeroPosts,
      trendingPosts,
      otherFeaturedPosts,
      nftPosts,
      culturePosts,
      technologyPosts,
      metaversePosts,
      blockchainPosts,
      deFiPosts,
      last5,
      last10,
    },
  };
}
