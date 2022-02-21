import Image from "next/image";
import React from "react";

const Newsletter = () => {
  return (
    <div className="md:min-h-[600px] md:py-4 py-12 flex items-center justify-center px-4 md:px-8 relative">
      <div className="dark:bg-white bg-darkBg relative z-20 px-8 py-14 ">
        <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-10 gap-8 items-center">
          <div className="">
            <p className="lg:text-4xl md:text-3xl font-inter font-bold uppercase max-w-md dark:text-lightTitle text-darkTitle">
              Sign up for the wired daily newsletter
            </p>
            <p className="md:mt-6 mt-4 font-inter font-medium text-sm dark:text-lightTitle text-darkTitle">
              Our biggestt stories, delivered to your inbox every day.
            </p>
            <p className="mt-1 md:text-sm text-xs dark:text-gray-500 text-gray-300 font-medium font-inter underline underline-offset-1 dark:decoration-gray-500 decoration-gray-300">
              See all newsletters
            </p>
          </div>
          <div>
            <div className="max-w-sm flex space-x-4 relative">
              <input
                type="text"
                placeholder="Your Email"
                className="border md:py-3 py-2 md:pl-3 pl-2 w-full bg-transparent peer placeholder-transparent focus:outline-none relative z-20 caret-darkText dark:caret-lightText"
              />
              <label
                htmlFor="email"
                className="absolute left-1 -top-2.5 text-sm md:peer-placeholder-shown:text-base peer-placeholder-shown:text-sm peer-placeholder-shown:text-darkText dark:peer-placeholder-shown:text-lightText 
                peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-darkText dark:peer-focus:text-lightText peer-focus:text-sm dark:peer-focus:bg-white 
                peer-focus:bg-darkBg peer-focus:px-2 transition-all duration-200 ease-in-out font-mono z-10 peer-focus:z-20"
              >
                Your Email
              </label>
              <button
                className="font-spaceMono font-bold text-sm dark:bg-slate-700 dark:text-darkTitle text-lightTitle bg-slate-300 px-4 uppercase
              dark:hover:bg-slate-800 hover:bg-slate-200 transition-colors duration-200 transform ease-in-out"
              >
                Submit
              </button>
            </div>
            <div className="max-w-sm mt-3">
              <p className="text-xs dark:text-lightText text-darkText">
                By signing up you agree to our User Agreement (including the
                class action waiver and arbitration provisions), our Privacy
                Policy
              </p>
            </div>
          </div>
        </div>
      </div>
      <Image
        src="https://images.unsplash.com/photo-1616400619175-5beda3a17896?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto"
        layout="fill"
        objectFit="cover"
        priority
        className="absolute inset-0 z-10"
      />
    </div>
  );
};

export default Newsletter;
