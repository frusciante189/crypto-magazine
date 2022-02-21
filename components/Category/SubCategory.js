import React from "react";
import SubPost from "./UI/SubPost";
import SubSingle from "./UI/SubSingle";

const SubCategory = () => {
  return (
    <div className="py-10">
      <div className="grid grid-cols-12 border-b">
        <div className="col-span-3 space-y-10 border-r pr-4">
          <SubSingle />
          <SubSingle />
        </div>
        <div className="col-span-6">
          <SubPost />
        </div>
        <div className="col-span-3 space-y-10 border-l pl-4">
          <SubSingle />
          <SubSingle />
        </div>
      </div>
    </div>
  );
};

export default SubCategory;
