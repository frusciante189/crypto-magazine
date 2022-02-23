import Image from "next/image";
import Link from "next/link";
import React from "react";
import moment from "moment";

const SinglePost = ({ post }) => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-9">
        <div className="grid grid-cols-12 gap-x-10">
          <Link href={`/post/${post.slug}`}>
            <div className="aspect-square relative col-span-5 cursor-pointer">
              <Image
                src={post.featuredImage.url}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </Link>
          <div className="col-span-7 my-auto">
            <Link href={`/post/${post.slug}`}>
              <div>
                <p className="font-mono uppercase text-sm dark:text-darkTitle text-lightTitle">
                  {moment(post.createdAt).format("DD MMM YYYY")}
                </p>
                <h2 className="mt-2 font-inter font-bold text-3xl cursor-pointer hover:underline decoration-2 underline-offset-2 dark:text-darkTitle text-lightTitle">
                  {post.title}
                </h2>
                <p className="mt-4 font-barlow font-medium cursor-pointer dark:text-darkText text-lightText">
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
