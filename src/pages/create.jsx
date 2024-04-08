import { useState } from "react";

const Create = () => {
  const [inputCount, setInputCount] = useState(1);

  const handleAddInput = () => {
    console.log("feef");
    setInputCount((prevCount) => prevCount + 1);
  };
  console.log(inputCount);
  return (
    <>
      <div className="flex text-white">
        <div className=" mx-auto w-5/6  ">
          <div className=" min-h-96  mx-auto mt-10 rounded-lg bg-gray-800 ">
            <div className="flex flex-row h-10 bg-gray-800 rounded-lg border border-blue-400">
              <div className="w-1/2 flex">
                <h1 className="text-center flex items-center mx-auto">
                  Add Playlists
                </h1>
              </div>
              <hr className="w-10 mt-5" />
              <div className="w-1/2 flex">
                <button
                  className="mx-auto w-20 rounded-lg flex items-center justify-center bg-gray-950 text-white"
                  onClick={handleAddInput}
                >
                  Add
                </button>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="w-1/2">
                <div className="mx-10  bg-gray-800 py-5">
                  <div className=" h-14 rounded-xl mt-2 flex flex-row">
                    <div className="w-1/4  flex justify-center items-center">
                      <div className="h-full w-full mx-auto flex items-center justify-center rounded-lg border border-blue-400 bg-gray-950 ">
                        Name
                      </div>
                    </div>
                    <div className="w-3/4 flex items-center justify-center">
                      <input
                        type="text"
                        className="border border-blue-400 w-full mx-6 h-full items-center rounded-lg text-gray-950"
                      />
                    </div>
                  </div>

                 
                  <div className=" h-14 rounded-xl mt-2 flex flex-row">
                    <div className="w-1/4  flex justify-center items-center">
                      <div className="h-full w-full mx-auto flex items-center justify-center rounded-lg border border-blue-400 bg-gray-950 ">
                        Discription
                      </div>
                    </div>
                    <div className="w-3/4 flex ">
                      <textarea
                        style={{ width: "400px", height: "100px" }}
                        type="text"
                        className="border border-blue-400 w-full mx-6 h-full items-center rounded-lg text-gray-950"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-1/2">
                <div className="mx-10  bg-gray-800 py-5">
                  {[...Array(inputCount)].map((_, index) => {
                    return (
                      <div className=" h-14 rounded-xl mt-2 flex flex-row">
                        <div className="w-1/4  flex justify-center items-center">
                          <div className="h-full w-full mx-9 flex items-center justify-center rounded-lg border border-blue-400 bg-gray-950 ">
                            {index + 1}
                          </div>
                        </div>
                        <div className="w-3/4 flex items-center justify-center">
                          <input
                            key={index}
                            type="text"
                            className="border border-blue-400 w-full mx-6 h-full items-center rounded-lg text-gray-950"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
