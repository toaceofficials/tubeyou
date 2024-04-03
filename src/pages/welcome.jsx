import ty_button_play from "../public/typlayb.svg";
import blackhole from "../public/blackhole.svg";

const Welcome = () => {
  return (
    <>
      <header className=" w-auto text-center">
        <h1>Adilsha</h1>
      </header>
      {/* <section className=""> */}
      <div className="min-h-screen bg-gray-950 w-full">
        <div className="flex text-white mx-auto px-12">
          <div className="flex flex-row w-4/5 flex h-10 bg-gray-950 mx-auto  rounded-2xl md:w-2/5 ">
            <div className=" flex w-4/5">
              <input
                type="text"
                className="border-none outline-none bg-gray-950 text-gray-600 mx-auto h-8 w-4/5 my-auto"
                placeholder="Type somthing"
              />
            </div>
            <div className="flex w-1/5 ">
              <div className="mx-auto my-auto text-center">
                <button>search</button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mx-auto w-4/6 mt-3">
          <div className="header pl-3 font-bold text-white">
            <p> best of Playlists</p>
          </div>
          <div className=" mt-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 place-content-center">
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
          </div>
        </div>
      </div>

      {/* </section> */}
    </>
  );
};

export default Welcome;
