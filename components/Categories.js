import React from "react";
import Category from "./UI/Category";

const Categories = () => {
  return (
    <div className="py-4">
      <div className="grid grid-cols-3 gap-10">
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </div>
    </div>
  );
};

export default Categories;
