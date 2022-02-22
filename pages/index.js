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
  getLatestHeroPosts,
  getTodaysPicks,
} from "../library";

export default function Home({
  categories,
  firstFeaturedPost,
  todaysPick,
  latestHeroPosts,
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
          <Trending />
          <FeaturedSection />
          <Categories />
          <FeaturedSection />
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

  return {
    props: {
      categories,
      firstFeaturedPost,
      todaysPick,
      latestHeroPosts,
    },
  };
}
