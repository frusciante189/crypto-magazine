import Image from "next/image";
import React from "react";

const Newsletter = () => {
  return (
    <div className="min-h-[600px] py-4 flex items-center justify-center relative">
      <div className="bg-white relative z-20 px-8 py-14">
        <div className="grid grid-cols-2 gap-10">
          <div>
            <p>Sign up for the wired daily newsletter</p>
            <p>Our biggestt stories, delivered to your inbox every day.</p>
            <span>See all newsletters</span>
          </div>
          <div>input</div>
        </div>
      </div>
      <div className="absolute inset-0 z-10">
        <Image
          src="https://images.unsplash.com/photo-1616400619175-5beda3a17896?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Newsletter;
