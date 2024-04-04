import React from "react";
import { Route, Routes } from "react-router-dom";
import Welcome from "../pages/welcome";
import View from "../pages/view";
import SideBar from "../components/sidebar";

function UserRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Welcome />} />
      <Route exact path="/view" element={<View />} />
      <Route exact path="/side" element={<SideBar />} />
    </Routes>
  );
}

export default UserRoutes;
