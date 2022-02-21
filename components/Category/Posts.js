import React from "react";
import SinglePost from "./UI/SinglePost";

const Posts = () => {
  return (
    <div className="py-10">
      <div className="grid grid-cols-1 gap-y-10">
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
      </div>
    </div>
  );
};

export default Posts;
