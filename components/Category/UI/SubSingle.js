import Image from "next/image";
import React from "react";

const SubSingle = () => {
  return (
    <div className="">
      <div className="aspect-w-16 aspect-h-9 relative">
        <Image
          src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h2 className="text-lightTitle dark:text-darkTitle text-2xl font-bold font-inter mt-4">
        Can You Be an NFT Artist and an Environmentalist
      </h2>
      <p className="mt-4 font-barlow dark:text-darkText text-lightText">
        Blockchain art’s carbon footprint is massive. Artists who care about the
        climate are trying new experiments.
      </p>
    </div>
  );
};

export default SubSingle;
