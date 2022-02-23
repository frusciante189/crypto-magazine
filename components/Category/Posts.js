import React from "react";
import SinglePost from "./UI/SinglePost";

const Posts = ({ categoryPosts }) => {
  return (
    <div className="py-10">
      <div className="grid grid-cols-1 gap-y-10">
        {categoryPosts.map((single, index) => {
          return <SinglePost post={single.node} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Posts;
