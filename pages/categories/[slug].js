import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import CategoryHero from "../../components/Category/CategoryHero";
import Posts from "../../components/Category/Posts";
import SubCategory from "../../components/Category/SubCategory";
import Navbar from "../../components/Navbar";
import { getCategories } from "../../library";

const index = ({ categories }) => {
  const router = useRouter();

  const capitalize = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  return (
    <>
      <Head>
        <title className="capitalize">
          Fruschain - {capitalize(router.query.slug)}
        </title>
      </Head>
      <Navbar categories={categories} />
      <div className="dark:bg-darkBg bg-white transition-all transform duration-500 ease-in-out lg:py-6 sm:py-4 py-2">
        <div className="max-w-screen-2xl mx-auto lg:px-8 sm:px-6 px-4 ">
          <h2 className="text-center font-mono text-5xl text-lightTitle dark:text-darkTitle">
            Business
          </h2>
          <CategoryHero />
          <div>
            <h2 className="font-mono text-center py-4 text-4xl border-b dark:text-darkTitle text-lightTitle">
              The Future Of Futures
            </h2>
            <SubCategory />
          </div>
          <Posts />
        </div>
      </div>
    </>
  );
};

export default index;

export async function getStaticProps() {
  const categories = (await getCategories()) || [];

  return {
    props: {
      categories,
    },
  };
}

export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: "blocking",
  };
}
