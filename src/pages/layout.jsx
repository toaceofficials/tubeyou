import classNames from "classnames";
import SideBar from "../components/sidebar";
import Header from "../components/header";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contentClasses = classNames(
    "pl-14 transition duration-200 ease-in-out h-screen ",

    isOpen ? "" : ""
  );
  const handleSidebarToggle = (isOpen) => {
    setIsOpen(isOpen);
  };

  return (
    <>
      <SideBar onToggle={handleSidebarToggle} />
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => handleSidebarToggle(false)}
        ></div>
      )}
      <div className={contentClasses} style={{ margin: 0 }}>
        <Header />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
