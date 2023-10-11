import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
