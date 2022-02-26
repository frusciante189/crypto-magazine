import Image from "next/image";
import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import {
  getCategories,
  getMorePosts,
  getPostDetails,
  getPosts,
} from "../../library";
import moment from "moment";
import Link from "next/link";
import "prismjs/themes/prism-tomorrow.css";
import Prism from "prismjs";

const Index = ({ navCategories, postDetails, morePosts }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <>
      <Navbar categories={navCategories} />
      <div className="lg:py-12 sm:py-8 py-6 dark:bg-darkBg bg-white transition-all transform duration-500 ease-in-out">
        <div className="max-w-5xl mx-auto lg:px-8 sm:px-6 px-4">
          <div>
            <div className="md:mb-10 mb-5">
              <div className="flex space-x-3 items-center justify-between md:justify-start">
                <Link href={`/categories/${postDetails.categories[0].slug}`}>
                  <div className="dark:bg-white bg-black dark:text-lightTitle text-darkTitle max-w-max px-3 py-2 sm:py-1.5 flex-1 cursor-pointer">
                    <p className="font-spaceMono uppercase text-sm font-bold tracking-wider select-none">
                      {postDetails.categories[0].name}
                    </p>
                  </div>
                </Link>
                <p className="dark:text-darkTitle text-lightTitle font-mono uppercase text-sm select-none pointer-events-none">
                  {moment(postDetails.createdAt).format("DD MMMM YYYY")}
                </p>
              </div>
              <p className="font-inter font-bold md:text-5xl text-4xl dark:text-darkTitle text-lightTitle mt-5 text-center">
                {postDetails.title}
              </p>
            </div>
            <div className="relative aspect-w-16 aspect-h-9">
              <Image
                src={postDetails.featuredImage.url}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="md:mt-10 mt-5">
              <div
                className="font-barlow language-javascript prose max-w-none prose-lg prose-img:mx-auto prose-img:max-h-[700px] prose-img:object-cover prose-neutral dark:prose-invert"
                dangerouslySetInnerHTML={{ __html: postDetails.content.html }}
              />
            </div>
            <div className="border-t-2 border-b">
              <div className="flex md:py-4 py-2.5 ml-2 font-mono text-sm dark:text-darkText text-lightText">
                <p>Topics</p>
                <div className="ml-10">
                  {postDetails.categories.map((category, index) => {
                    return (
                      <Link href={`/categories/${category.slug}`} key={index}>
                        <a>{category.name}</a>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-screen-2xl lg:px-8 sm:px-6 px-4 mx-auto">
          <div className="mt-10 border-y">
            <div className="md:py-4 py-2.5">
              <p className="font-mono tracking-wider text-center uppercase text-lightTitle dark:text-darkTitle">
                More from Wired
              </p>
            </div>
          </div>
          <div className="mt-10">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
              {morePosts.map((spost, index) => {
                return (
                  <div className="" key={index}>
                    <Link href={spost.node.slug}>
                      <div className="aspect-w-16 aspect-h-9 relative cursor-pointer">
                        <Image
                          src={spost.node.featuredImage.url}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    </Link>
                    <Link href={`/post/${spost.node.slug}`}>
                      <h2 className="mt-4 text-2xl font-inter font-bold text-lightTitle dark:text-darkTitle cursor-pointer ">
                        {spost.node.title}
                      </h2>
                    </Link>
                    <Link href={`/post/${spost.node.slug}`}>
                      <p className="mt-4 font-barlow text-lightText dark:text-darkText cursor-pointer">
                        {spost.node.excerpt}
                      </p>
                    </Link>
                    <Link href={`/categories/${spost.node.categories[0].slug}`}>
                      <h3 className="mt-2 font-spaceMono font-bold cursor-pointer text-sm tracking-wider">
                        {spost.node.categories[0].name}
                      </h3>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;

export async function getStaticProps({ params }) {
  const postDetails = (await getPostDetails(params.slug)) || [];
  const navCategories = (await getCategories()) || [];
  const morePosts = (await getMorePosts()) || [];

  return {
    props: {
      postDetails,
      navCategories,
      morePosts,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: "blocking",
  };
}
