import Image from "next/image";
import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import { getCategories, getPostDetails, getPosts } from "../../library";
import moment from "moment";
import Link from "next/link";
import "prismjs/themes/prism-oneDark.css";
import Prism from "prismjs";

const Index = ({ navCategories, postDetails }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <>
      <Navbar categories={navCategories} />
      <div className="lg:py-20 sm:py-16 py-12 dark:bg-darkBg bg-white transition-all transform duration-500 ease-in-out">
        <div className="max-w-5xl mx-auto lg:px-8 sm:px-6 px-4">
          <div>
            <div className="mb-10">
              <div className="flex space-x-3 items-center">
                <Link href={`/categories/${postDetails.categories[0].slug}`}>
                  <div className="dark:bg-white bg-black dark:text-lightTitle text-darkTitle md:max-w-max max-w-full px-3 py-2 sm:py-1.5 flex-1 cursor-pointer">
                    <p className="font-spaceMono uppercase text-sm font-bold tracking-wider select-none">
                      {postDetails.categories[0].name}
                    </p>
                  </div>
                </Link>
                <p className="dark:text-darkTitle text-lightTitle font-mono uppercase text-sm select-none pointer-events-none">
                  {moment(postDetails.createdAt).format("DD MMMM YYYY")}
                </p>
              </div>
              <p className="font-inter font-bold text-5xl dark:text-darkTitle text-lightTitle mt-5 text-center">
                {postDetails.title}
              </p>
            </div>
            <div className="relative aspect-video">
              <Image
                src={postDetails.featuredImage.url}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="mt-10">
              <div
                className="font-barlow language-javascript prose max-w-none prose-lg prose-img:mx-auto prose-img:max-h-[700px] prose-img:object-cover leading-snug prose-zinc dark:prose-invert"
                dangerouslySetInnerHTML={{ __html: postDetails.content.html }}
              />
            </div>
            <div className="border-t-2 border-b">
              <p>Topics</p>
              <div>
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
    </>
  );
};

export default Index;

export async function getStaticProps({ params }) {
  const postDetails = (await getPostDetails(params.slug)) || [];
  const navCategories = (await getCategories()) || [];

  return {
    props: {
      postDetails,
      navCategories,
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
