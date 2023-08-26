import React from "react";

const Home = () => {
  return (
    <div className="font-mono font-medium Consolas flex flex-col items-center justify-center">
      <div className="text-left 2xl:pt-96 2xl:pl-12 xl:pt-80 xl:pl-12 lg:pt-[19.5rem] lg:pl-12 md:pt-[18rem] md:pl-12 sm:pt-64 sm:pl-12 pt-16 pl-12 pr-12">
        <h1 className="text-4xl text-white">
          Hello, I'm <span className="text-green-600">Lance Althouse</span>,
        </h1>
        <h2 className="text-3xl text-white">
          an enthusiast in software engineering and homelab building.
        </h2>
      </div>
    </div>
  );
};

export default Home;