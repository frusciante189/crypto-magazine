import React from "react";
import PostHeroPost from "./UI/PostsHeroPost";
import SingleHeroPost from "./UI/SingleHeroPost";

const PostHero = ({ posts }) => {
  return (
    <div className="pt-4 mt-10 border-b">
      <div className="grid lg:grid-cols-12 grid-cols-1">
        <div className="col-span-8">
          <PostHeroPost post={posts[0]} />
        </div>
        <div className="col-span-4">
          <div className="lg:pl-4 lg:border-l">
            <div className="grid grid-cols-1 gap-y-10">
              {posts.slice(1).map((post, index) => {
                return <SingleHeroPost post={post} key={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostHero;
