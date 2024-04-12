import { useState } from "react";

import { useMutation } from "@tanstack/react-query";
import userRequest from "../utils/userRequest";

const Create = () => {
  const [inputCount, setInputCount] = useState(1);
  const [playList, setPlayLists] = useState(Array(inputCount).fill(""));
  const [logo, setFile] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const mutation = useMutation({
    mutationFn: (data) => {
      console.log(data);
      const newFormData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        newFormData.append(key, value);
      });
      return userRequest.post(`/list/add`, newFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    },
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
      if (error.response?.data?.message && error.response.data.message !== "") {
        setLoginError(error.response.data.message);
      } else if (error.code === "ERR_NETWORK") {
        console.log(error.message);
        setLoginError(error.response.data.message);
      } else {
        setLoginError("An error occurred during register");
      }
    },
  });

  const handleFileChange = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };
  // Function to handle form submission
  const handleSubmit = async (e) => {
    try {
      console.log({...formData, logo, playList});
      e.preventDefault();
      mutation.mutate({ ...formData, logo, playList });
      // Send form data to backend API
      // Optionally, handle success
    } catch (error) {
      console.error("Error:", error);
      // Optionally, handle errors
    }
  };

  const handleInputChange = (index, value) => {
    console.log(playList);
    const newInputValues = [...playList];
    newInputValues[index] = value;
    setPlayLists(newInputValues);
  };
  const handleAddInput = () => {
    console.log("feef");
    setInputCount((prevCount) => prevCount + 1);
  };
    const handelInputOnData = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
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
                        onChange={handelInputOnData}
                        value={formData.name}
                        name="name"
                        type="text"
                        className="border border-blue-400 w-full mx-6 h-full items-center rounded-lg text-gray-950"
                        required
                      />
                    </div>
                  </div>

                  <div className=" h-14 rounded-xl mt-2 flex flex-row">
                    <div className="w-1/4  flex justify-center items-center">
                      <div className="h-full w-full mx-auto flex items-center justify-center rounded-lg border border-blue-400 bg-gray-950 ">
                        Logo
                      </div>
                    </div>
                    <div className="w-3/4 flex ">
                      <input
                        className="block w-full mx-6 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        aria-describedby="file_input_help"
                        id="file_input"
                        type="file"
                        name="logo"
                        onChange={handleFileChange}
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
                        onChange={handelInputOnData}
                        value={formData.description}
                        name="description"
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
                      <div
                        className=" h-14 rounded-xl mt-2 flex flex-row"
                        key={index + 1}
                      >
                        <div className="w-1/4  flex justify-center items-center">
                          <div className="h-full w-full mx-9 flex items-center justify-center rounded-lg border border-blue-400 bg-gray-950 ">
                            Link {index + 1}
                          </div>
                        </div>
                        <div className="w-3/4 flex items-center justify-center">
                          <input
                            key={index}
                            type="text"
                            value={playList[index]}
                            onChange={(e) =>
                              handleInputChange(index, e.target.value)
                            }
                            className="border border-blue-400 w-full mx-6 h-full items-center rounded-lg text-gray-950"
                          />
                        </div>
                      </div>
                    );
                  })}
                  <div className="flex justify-end py-5 ">
                    <button
                      onClick={handleSubmit}
                      type="submit"
                      className="items-center mr-5 w-20 rounded-lg h-10 bg-gray-700 hover:bg-gray-900"
                    >
                      Submit
                    </button>
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

export default Create;
