import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import classNames from "classnames";
import SideBar from "../components/sidebar";
import Header from "../components/header";
import ty_button_play from "../public/typlayb.svg";
import blackhole from "../public/blackhole.svg";
import userRequest from "../utils/userRequest";
import { Link } from "react-router-dom";

const Welcome = () => {
  const [enabledQuery, setEnabledQuery] = useState(true);
  const { data, error, isLoading } = useQuery({
    queryKey: ["home"],
    queryFn: () => userRequest.get("/"),
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
  let adsbygoogle;

  useEffect(() => {
    // Load AdSense ads
    (adsbygoogle = window.adsbygoogle || []).push({});
  }, []);
  console.log(data?.data?.data);
  return (
    <>
      <div className=" w-full ">
        <div className="flex text-white mx-auto px-12">
          {" "}
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1284850173204460"
            crossOrigin="anonymous"
          ></script>
          {/* <!-- first portions --> */}
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-1284850173204460"
            data-ad-slot="1391362237"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
        </div>
        <div className="flex flex-col w-full mt-3 mx-auto">
          <div className="header  font-bold text-white mx-28">
            <p> best of Playlists</p>
          </div>
          <div className=" mt-4 ">
            <div className="grid gr20-cols-1 gap-y-8 place-content-center md:grid-cols-2 sm:grid-cols-2 mx-10 lg:grid-cols-4 lg:mx-28">
              {data?.data?.data.map((plays, i) => {
                return (
                  <Link to={`view/${plays?.listId}`}>
                    <div
                      className="w-60 flex flex-col h-40 text-white mx-auto rounded-lg mt-1 md:h-48 w-72"
                      key={i + 1}
                    >
                      <div className="flex items-center flex-row h-6">
                        <div className="  w-1/6 img w-4 h-4 ">
                          <img
                            src={plays?.logo?.url}
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
                      <div className="w-full mx-auto my-auto h-32 rounded-lg md:h-40">
                        <img
                          src={plays?.logo?.url}
                          className=" w-full h-full overflow-hidden rounded-lg"
                          alt=""
                        />
                      </div>
                    </div>
                  </Link>
                );
              })}

              <div className="w-34 "></div>
            </div>
          </div>
        </div>
      </div>

      {/* </section> */}
    </>
  );
};

export default Welcome;
