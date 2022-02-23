import Image from "next/image";
import React from "react";
import Navbar from "../../components/Navbar";
import { getCategories, getPostDetails, getPosts } from "../../library";
import moment from "moment";
import Link from "next/link";

const index = ({ navCategories, postDetails }) => {
  return (
    <>
      <Navbar categories={navCategories} />
      <div className="lg:py-20 sm:py-16 py-12">
        <div className="max-w-5xl mx-auto lg:px-8 sm:px-6 px-4">
          <div>
            <div className="mb-5">
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
              <p className="font-inter font-bold text-4xl dark:text-darkTitle text-lightTitle mt-5 text-center">
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
            <div>
              <p>image alt here</p>
            </div>
            <div>
              <div
                className="font-barlow prose max-w-none prose-lg"
                dangerouslySetInnerHTML={{ __html: postDetails.content.html }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;

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
