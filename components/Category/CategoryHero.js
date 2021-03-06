import React from "react";
import CategoryHeroPost from "./UI/CategoryHeroPost";
import CategoryHeroSingle from "./UI/CategoryHeroSingle";

const CategoryHero = ({ posts }) => {
  return (
    <div className="pt-4 mt-10 border-b">
      <div className="grid lg:grid-cols-12 grid-cols-1">
        <div className="col-span-8">
          <CategoryHeroPost post={posts[0].node} />
        </div>
        <div className="col-span-4">
          <div className="lg:pl-4 lg:border-l">
            <div className="grid grid-cols-1 gap-y-10">
              {posts.slice(1).map((post, index) => {
                return <CategoryHeroSingle post={post.node} key={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryHero;
