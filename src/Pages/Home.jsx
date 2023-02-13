import React from "react";
import { Outlet } from "react-router-dom";
import Counter from "../Components/Counter";
import Header from "../Components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Counter data={""} />
    </div>
  );
};

export default Home;
