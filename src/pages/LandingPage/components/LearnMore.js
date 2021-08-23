import React from "react";

const LearnMore = () => {
  return (
    <div
      id="scrollHere"
      className="sm:flex flex-wrap justify-center items-center text-center gap-8 mt-20"
    >
      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6  shadow-lg rounded-lg dark:bg-gray-800">
        <div className="flex-shrink-0">
          <div className="flex items-center mx-auto justify-center h-48 w-48 rounded-md bg-indigo-500 text-white">
            <img
              className="object-contain pb-10"
              src="https://images.unsplash.com/photo-1595489154995-75e074c8ef20?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt=''
            />
          </div>
        </div>
        <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4 pb-0">
          Create a schedule
        </h3>
        <p className="text-md  text-gray-500 dark:text-gray-300 py-4">
          Encompassing today’s website design technology to integrated and build
          solutions relevant to your business.
        </p>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 mt-6 sm:mt-16 md:mt-20 lg:mt-24 bg-white shadow-lg rounded-lg dark:bg-gray-800">
        <div className="flex-shrink-0">
          <div className="flex items-center mx-auto justify-center h-48 w-40 rounded-md text-white">
            <img
              className="object-contain pb-10"
              src="https://images.unsplash.com/photo-1545074116-ba9228a4183c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3334&q=80"
              alt=''
            />
          </div>
        </div>
        <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4 pb-0">
          Track your plants
        </h3>
        <p className="text-md text-gray-500 dark:text-gray-300 py-4">
          Share relevant, engaging, and inspirational brand messages to create a
          connection with your audience.
        </p>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mt-6  px-4 py-4 bg-white shadow-lg rounded-lg dark:bg-gray-800">
        <div className="flex-shrink-0">
          <div className="flex items-center mx-auto justify-center h-36 w-40 rounded-md text-white">
            <img
              className="object-contain pb-10"
              src="https://images.unsplash.com/photo-1598880940371-c756e015fea1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt=''
            />
          </div>
        </div>
        <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4 pb-0">
          Get helpful tips & tricks
        </h3>
        <p className="text-md  text-gray-500 dark:text-gray-300 py-4">
          Let us help you level up your search engine game, explore our
          solutions for digital marketing for your business.
        </p>
      </div>
    </div>
  );
};

export default LearnMore;
