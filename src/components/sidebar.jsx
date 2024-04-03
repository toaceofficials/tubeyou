import { useState } from "react";
import ty_button_play from "../public/typlayb.svg";
import classNames from "classnames";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleMouseEnter = () => setIsOpen(true);

  const handleMouseLeave = () => setIsOpen(false);
  const sidebarClasses = classNames(
    "fixed top-0 left-0 z-50 h-screen overflow-y-auto transition duration-200 ease-in-out",
    isOpen ? "w-64 bg-gray-800 text-white" : "w-16 bg-gray-900 text-gray-200"
  );

  const contentClasses = classNames(
    "ml-0 transition duration-200 ease-in-out",
    isOpen ? "pl-64" : "pl-16",
    "min-h-screen w-full bg-gray-950"
  );

  return (
    <>
      <div
        className={sidebarClasses}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex items-center justify-center h-16 px-4 cursor-pointer">
          <svg
            className="w-6 h-6 text-white"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20M4 12H20M4 18H11Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        {/* Sidebar content goes here */}
        <ul className="mt-6">
          <li className="px-4 py-2 rounded-md hover:bg-gray-700">
            <a href="#">Item 1</a>
          </li>
          <li className="px-4 py-2 rounded-md hover:bg-gray-700">
            <a href="#">Item 2</a>
          </li>
          {/* Add more list items as needed */}
        </ul>
      </div>
    </>
  );
};
export default SideBar;
