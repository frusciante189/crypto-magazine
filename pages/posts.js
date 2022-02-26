import React from "react";
import Navbar from "../components/Navbar";
import PostHero from "../components/PostsPage/PostHero";
import SinglePost from "../components/PostsPage/UI/SinglePost";
import { getAllPosts, getCategories, getFirst4Posts } from "../library";

const posts = ({ categories, allPosts, first4posts }) => {
  return (
    <>
      <Navbar categories={categories} />
      <div className="dark:bg-darkBg bg-white transition-all transform duration-500 ease-in-out lg:py-6 sm:py-4 py-2">
        <div className="max-w-screen-2xl mx-auto lg:px-8 sm:px-6 px-4 ">
          <h2 className="text-center font-mono text-5xl text-lightTitle dark:text-darkTitle">
            Haberler
          </h2>
          <PostHero posts={first4posts} />
          <div>
            <h2 className="font-mono text-center py-4 text-4xl border-b dark:text-darkTitle text-lightTitle">
              The Future Of Futures
            </h2>
          </div>
          <div className="mt-10 space-y-10">
            {allPosts.map((post, index) => {
              return <SinglePost key={index} post={post} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default posts;

export async function getStaticProps() {
  const allPosts = (await getAllPosts()) || [];
  const categories = (await getCategories()) || [];
  const first4posts = (await getFirst4Posts()) || [];

  return {
    props: {
      allPosts,
      categories,
      first4posts,
    },
  };
}
