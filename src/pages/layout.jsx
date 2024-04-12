import classNames from "classnames";
import SideBar from "../components/sidebar";
import Header from "../components/header";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contentClasses = classNames(
    " flex flex-col ml-20 transition duration-200 ease-in-out h-screen ",

    isOpen ? "" : ""
  );
  const handleSidebarToggle = (isOpen) => {
    setIsOpen(isOpen);
  };

  return (
    <>
      {/* <Helmet>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1284850173204460"
          crossorigin="anonymous"
        ></script>
      </Helmet> */}
      <SideBar onToggle={handleSidebarToggle} />
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => handleSidebarToggle(false)}
        ></div>
      )}
      <div className={contentClasses}>
        <div>
          <Header />
        </div>
        <div className="mt-16">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
