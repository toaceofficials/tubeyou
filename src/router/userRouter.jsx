import React from "react";
import { Route, Routes } from "react-router-dom";
import Welcome from "../pages/welcome";
import View from "../pages/view";
import SideBar from "../components/sidebar";

function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/view" element={<View />} />
      <Route path="/side" element={<SideBar />} />
    </Routes>
  );
}

export default UserRoutes;
