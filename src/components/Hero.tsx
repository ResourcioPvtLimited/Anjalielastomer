import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="w-full flex items-center font-raleway font-bold min-h-screen">
      {/* Hero Content */}
  
        <div className=" h-full flex flex-col justify-center p-4 ml-10 w-[50%]">
          <h1 className="font-raleway text-5xl sm:text-6xl text-gray-900">
            Engineered{" "}
            <span className="text-orange-500">for</span>{" "}
            <br />
            <span className="text-5xl sm:text-6xl text-orange-500 block">
              the Future of
            </span>{" "}
            <span className="text-6xl sm:text-6xl text-orange-500 block">
              Rail-
              <span className="text-gray-900">Roads</span>
            </span>
          </h1>

          <div className="mt-10 flex items-center space-x-6">
            <button className="bg-orange-500 text-white px-7 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors">
              Explore Products
            </button>
            <button className="border border-orange-500 text-gray-900 hover:text-orange-600 hover:border-orange-600 transition-colors px-7 py-3 rounded-lg text-lg font-semibold flex items-center gap-2">
              <span>Learn more</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </button>
          </div>
        </div>


        <img
          src="/train.png"
          alt="Modern train"
          className="w-[50%] -mr-96"
        />
      




    </section>
  );
};

export default Hero;
