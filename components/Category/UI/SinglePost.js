import Image from "next/image";
import Link from "next/link";
import React from "react";
import moment from "moment";

const SinglePost = ({ post }) => {
  return (
    <div className="grid grid-cols-12">
      <div className="lg:col-span-9 col-span-12">
        <div className="md:grid md:grid-cols-12 lg:gap-x-10 md:gap-x-5">
          <Link href={`/post/${post.slug}`}>
            <div className="lg:aspect-w-1 lg:aspect-h-1 aspect-w-16 aspect-h-9 relative md:col-span-5 cursor-pointer">
              <Image
                src={post.featuredImage.url}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </Link>
          <div className="md:col-span-7 my-auto">
            <Link href={`/post/${post.slug}`}>
              <div className="md:mt-0 mt-2">
                <p className="font-mono uppercase text-sm dark:text-darkTitle text-lightTitle">
                  {moment(post.createdAt).format("DD MMM YYYY")}
                </p>
                <h2 className="mt-2 font-inter font-bold text-3xl cursor-pointer hover:underline decoration-2 underline-offset-2 dark:text-darkTitle text-lightTitle">
                  {post.title}
                </h2>
                <p className="mt-4 font-barlow  cursor-pointer dark:text-darkText text-lightText">
                  {post?.excerpt}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
