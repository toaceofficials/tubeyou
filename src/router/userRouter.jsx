import React from "react";
import { Route, Routes } from "react-router-dom";
import Welcome from "../pages/welcome";
import View from "../pages/view";
import SideBar from "../components/sidebar";
import Layout from "../pages/layout";

function UserRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route exact path="/" element={<Welcome />} />
        <Route exact path="/view" element={<View />} />
        <Route exact path="/side" element={<SideBar />} />
      </Route>
    </Routes>
  );
}

export default UserRoutes;
