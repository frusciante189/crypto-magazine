import Head from "next/head";
import LatestPost from "../components/LatestPost";

export default function Home() {
  return (
    <div className="dark:bg-darkBg bg-white transition-all transform duration-500 ease-in-out lg:py-6 sm:py-4 py-2">
      <Head>
        <title>Fruschain</title>
        <meta name="description" content="Frus Nextjs Blog Course" />
      </Head>
      <div className="max-w-7xl mx-auto lg:px-8 sm:px-6 px-4">
        <LatestPost />
      </div>
    </div>
  );
}
