import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { useQuery } from "@tanstack/react-query";
import "../App.css";
import ty_button_play from "../public/typlayb.svg";
import blackhole from "../public/blackhole.svg";
import userRequest from "../utils/userRequest";
import { Link, useParams } from "react-router-dom";
import PlayerCard from "../components/playercard";

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
  console.log(data?.data?.data);
  let dataInto = data?.data?.data?.play_list;
  let Playlists = data?.data?.data?.list;
  console.log("list" + Playlists);

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
          <div className="flex flex-col text-white rounded-lg mx-1 lg:mx-10 ">
            <div className="w-full">
              <div className="flex flex-col relative bg-transparent	">
                <img
                  src={dataInto?.logo?.url}
                  alt=""
                  className="h-56 lg:h-custom-lg sm:h-80 lg:w-full mx-auto rounded-lg "
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
          <div className=" bg-black-200   rounded-lg border  border-cyan-950	mx-1 md:mx-10">
            <div className="h-10 p-2 font-bold text-sm py-auto ">Playlist</div>
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
                      className={`h-16 mx-4 px-3 py-3 rounded-md flex flex-row items-center hover:bg-gray-800 mt-2 ${
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
                      <div className="w-6 h-13 flex flex-row justify-center items-center lg:w-8">
                        <p>{views.playNo}</p>
                        <img
                          src={dataInto?.logo?.url}
                          alt=""
                          className="h-4 pl-1"
                        />
                      </div>
                      <div className=" flex items-center w-2/6 h-16 mx-2 rounded-md sm:w-1/6 md:w-1/4 ">
                        {" "}
                        <img
                          src={dataInto?.logo?.url}
                          alt=""
                          className="h-14 w-full rounded-md"
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
      <h1 className="font-bold text-lg my-2  border-b-2  border-cyan-950 ">
        Adilsha play list
      </h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-5 place-content-center mx-1">
        {Playlists?.map((plays, i) => {
          return (
            <Link to={`view/${plays?.listId}`} key={plays.listId}>
              <PlayerCard plays={plays}></PlayerCard>
            </Link>
          );
        })}

        <div className="w-34 "></div>
      </div>
      <style></style>
    </>
  );
};

export default View;
