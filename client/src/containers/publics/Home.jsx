import React from "react";
import { Outlet } from "react-router-dom";
import { HEADER, NAVIGATION } from ".";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center m-auto h-full border border-red-500">
      <HEADER />
      <NAVIGATION/>
      <div className="w-1100 flex flex-col items-center justify-start">
        <Outlet/>
      </div>
    </div>
  );
};

export default Home;
