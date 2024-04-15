import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { useQuery } from "@tanstack/react-query";
import "../App.css";
import ty_button_play from "../public/typlayb.svg";
import blackhole from "../public/blackhole.svg";
import userRequest from "../utils/userRequest";
import { useParams } from "react-router-dom";

const View = () => {
  const { playkey } = useParams();
  const [enabledQuery, setEnabledQuery] = useState(true);
  const [selectedDivIndex, setSelectedDivIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(true);

  const { data, error, isLoading } = useQuery({
    queryKey: [`view_${playkey}`],
    queryFn: () => userRequest.get(`/view/${playkey}`),
    enabled: true, // Conditionally enable the query
    manual: false, // Prevent automatic execution
    refetchOnWindowFocus: false, // Disable refetching on window focus
    retry: false, // Retry once if it fails
    retryDelay: (retryCount) => retryCount * 1000, // Delay between retries
    onError: (error) => {
      // Optional error handling
      console.error("An error occurred:", error);
    },
  });
  console.log(data?.data?.data.play_list[0]);
  let dataInto = data?.data?.data;

  const handelRedirect = (link) => {
    setTimeout(() => {
      window.open(link);
    }, 1000);
  };

  const handleDivClick = (index) => {
    setSelectedDivIndex(index);
  };

  return (
    <>
      <div className="w-full flex flex-col lg:flex-row">
        <div
          className="w-full mx-auto lg:w-4/6"
          style={{
            // Hide scrollbar for Chrome, Safari, and Opera
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none", // Hide scrollbar for Firefox
            msOverflowStyle: "none", // Hide scrollbar for Internet Explorer and Edge
          }}
        >
          <div className="flex flex-col text-white rounded-lg  mx-10 lg:mx-auto">
            <div className="w-full">
              <div className="flex flex-col relative bg-transparent	">
                <img
                  src={dataInto?.logo?.url}
                  alt=""
                  className="lg:h-custom-lg sm:h-80 lg:w-full mx-auto rounded-lg "
                />
                <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                <div className="flex"></div>
                <p className="absolute inset-0 flex items-center justify-center ">
                  These Video will be open on any content sharing platforms
                </p>
                <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-10 text-white lg:w-2/6 lg:m-0">
          <div className=" bg-black-200   rounded-lg border  border-cyan-950	mx-10">
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
                {dataInto?.play_list.map((views, i) => {
                  return (
                    <div
                      className={`h-20 mx-4 rounded-md flex flex-row items-center hover:bg-gray-800 mt-1 ${
                        selectedDivIndex === i
                          ? "border-dashed border-2 border-slate-700"
                          : ""
                      }`}
                      key={i + 1}
                      onClick={() => {
                        handleDivClick(i);
                        handelRedirect(views.link);
                      }}
                    >
                      <div className="w-1/6 h-16 flex flex-row justify-center items-center ">
                        <p>{views.playNo}</p>
                        <img
                          src={dataInto?.logo?.url}
                          alt=""
                          className="h-4 pl-1"
                        />
                      </div>
                      <div className="w-2/6 h-16 mx-2 rounded-md  ">
                        {" "}
                        <img
                          src={dataInto?.logo?.url}
                          alt=""
                          className="h-16 w-full rounded-md"
                        />
                      </div>
                      <div className="w-3/6 h-16  ">
                        {" "}
                        <p> {views.acc_code} </p>
                        <p>Adilsha</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
      <h1 className="font-bold text-lg my-2  border-b-2  border-cyan-950">
        Adilsha play list
      </h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 place-content-center ">
        <div className="w-5/6 flex flex-col mx-auto h-80  text-white rounded-lg mt-1 md:h-48 sm:w-full ">
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
              <img src={ty_button_play} alt="" className=" w-4 h-4  flex" />
              <p className="font-bold text-xs	pl-1">2:20</p>
            </div>
          </div>
          <div className="w-full mx-auto my-auto h-56 bg-gray-800 rounded-lg md:h-40"></div>
        </div>

        <div className="w-5/6 flex flex-col mx-auto h-80   text-white rounded-lg mt-1 md:h-48 sm:w-full">
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
              <img src={ty_button_play} alt="" className=" w-4 h-4  flex" />
              <p className="font-bold text-xs	pl-1">2:20</p>
            </div>
          </div>
          <div className="w-full mx-auto my-auto h-56 bg-gray-800 rounded-lg md:h-40"></div>
        </div>
        <div className="w-5/6 flex flex-col mx-auto h-80   text-white rounded-lg mt-1 md:h-48 sm:w-full">
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
              <img src={ty_button_play} alt="" className=" w-4 h-4  flex" />
              <p className="font-bold text-xs	pl-1">2:20</p>
            </div>
          </div>
          <div className="w-full mx-auto my-auto h-56 bg-gray-800 rounded-lg md:h-40"></div>
        </div>

        <div className="w-34 "></div>
      </div>
      <style></style>
    </>
  );
};

export default View;
