import React, { useState } from "react";

const Header = () => {
  const [isOpenBar, setBarOpen] = useState(false);

  const handelSearchBar = () => {
    console.log('dddd');
    setBarOpen(true);
  };
  return (
    <header className="bg-gray-800 text-white py-2">
      <div className="container mx-auto flex items-center">
        {!isOpenBar ? (
          <div className="w-5/6 flex items-center mx-3 md:w-1/6 ">
            <h1 className="text-lg font-bold">Listed</h1>
          </div>
        ) : (
          <div className="flex w-4/5 flex-row flex h-10 bg-gray-950 mx-auto  rounded-2xl w-3/5 mx-auto ">
            <div className=" flex w-5/6">
              <input
                type="text"
                className="border-none outline-none bg-gray-950 text-gray-600 mx-auto h-10 w-4/5 my-auto"
                placeholder="Type somthing"
              />
            </div>
            <div className="flex w-1/6 ">
              <div className="mx-auto my-auto text-center">
                <button type="button">search</button>
              </div>
            </div>
          </div>
        )}

        <div className="w-3/6 flex text-white mx-2 hidden md:block mx-20 justify-center ">
          <div className="flex w-4/5 flex-row flex h-10 bg-gray-950 mx-auto  rounded-2xl w-3/5 mx-auto ">
            <div className=" flex w-5/6">
              <input
                type="text"
                className="border-none outline-none bg-gray-950 text-gray-600 mx-auto h-10 w-4/5 my-auto"
                placeholder="Type somthing"
              />
            </div>
            <div className="flex w-1/6 ">
              <div className="mx-auto my-auto text-center">
                <button type="button">search</button>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-1/6 flex ">
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
