import { useState } from "react";
import ty_button_play from "../public/typlayb.svg";
import classNames from "classnames";

const SideBar = ({ onToggle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleOnclick = (action) => {
    setIsOpen(action);
    onToggle(!isOpen);
  };

  const sidebarClasses = classNames(
    "fixed top-0 left-0 z-50 h-screen overflow-y-auto ",
    isOpen
      ? "w-60 bg-gray-800 text-white transition-width duration-100 ease-in-out "
      : "w-16 bg-gray-900 text-gray-200 transition-width duration-100 ease-in-out"
  );
  const sidebarItems = classNames(
    "px-2 py-3 rounded-md hover:bg-gray-700 mx-auto",
    isOpen
      ? "px-4 py-3 rounded-md hover:bg-gray-700 "
      : "px-2 py-3 rounded-md hover:bg-gray-700 mx-auto"
  );



  return (
    <>
      <div className={sidebarClasses}>
        <div className="flex items-center h-16 px-4 cursor-pointer  mx-auto">
          {isOpen ? (
            <div className="w-5/6 flex flex-row mx-auto">
              <div className="w-3/4 flex">
                <h4 className="mx-auto font-bold text-lg">Listed</h4>
              </div>
              <div className="w-1/4 flex">
                <svg
                  className="w-6 h-6 text-white mx-auto"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => handleOnclick(isOpen ? false : true)}
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
            </div>
          ) : (
            <svg
              className="w-6 h-6 text-white justify-end "
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => handleOnclick(isOpen ? false : true)}
            >
              <path
                d="M4 6H20M4 12H20M4 18H11Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
        {/* Sidebar content goes here */}
        <ul className="mt-6">
          <li className={sidebarItems}>
            {isOpen ? (
              <div className="flex flex-row">
                <img src={ty_button_play} alt="" className="h-7 ml-2" />
                <a href="#" className="ml-5">
                  Item 1
                </a>
              </div>
            ) : (
              <img src={ty_button_play} alt="" className="mx-auto h-7 " />
            )}
          </li>
          <li className={sidebarItems}>
            {isOpen ? (
              <div className="flex flex-row">
                <img src={ty_button_play} alt="" className="h-7 ml-2" />
                <a href="#" className="ml-5">
                  Item 1
                </a>
              </div>
            ) : (
              <img src={ty_button_play} alt="" className="mx-auto h-7 " />
            )}
          </li>
          {/* Add more list items as needed */}
        </ul>
        <ul className="mt-6 absolute bottom-0 w-full ">
          <li className={sidebarItems}>
            {isOpen ? (
              <div className="flex flex-row">
                <img src={ty_button_play} alt="" className="h-7 ml-2" />
                <a href="#" className="ml-5">
                  Item 1
                </a>
              </div>
            ) : (
              <img src={ty_button_play} alt="" className="mx-auto h-7 " />
            )}
          </li>
          <li className={sidebarItems}>
            {isOpen ? (
              <div className="flex flex-row">
                <img src={ty_button_play} alt="" className="h-7 ml-2" />
                <a href="#" className="ml-5">
                  Item 1
                </a>
              </div>
            ) : (
              <img src={ty_button_play} alt="" className="mx-auto h-7 " />
            )}
          </li>
          {/* Add more list items as needed */}
        </ul>
      </div>
    </>
  );
};
export default SideBar;
