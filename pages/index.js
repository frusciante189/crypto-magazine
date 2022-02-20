import Head from "next/head";
import FeaturedPost from "../components/FeaturedPost";
import Hero from "../components/Hero";
import Trending from "../components/Trending";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fruschain</title>
        <meta name="description" content="Frus Nextjs Blog Course" />
      </Head>
      <div className="dark:bg-darkBg bg-white transition-all transform duration-500 ease-in-out lg:py-6 sm:py-4 py-2">
        <div className="max-w-screen-2xl mx-auto lg:px-8 sm:px-6 px-4 ">
          <Hero />
          <Trending />
        </div>
      </div>
    </>
  );
}
