import React from "react";
import Category from "./UI/Category";

const Categories = ({
  nftPosts,
  culturePosts,
  technologyPosts,
  metaversePosts,
  blockchainPosts,
  deFiPosts,
}) => {
  return (
    <div className="py-4">
      <div className="grid md:grid-cols-3 grid-cols-1 xl:gap-10 lg:gap-8 gap-6">
        <Category post={nftPosts} />
        <Category post={culturePosts} />
        <Category post={technologyPosts} />
        <Category post={metaversePosts} />
        <Category post={blockchainPosts} />
        <Category post={deFiPosts} />
      </div>
    </div>
  );
};

export default Categories;
