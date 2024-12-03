
import React from "react";
import { Outlet } from "react-router-dom";

import SideBar from "./SideBar";
const DashboardLayout = () => {


 

  return (
    <div style={{display:"flex"}}>
     <SideBar/> 
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
