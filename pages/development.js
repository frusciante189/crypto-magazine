import Image from "next/image";
import React from "react";
import Navbar from "../components/Navbar";

const development = () => {
  return (
    <>
      <Navbar />
      <div className="dark:bg-darkBg bg-white transition-all transform duration-500 ease-in-out lg:py-6 sm:py-4 py-2">
        <div className="max-w-7xl mx-auto lg:px-8 sm:px-6 px-4">
          <div>
            <h1 className="text-center text-5xl font-mono max-w-4xl mx-auto">
              Full Stack Blockchain Developer Yol Haritası
            </h1>
            <p>
              Tailwind CSS, React ve Next ile Modern Front-End dünyasını
              tanıyoruz ve daha sonra Blockchain teknolojisine geçiş yapıyoruzs
            </p>
            <div className="mt-10">
              <div className="md:border-t-2 border-black dark:border-white">
                <div className="flex space-x-6 items-center">
                  <div className="dark:bg-white bg-black dark:text-lightTitle text-darkTitle md:max-w-max max-w-full px-3 py-2 sm:py-1.5 flex-1">
                    <p className="font-spaceMono uppercase text-sm font-bold tracking-wider select-none pointer-events-none">
                      Tailwind CSS
                    </p>
                  </div>
                  <p className="dark:text-darkTitle text-lightTitle font-spaceMono font-bold uppercase text-xs md:block hidden select-none pointer-events-none">
                    Daha fazlası
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <div className="grid grid-cols-3 gap-x-10">
                  <div className="aspect-w-1 aspect-h-1 relative overflow-hidden">
                    <Image
                      layout="fill"
                      objectFit="cover"
                      src="https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1561&q=80"
                    />
                  </div>
                  <div className="aspect-w-1 aspect-h-1 relative overflow-hidden">
                    <Image
                      layout="fill"
                      objectFit="cover"
                      src="https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1561&q=80"
                    />
                  </div>
                  <div className="aspect-w-1 aspect-h-1 relative overflow-hidden">
                    <Image
                      layout="fill"
                      objectFit="cover"
                      src="https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1561&q=80"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <div className="md:border-t-2 border-black dark:border-white">
                <div className="flex space-x-6 items-center">
                  <div className="dark:bg-white bg-black dark:text-lightTitle text-darkTitle md:max-w-max max-w-full px-3 py-2 sm:py-1.5 flex-1">
                    <p className="font-spaceMono uppercase text-sm font-bold tracking-wider select-none pointer-events-none">
                      React
                    </p>
                  </div>
                  <p className="dark:text-darkTitle text-lightTitle font-spaceMono font-bold uppercase text-xs md:block hidden select-none pointer-events-none">
                    Daha fazlası
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <div className="grid grid-cols-3 gap-x-10">
                  <div className="aspect-w-1 aspect-h-1 relative overflow-hidden">
                    <Image layout="fill" objectFit="cover" src={img} />
                  </div>
                  <div className="aspect-w-1 aspect-h-1 relative overflow-hidden">
                    <Image layout="fill" objectFit="cover" src={img} />
                  </div>
                  <div className="aspect-w-1 aspect-h-1 relative overflow-hidden">
                    <Image layout="fill" objectFit="cover" src={img} />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <div className="md:border-t-2 border-black dark:border-white">
                <div className="flex space-x-6 items-center">
                  <div className="dark:bg-white bg-black dark:text-lightTitle text-darkTitle md:max-w-max max-w-full px-3 py-2 sm:py-1.5 flex-1">
                    <p className="font-spaceMono uppercase text-sm font-bold tracking-wider select-none pointer-events-none">
                      Next
                    </p>
                  </div>
                  <p className="dark:text-darkTitle text-lightTitle font-spaceMono font-bold uppercase text-xs md:block hidden select-none pointer-events-none">
                    Daha fazlası
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <div className="grid grid-cols-3 gap-x-10">
                  <div className="aspect-w-1 aspect-h-1 relative overflow-hidden">
                    <Image layout="fill" objectFit="cover" src={img} />
                  </div>
                  <div className="aspect-w-1 aspect-h-1 relative overflow-hidden">
                    <Image layout="fill" objectFit="cover" src={img} />
                  </div>
                  <div className="aspect-w-1 aspect-h-1 relative overflow-hidden">
                    <Image layout="fill" objectFit="cover" src={img} />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <div className="md:border-t-2 border-black dark:border-white">
                <div className="flex space-x-6 items-center">
                  <div className="dark:bg-white bg-black dark:text-lightTitle text-darkTitle md:max-w-max max-w-full px-3 py-2 sm:py-1.5 flex-1">
                    <p className="font-spaceMono uppercase text-sm font-bold tracking-wider select-none pointer-events-none">
                      Solidity
                    </p>
                  </div>
                  <p className="dark:text-darkTitle text-lightTitle font-spaceMono font-bold uppercase text-xs md:block hidden select-none pointer-events-none">
                    Daha fazlası
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <div className="grid grid-cols-3 gap-x-10">
                  <div className="aspect-w-1 aspect-h-1 relative overflow-hidden">
                    <Image layout="fill" objectFit="cover" src={img} />
                  </div>
                  <div className="aspect-w-1 aspect-h-1 relative overflow-hidden">
                    <Image layout="fill" objectFit="cover" src={img} />
                  </div>
                  <div className="aspect-w-1 aspect-h-1 relative overflow-hidden">
                    <Image layout="fill" objectFit="cover" src={img} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default development;
