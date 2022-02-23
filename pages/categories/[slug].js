import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import CategoryHero from "../../components/Category/CategoryHero";
import Posts from "../../components/Category/Posts";
import Navbar from "../../components/Navbar";
import { getCategories, getCategoryPosts } from "../../library";

const Index = ({ navCategories, categoryPosts }) => {
  const router = useRouter();

  const capitalize = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  return (
    <>
      <Navbar categories={navCategories} />
      <div className="dark:bg-darkBg bg-white transition-all transform duration-500 ease-in-out lg:py-6 sm:py-4 py-2">
        <div className="max-w-screen-2xl mx-auto lg:px-8 sm:px-6 px-4 ">
          <h2 className="text-center font-mono text-5xl text-lightTitle dark:text-darkTitle capitalize">
            {router.query.slug === "defi" ? "DeFi" : router.query.slug}
          </h2>
          <CategoryHero />
          <div>
            <h2 className="font-mono text-center py-4 text-4xl border-b dark:text-darkTitle text-lightTitle">
              The Future Of Futures
            </h2>
          </div>
          <Posts categoryPosts={categoryPosts} />
        </div>
      </div>
    </>
  );
};

export default Index;

export async function getStaticProps({ params }) {
  const navCategories = (await getCategories()) || [];
  const categoryPosts = (await getCategoryPosts(params.slug)) || [];

  return {
    props: {
      navCategories,
      categoryPosts,
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
