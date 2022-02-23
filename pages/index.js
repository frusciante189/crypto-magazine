import Head from "next/head";
import Categories from "../components/Categories";
import FeaturedSection from "../components/FeaturedSection";
import FeaturedVideos from "../components/FeaturedVideos";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Trending from "../components/Trending";
import {
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
}) {
  return (
    <>
      <Head>
        <title>Fruschain</title>
        <meta name="description" content="Frus Nextjs Blog Course" />
      </Head>
      <Navbar categories={categories} />
      <div className="dark:bg-darkBg bg-white transition-all transform duration-500 ease-in-out lg:py-6 sm:py-4 py-2">
        <div className="max-w-screen-2xl mx-auto lg:px-8 sm:px-6 px-4 ">
          <Hero
            firstFeaturedPost={firstFeaturedPost}
            todaysPick={todaysPick}
            latestHeroPosts={latestHeroPosts}
          />
          <Trending trendingPosts={trendingPosts} />
          <FeaturedSection otherFeaturedPost={otherFeaturedPosts[0].node} />
          <Categories
            nftPosts={nftPosts}
            culturePosts={culturePosts}
            technologyPosts={technologyPosts}
            metaversePosts={metaversePosts}
            blockchainPosts={blockchainPosts}
            deFiPosts={deFiPosts}
          />
          <FeaturedSection otherFeaturedPost={otherFeaturedPosts[1].node} />
        </div>
        <Newsletter />
        <FeaturedVideos />
      </div>
    </>
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
    },
  };
}
