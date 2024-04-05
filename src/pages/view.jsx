import React, { useState } from "react";
import classNames from "classnames";

import ty_button_play from "../public/typlayb.svg";
import blackhole from "../public/blackhole.svg";

import SideBar from "../components/sidebar";

const View = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contentClasses = classNames(
    "ml-0 transition duration-300 ease-in-out h-screen",
    isOpen ? "pl-64" : "pl-16"
  );
  return (
    <>
      <SideBar />
      <div className={contentClasses}>
        <div className="min-h-screen bg-gray-950 w-full  flex flex-row pt-2">
          <div
            class="w-full sm:w-4/6 overflow-y-scroll overscroll-y-auto h-screen scrollbar-hidden "
            style={{
              // Hide scrollbar for Chrome, Safari, and Opera
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none", // Hide scrollbar for Firefox
              msOverflowStyle: "none", // Hide scrollbar for Internet Explorer and Edge
            }}
          >
            <div className="flex flex-col text-white mx-auto w-5/6 bg-gray-950 px-3 py-5  rounded-lg  ">
              <div className="w-full">
                <div className="flex flex-col ">
                  <img
                    src={ty_button_play}
                    alt=""
                    className="h-32 my-1 lg:w-full h-80  mx-auto rounded-lg md:my-20"
                  />
                </div>
              </div>
              <h1 className="font-bold text-lg my-2  border-b-2  border-cyan-950">
                Adilsha play list
              </h1>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 place-content-center ">
                <div className="w-5/6 flex flex-col h-40  bg-gray-950 text-white mx-auto rounded-lg mt-1 md:h-48">
                  <div className="flex items-center flex-row h-6">
                    <div className="  w-1/6 img w-4 h-4 ">
                      <img
                        src={blackhole}
                        alt=""
                        className=" w-4 h-4 bg-gray-500 flex items-center rounded-2xl"
                      />
                    </div>
                    <div className="w-4/6">
                      {" "}
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
                    </div>
                    <div className="w-1/6 flex justify-end items-center ml-6">
                      <img
                        src={ty_button_play}
                        alt=""
                        className=" w-4 h-4  flex"
                      />
                      <p className="font-bold text-xs	pl-1">2:20</p>
                    </div>
                  </div>
                  <div className="w-full mx-auto my-auto h-32 bg-gray-800 rounded-lg md:h-40"></div>
                </div>

                <div className="w-5/6 flex flex-col h-40  bg-gray-950 text-white mx-auto rounded-lg mt-1 md:h-48">
                  <div className="flex items-center flex-row h-6">
                    <div className="  w-1/6 img w-4 h-4 ">
                      <img
                        src={blackhole}
                        alt=""
                        className=" w-4 h-4 bg-gray-500 flex items-center rounded-2xl"
                      />
                    </div>
                    <div className="w-4/6">
                      {" "}
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
                    </div>
                    <div className="w-1/6 flex justify-end items-center ml-6">
                      <img
                        src={ty_button_play}
                        alt=""
                        className=" w-4 h-4  flex"
                      />
                      <p className="font-bold text-xs	pl-1">2:20</p>
                    </div>
                  </div>
                  <div className="w-full mx-auto my-auto h-32 bg-gray-800 rounded-lg md:h-40"></div>
                </div>
                <div className="w-5/6 flex flex-col h-40  bg-gray-950 text-white mx-auto rounded-lg mt-1 md:h-48">
                  <div className="flex items-center flex-row h-6">
                    <div className="  w-1/6 img w-4 h-4 ">
                      <img
                        src={blackhole}
                        alt=""
                        className=" w-4 h-4 bg-gray-500 flex items-center rounded-2xl"
                      />
                    </div>
                    <div className="w-4/6">
                      {" "}
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
                    </div>
                    <div className="w-1/6 flex justify-end items-center ml-6">
                      <img
                        src={ty_button_play}
                        alt=""
                        className=" w-4 h-4  flex"
                      />
                      <p className="font-bold text-xs	pl-1">2:20</p>
                    </div>
                  </div>
                  <div className="w-full mx-auto my-auto h-32 bg-gray-800 rounded-lg md:h-40"></div>
                </div>
                <div className="w-5/6 flex flex-col h-40  bg-gray-950 text-white mx-auto rounded-lg mt-1 md:h-48">
                  <div className="flex items-center flex-row h-6">
                    <div className="  w-1/6 img w-4 h-4 ">
                      <img
                        src={blackhole}
                        alt=""
                        className=" w-4 h-4 bg-gray-500 flex items-center rounded-2xl"
                      />
                    </div>
                    <div className="w-4/6">
                      {" "}
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
                    </div>
                    <div className="w-1/6 flex justify-end items-center ml-6">
                      <img
                        src={ty_button_play}
                        alt=""
                        className=" w-4 h-4  flex"
                      />
                      <p className="font-bold text-xs	pl-1">2:20</p>
                    </div>
                  </div>
                  <div className="w-full mx-auto my-auto h-32 bg-gray-800 rounded-lg md:h-40"></div>
                </div>
                <div className="w-5/6 flex flex-col h-40  bg-gray-950 text-white mx-auto rounded-lg mt-1 md:h-48">
                  <div className="flex items-center flex-row h-6">
                    <div className="  w-1/6 img w-4 h-4 ">
                      <img
                        src={blackhole}
                        alt=""
                        className=" w-4 h-4 bg-gray-500 flex items-center rounded-2xl"
                      />
                    </div>
                    <div className="w-4/6">
                      {" "}
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
                    </div>
                    <div className="w-1/6 flex justify-end items-center ml-6">
                      <img
                        src={ty_button_play}
                        alt=""
                        className=" w-4 h-4  flex"
                      />
                      <p className="font-bold text-xs	pl-1">2:20</p>
                    </div>
                  </div>
                  <div className="w-full mx-auto my-auto h-32 bg-gray-800 rounded-lg md:h-40"></div>
                </div>
                <div className="w-5/6 flex flex-col h-40  bg-gray-950 text-white mx-auto rounded-lg mt-1 md:h-48">
                  <div className="flex items-center flex-row h-6">
                    <div className="  w-1/6 img w-4 h-4 ">
                      <img
                        src={blackhole}
                        alt=""
                        className=" w-4 h-4 bg-gray-500 flex items-center rounded-2xl"
                      />
                    </div>
                    <div className="w-4/6">
                      {" "}
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
                    </div>
                    <div className="w-1/6 flex justify-end items-center ml-6">
                      <img
                        src={ty_button_play}
                        alt=""
                        className=" w-4 h-4  flex"
                      />
                      <p className="font-bold text-xs	pl-1">2:20</p>
                    </div>
                  </div>
                  <div className="w-full mx-auto my-auto h-32 bg-gray-800 rounded-lg md:h-40"></div>
                </div>

                <div className="w-5/6 flex flex-col h-40  bg-gray-950 text-white mx-auto rounded-lg mt-1 md:h-48">
                  <div className="flex items-center flex-row h-6">
                    <div className="  w-1/6 img w-4 h-4 ">
                      <img
                        src={blackhole}
                        alt=""
                        className=" w-4 h-4 bg-gray-500 flex items-center rounded-2xl"
                      />
                    </div>
                    <div className="w-4/6">
                      {" "}
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
                    </div>
                    <div className="w-1/6 flex justify-end items-center ml-6">
                      <img
                        src={ty_button_play}
                        alt=""
                        className=" w-4 h-4  flex "
                      />
                      <p className="font-bold text-xs	pl-1">2:20</p>
                    </div>
                  </div>
                  <div className="w-full mx-auto my-auto h-32 bg-gray-800 rounded-lg md:h-40"></div>
                </div>

                <div className="w-34 "></div>
              </div>
              {/* <div className="flex flex-row h-20 bg-gray-100 rounded-xl mt-2">
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
              </div> */}
            </div>
          </div>
          <div className=" hidden md:block  w-2/6 text-white ">
            <div className=" bg-black-200  w-4/5 rounded-lg border  border-cyan-950	">
              <div className="h-10 p-2 font-bold text-sm py-auto ">
                Popural playlist
              </div>
              <hr />
              <div
                className="overflow-y-scroll overscroll-y-auto scrollbar-hidden "
                style={{
                  height: "500px",
                  // Hide scrollbar for Chrome, Safari, and Opera
                  WebkitOverflowScrolling: "touch",
                  scrollbarWidth: "none", // Hide scrollbar for Firefox
                  msOverflowStyle: "none", // Hide scrollbar for Internet Explorer and Edge
                }}
              >
                <div className=" flex flex-col py-3  ">
                  <div className=" h-20  mx-4 rounded-md flex flex-row items-center hover:bg-gray-800 ">
                    <div className="w-1/6 h-16 flex flex-row justify-center items-center ">
                      <p>12</p>
                      <img src={ty_button_play} alt="" className="h-4 pl-1" />
                    </div>
                    <div className="w-2/6 h-16 mx-2 rounded-md bg-gray-100"></div>
                    <div className="w-3/6 h-16  ">
                      {" "}
                      <p> The best verses </p>
                      <p>Adilsha</p>
                    </div>
                  </div>
                  <div className=" h-20  mx-4 rounded-md flex flex-row items-center hover:bg-gray-800 ">
                    <div className="w-1/6 h-16 flex flex-row justify-center items-center ">
                      <p>12</p>
                      <img src={ty_button_play} alt="" className="h-4 pl-1" />
                    </div>
                    <div className="w-2/6 h-16 mx-2 rounded-md bg-gray-100"></div>
                    <div className="w-3/6 h-16  ">
                      {" "}
                      <p> The best verses </p>
                      <p>Adilsha</p>
                    </div>
                  </div>
                  <div className=" h-20  mx-4 rounded-md flex flex-row items-center hover:bg-gray-800 ">
                    <div className="w-1/6 h-16 flex flex-row justify-center items-center ">
                      <p>12</p>
                      <img src={ty_button_play} alt="" className="h-4 pl-1" />
                    </div>
                    <div className="w-2/6 h-16 mx-2 rounded-md bg-gray-100"></div>
                    <div className="w-3/6 h-16  ">
                      {" "}
                      <p> The best verses </p>
                      <p>Adilsha</p>
                    </div>
                  </div>
                  <div className=" h-20  mx-4 rounded-md flex flex-row items-center hover:bg-gray-800 ">
                    <div className="w-1/6 h-16 flex flex-row justify-center items-center ">
                      <p>12</p>
                      <img src={ty_button_play} alt="" className="h-4 pl-1" />
                    </div>
                    <div className="w-2/6 h-16 mx-2 rounded-md bg-gray-100"></div>
                    <div className="w-3/6 h-16  ">
                      {" "}
                      <p> The best verses </p>
                      <p>Adilsha</p>
                    </div>
                  </div>

                  <div className=" h-20  mx-4 rounded-md flex flex-row items-center hover:bg-gray-800 ">
                    <div className="w-1/6 h-16 flex flex-row justify-center items-center ">
                      <p>12</p>
                      <img src={ty_button_play} alt="" className="h-4 pl-1" />
                    </div>
                    <div className="w-2/6 h-16 mx-2 rounded-md bg-gray-100"></div>
                    <div className="w-3/6 h-16  ">
                      {" "}
                      <p> The best verses </p>
                      <p>Adilsha</p>
                    </div>
                  </div>
                  <div className=" h-20  mx-4 rounded-md flex flex-row items-center hover:bg-gray-800 ">
                    <div className="w-1/6 h-16 flex flex-row justify-center items-center ">
                      <p>12</p>
                      <img src={ty_button_play} alt="" className="h-4 pl-1" />
                    </div>
                    <div className="w-2/6 h-16 mx-2 rounded-md bg-gray-100"></div>
                    <div className="w-3/6 h-16  ">
                      {" "}
                      <p> The best verses </p>
                      <p>Adilsha</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default View;
