import React from "react";
import { AttachMoneyOutlinedIcon, ToggleOnOutlinedIcon } from "./icons";
import { people } from "../assets";

const Middle = () => {
  return (
    <>
      {/* First Middle Component */}
      <div className="bg-[#272727] w-[25rem] px-8 py-5 rounded-3xl mb-5">
        <div className="flex flex-row justify-around items-center">
          <div className="bg-black px-3 py-0 text-5xl rounded-full">
            <AttachMoneyOutlinedIcon className="text-white -mt-2" />
          </div>
          <div className="text-white flex flex-col">
            <div className="mb-3">
              <p className="-mt-2 text-lg font-light">Total Revenue</p>
              <h1 className="text-2xl font-extrabold">$92,983</h1>
            </div>
            <div className="bg-gray-200 h-2 dark:bg-gray-700">
              <div
                className="bg-blue-600 h-2 dark:bg-blue-500"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      {/* Second Component */}
      <div className="flex flex-row gap-4 text-white mb-5">
        {/* Second Middle Left Component */}
        <div className="bg-[#272727] w-[12rem] px-8 py-3 rounded-3xl">
          <h1 className="text-lg font-extrabold">Travel</h1>
          <h2 className="text-[13px] mt-1 font-bold">Mobile Application</h2>
          <p className="text-xs mt-2 mb-3 font-extralight">Seen By</p>
          <img className="mb-3" src={people} alt="people" />
          <div className="flex flex-row gap-5 mb-3">
            <p className="text-sm px-4 py-1 rounded-xl bg-[#3827b1]">Tour</p>
            <p className="text-sm px-4 py-1 rounded-xl bg-black">Trip</p>
          </div>
          <p className="text-sm px-4 py-1 rounded-xl bg-black">Transport</p>
        </div>
        {/* Second Middle Right Component */}
        <div className="bg-[#272727] w-[12rem] px-8 py-3 rounded-3xl">
          <h1 className="text-lg font-extrabold">Hotel</h1>
          <h2 className="text-[13px] mt-1 font-bold">Dashboard</h2>
          <p className="text-xs mt-2 mb-3 font-extralight">Seen By</p>
          <img className="mb-3" src={people} alt="people" />
          <div className="flex flex-row gap-5 mb-3">
            <p className="text-sm px-4 py-1 rounded-xl bg-[#3827b1]">Tour</p>
            <p className="text-sm px-4 py-1 rounded-xl bg-black">Trip</p>
          </div>
          <p className="text-sm px-4 py-1 rounded-xl bg-black">Transport</p>
        </div>
      </div>
      {/* Last Middle Component */}
      <div className="bg-[#272727] w-[25rem] px-5 text-center py-5 rounded-3xl">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-white text-extrabold text-lg ml-5">
            Free Slots Available
          </h1>
          <ToggleOnOutlinedIcon className="text-lg text-extrabold text-[#3827b1]" />
        </div>
        <div className="mt-2">
          <div className="mx-5 flex flex-row gap-[1.75rem] text-white">
            <div className="flex flex-col items-center p-6 rounded-3xl  bg-[#ff545f]">
              <h1 className="text-3xl font-extrabold">12</h1>
              <h2 className="text-sm font-bold">June</h2>
            </div>
            <div className="flex flex-col items-center p-6 rounded-3xl bg-black">
              <h1 className="text-3xl font-extrabold">18</h1>
              <h2 className="text-sm font-bold">June</h2>
            </div>
            <div className="flex flex-col items-center p-6 rounded-3xl bg-black">
              <h1 className="text-3xl text-extrabold">20</h1>
              <h2 className="text-sm text-bold">June</h2>
            </div>
          </div>
          <div className="mt-5 mx-5 flex flex-row gap-[1.75rem] text-white">
            <div className="flex flex-col items-center p-6 rounded-3xl  bg-black">
              <h1 className="text-3xl font-extrabold">02</h1>
              <h2 className="text-sm font-bold">July</h2>
            </div>
            <div className="flex flex-col items-center p-6 rounded-3xl bg-black">
              <h1 className="text-3xl font-extrabold">10</h1>
              <h2 className="text-sm font-bold">July</h2>
            </div>
            <div className="flex flex-col items-center p-6 rounded-3xl bg-black">
              <h1 className="text-3xl text-extrabold">15</h1>
              <h2 className="text-sm text-bold">July</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Middle;
