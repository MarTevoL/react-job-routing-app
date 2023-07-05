import React from "react";
import SearchAppBar from "./SearchAppBar";
import GridJobCard from "./GridJobCard";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <SearchAppBar />
      <GridJobCard />
      <Outlet />
    </>
  );
}

export default Home;
