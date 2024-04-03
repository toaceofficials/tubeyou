import React, { useState } from "react";
import classNames from "classnames";

import ty_button_play from "../public/typlayb.svg";
import SideBar from "../components/sidebar";

const View = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const sidebarClasses = classNames(
    "fixed top-0 left-0 z-50 h-screen overflow-y-auto transition duration-200 ease-in-out",
    isOpen ? "w-64 bg-gray-800 text-white" : "w-16 bg-gray-900 text-gray-200"
  );

  const contentClasses = classNames(
    "ml-0 transition duration-200 ease-in-out",
    isOpen ? "pl-64" : "pl-16"
  );
  return (
    <>
      <SideBar />
      <div className={contentClasses}>
        <div className="min-h-screen bg-gray-950 w-full">
          <div className="flex  flex-col text-white mx-auto w-5/6 bg-gray-900 px-3 py-5 min-h-screen rounded-lg md:w-auto">
            <div className="w-full">
              <div className="flex flex-col ">
                <h1 className="font-bold text-lg py-auto">Adilsha play list</h1>
                <img
                  src={ty_button_play}
                  alt=""
                  className="w-full h-32 mx-auto m-2 rounded-lg"
                />
                <hr className="w-full mx-auto" />
              </div>
            </div>
            <div className="flex flex-row h-20 bg-gray-100 rounded-xl mt-2">
              <div className="w-2/5 flex justify-center items-center">
                <div className="h-16 w-24 bg-gray-950 rounded-lg ">
                  <img className="h-16 w-24" src={ty_button_play} alt="" />
                </div>
              </div>
              <div className="w-3/5 flex text-gray-900 justify-start items-center">
                <div className="h-16 w-full ">
                  <p
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      maxWidth: "16ch",
                    }}
                  >
                    {" "}
                    Quran is a gift from Almighty
                  </p>
                  <div className="flex flex-row jusitfy-center items-center mt-1">
                    <img
                      src={ty_button_play}
                      alt=""
                      className=" w-4 h-4  flex "
                    />
                    <p className="font-bold text-xs	pl-1">2:20</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row h-20 bg-gray-100 rounded-xl mt-2">
              <div className="w-2/5 flex justify-center items-center">
                <div className="h-16 w-24 bg-gray-950 rounded-lg">
                  <img className="h-16 w-24" src={ty_button_play} alt="" />
                </div>
              </div>
              <div className="w-3/5 flex text-gray-900 justify-start items-center">
                <div className="h-16 w-full ">
                  <p
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      maxWidth: "16ch",
                    }}
                  >
                    {" "}
                    Quran is a gift from Almighty
                  </p>
                  <div className="flex flex-row jusitfy-center items-center mt-1">
                    <img
                      src={ty_button_play}
                      alt=""
                      className=" w-4 h-4  flex "
                    />
                    <p className="font-bold text-xs	pl-1">2:20</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row h-20 bg-gray-100 rounded-xl mt-2">
              <div className="w-2/5 flex justify-center items-center">
                <div className="h-16 w-24 bg-gray-950 rounded-lg">
                  <img className="h-16 w-24" src={ty_button_play} alt="" />
                </div>
              </div>
              <div className="w-3/5 flex text-gray-900 justify-start items-center">
                <div className="h-16 w-full ">
                  <p
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      maxWidth: "16ch",
                    }}
                  >
                    {" "}
                    Quran is a gift from Almighty
                  </p>
                  <div className="flex flex-row jusitfy-center items-center mt-1">
                    <img
                      src={ty_button_play}
                      alt=""
                      className=" w-4 h-4  flex "
                    />
                    <p className="font-bold text-xs	pl-1">2:20</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
