import { useState } from "react";
import ty_button_play from "../public/typlayb.svg";
import classNames from "classnames";
import home from "../public/icons/home.icon.svg";
import account from "../public/icons/account.icons.svg";
import settings from "../public/icons/setting.icon.svg";
import { Link } from "react-router-dom";

const SideBar = ({ onToggle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSidebarToggle = (isOpen) => {
    setIsOpen(isOpen);
  };

  const handleOnclick = (action) => {
    setIsOpen(action);
    onToggle(action);
  };

  const sidebarClasses = classNames(
    "fixed top-0  z-50 h-screen overflow-y-auto ",
    isOpen
      ? "w-60 bg-zinc-900 text-white transition-width duration-100 ease-in-out "
      : "w-16 bg-zinc-900 text-gray-200 transition-width duration-100 ease-in-out"
  );
  const sidebarItems = classNames(
    "px-1 py-1 rounded-md hover:bg-gray-700 mx-auto",
    isOpen
      ? "px-4 py-3 rounded-md hover:bg-gray-700 "
      : "px-2 py-3 rounded-md hover:bg-gray-700 mx-auto"
  );

  return (
    <>
      <div className={sidebarClasses}>
        <div className="flex items-center py-4 px-4 cursor-pointer mx-auto">
          {isOpen ? (
            <div className=" flex flex-row w-60 ">
              <div className="w-3/4 flex ">
                <svg
                  className=" h-6 text-white "
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
                <h1 className=" text-lg font-bold pl-2">Listed</h1>
              </div>
              <div className="w-1/4 flex flex justify-end">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 100 91"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => handleOnclick(isOpen ? false : true)}
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M66.9462 3.34632C65.6427 2.95801 64.1331 2.89343 62.7495 3.1668C61.3659 3.44017 60.2216 4.02909 59.5684 4.80401L26.5826 44.0244C26.1995 44.4789 26 44.9803 26 45.4886C26 45.997 26.1995 46.4983 26.5826 46.9528L59.5684 86.1732C59.8884 86.5603 60.3342 86.906 60.8799 87.1902C61.4257 87.4744 62.0607 87.6916 62.7483 87.8292C63.436 87.9668 64.1626 88.0221 64.8864 87.992C65.6101 87.9619 66.3167 87.8469 66.9654 87.6536C67.614 87.4604 68.1919 87.1927 68.6658 86.8661C69.1396 86.5394 69.5 86.1602 69.7261 85.7504C69.9523 85.3405 70.0397 84.9081 69.9834 84.4781C69.9271 84.048 69.7282 83.6289 69.3982 83.2448L37.6548 45.4886L69.3982 7.73246C70.0513 6.95752 70.16 6.06006 69.7001 5.23751C69.2403 4.41495 68.2497 3.73467 66.9462 3.34632Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          ) : (
            <svg
              width="30"
              height="30"
              viewBox="0 0 100 91"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => handleOnclick(isOpen ? false : true)}
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M33.0538 3.34632C34.3573 2.95801 35.8669 2.89343 37.2505 3.1668C38.6341 3.44017 39.7784 4.02909 40.4316 4.80401L73.4174 44.0244C73.8005 44.4789 74 44.9803 74 45.4886C74 45.997 73.8005 46.4983 73.4174 46.9528L40.4316 86.1732C40.1116 86.5603 39.6658 86.906 39.1201 87.1902C38.5743 87.4744 37.9393 87.6916 37.2517 87.8292C36.564 87.9668 35.8374 88.0221 35.1136 87.992C34.3899 87.9619 33.6833 87.8469 33.0346 87.6536C32.386 87.4604 31.8081 87.1927 31.3342 86.8661C30.8604 86.5394 30.5 86.1602 30.2739 85.7504C30.0477 85.3405 29.9603 84.9081 30.0166 84.4781C30.0729 84.048 30.2718 83.6289 30.6018 83.2448L62.3452 45.4886L30.6018 7.73246C29.9487 6.95752 29.84 6.06006 30.2999 5.23751C30.7597 4.41495 31.7503 3.73467 33.0538 3.34632Z"
                fill="white"
              />
            </svg>
          )}
        </div>
        {/* Sidebar content goes here */}
        <ul className="">
          <SidebarItems
            label={"Home"}
            icon={home}
            isOpen={isOpen}
            sidebarItems={sidebarItems}
            url={"/"}
          />

          {/* <SidebarItems
            label={"History"}
            isOpen={isOpen}
            sidebarItems={sidebarItems}
          /> */}

          {/* Add more list items as needed */}
        </ul>
        <ul className="mt-6 absolute bottom-0 w-full ">
          <SidebarItems
            icon={settings}
            label={"Settings"}
            isOpen={isOpen}
            sidebarItems={sidebarItems}
            url={"settings"}
          />

          <SidebarItems
            label={"Account"}
            isOpen={isOpen}
            icon={account}
            sidebarItems={sidebarItems}
            url={"account"}
          />

          {/* Add more list items as needed */}
        </ul>
      </div>
    </>
  );
};

const SidebarItems = ({ label, sidebarItems, isOpen, icon, url }) => (
  <li className={sidebarItems}>
    {isOpen ? (
      <Link to={url}>
        {" "}
        <div
          className="flex flex-row mx-3 py-2 items-center"
          style={{ fontSize: "14px" }}
        >
          <img src={icon} alt="" className="h-6 " />
          <a href="#" className="ml-4">
            {label}
          </a>
        </div>
      </Link>
    ) : (
      <Link to={url}>
        <div className="flex flex-col items-center">
          <img src={icon} alt="" className="mx-auto h-5 " />
          <p className="pt-1" style={{ fontSize: "9px" }}>
            {label}
          </p>
        </div>
      </Link>
    )}
  </li>
);

export default SideBar;
