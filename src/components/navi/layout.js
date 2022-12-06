import React from "react";
import {Outlet} from "react-router-dom";
import NavigationBar from "./navigationbar";

const Layout = () => {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  );
};

export default Layout;