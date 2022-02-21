import React from "react";
import Category from "./UI/Category";

const Categories = () => {
  return (
    <div className="py-4">
      <div className="grid md:grid-cols-3 grid-cols-1 xl:gap-10 lg:gap-8 gap-6">
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
