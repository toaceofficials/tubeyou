import React, { useEffect, useState } from "react";

const Header = ({CloseSuggestion}) => {
  const [isOpenBar, setBarOpen] = useState(false);

  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const suggestionData = ["Suggestion 1", "Suggestion 2", "Suggestion 3"];

  const handleInputChange = (event) => {
    const value = event.target.value.toLowerCase();
    console.log(value);
    setInputValue(value);

    const filteredSuggestions = suggestionData.filter((suggestion) =>
      suggestion.toLowerCase().includes(value)
    );
    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setSuggestions([]);
  };

  const handelSearchBar = () => {
    console.log("dddd");
    setBarOpen(true);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setBarOpen(false);
      }
    };

    handleResize(); // Call initially to set state based on initial window size

    window.addEventListener("resize", handleResize); // Add event listener

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up on component unmount
    };
  }, []); // Empty dependency array means it only runs once after the initial render

  return (
    <header className=" text-white py-2 fixed top-0 z-10 w-full bg-zinc-900">
      <div className="container mx-auto flex items-center">
        {!isOpenBar ? (
          <div className="w-5/6 flex flex-row items-center md:w-1/6 ">
            <svg
              className=" h-6 text-white "
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

            <h1 className=" text-lg font-bold ">Listed</h1>
          </div>
        ) : (
          <div className="flex w-4/5 flex-row flex h-10 bg-gray-950 mx-auto  rounded-2xl w-3/5 mx-auto md:hidden">
            <div className=" flex w-5/6">
              <input
                type="text"
                className="border-none outline-none bg-gray-950 text-gray-600 mx-auto h-10 w-4/5 my-auto"
                placeholder="Type somthing"
              />
            </div>
            <div className="flex w-1/6 ">
              <div className="mx-auto my-auto text-center">
                <button type="button">searchs</button>
              </div>
            </div>
          </div>
        )}

        <div className="w-3/6 flex text-white mx-2 hidden md:block mx-20 justify-center ">
          <div className="flex w-4/5 flex-row flex h-10  bg-zinc-950 mx-auto border border-zinc-700	 rounded-3xl w-3/5 mx-auto relative">
            <div className=" flex w-full ">
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                className="border-none outline-none bg-zinc-950 text-gray-600 mx-auto h-8 pb-1 w-4/5 my-auto"
                placeholder="Type somthing"
              />
            </div>
            {suggestions.length > 0 && (
              <div className="absolute w-full bg-gray-950  rounded-xl mt-11  overflow-hidden border border-blue-700	">
                {suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="px-4  py-2 cursor-pointer hover:bg-gray-800"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion}
                  </div>
                ))}
              </div>
            )}
            <div className="flex w-2/6 border border-zinc-700	rounded-3xl bg-zinc-800 hover:bg-zinc-700">
              <div className="mx-auto my-auto text-center">
                <button type="button">search</button>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-1/6 flex md:hidden">
          <ul className="mx-auto ">
            <li className="justify-center">
              <button
                className="h-7 w-7 rounded-xl border-none "
                onClick={() => handelSearchBar()}
              >
                s
              </button>
            </li>
          </ul>
        </div>
        <nav className="w-1/6 hidden md:block">
          <ul className="flex space-x-4">
            <li className="mx-auto pl-10">
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
