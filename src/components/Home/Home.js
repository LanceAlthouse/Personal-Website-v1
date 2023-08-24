import React from "react";

const Home = () => {
  return (
    <div className="font-mono font-medium Consolas flex flex-col items-center justify-center">
      <div className="text-left lg:pt-96">
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