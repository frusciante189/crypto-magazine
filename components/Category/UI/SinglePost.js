import Image from "next/image";
import React from "react";

const SinglePost = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-9">
        <div className="grid grid-cols-12 gap-x-10">
          <div className="aspect-square relative col-span-5">
            <Image
              src="https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="col-span-7 my-auto">
            <p className="font-mono uppercase text-sm dark:text-darkTitle text-lightTitle">
              Ideas
            </p>
            <h2 className="mt-2 font-inter font-bold text-3xl">
              The Case of the Creepy Algorithm That ‘Predicted’ Teen Pregnancy
            </h2>
            <p className="mt-4 font-barlow font-medium">
              A government leader in Argentina hailed the AI, which was fed
              invasive data about girls. The feminist pushback could inform the
              future of health tech.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
