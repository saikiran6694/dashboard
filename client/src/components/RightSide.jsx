import React from "react";
import { client, Hira, Second, Third, Fourth, Fifth } from "../assets";
import {
  ArrowRightAltOutlinedIcon,
  KeyboardArrowDownOutlinedIcon,
  MoreVertOutlinedIcon,
} from "./icons";

const RightSide = () => {
  return (
    <>
      {/* First Right Component */}
      <div className="bg-[#272727] w-[35rem] pt-5 rounded-3xl">
        <div className="flex flex-row gap-4">
          <img height={50} width={100} src={client} alt="client" />
          <div className="text-white w-96">
            <div className="flex flex-row justify-between items-center">
              <h1 className="text-3xl font-extrabold">Dear Client</h1>
              <KeyboardArrowDownOutlinedIcon className="text-2xl" />
            </div>
            <p className="mt-2">
              <span>{"   "}</span>Join our community.
              <br /> It helps In managing projects{" "}
            </p>
          </div>
        </div>
      </div>
      {/* Second Right Component */}
      <div className="bg-[#272727] w-[35rem] px-6 p-4 rounded-3xl mt-5 relative">
        <div className="flex flex-row justify-between items-center w-[30rem]">
          <div className="text-white">
            <h1 className="text-xl font-extrabold mb-2">Transaction Details</h1>
            <h2 className="text-lg text-bold">Hi Hira</h2>
          </div>
          <img
            src={Hira}
            width={50}
            height={50}
            alt="user"
            className="rounded-full"
          />
        </div>
        <div className="flex flex-row justify-between items-start text-white mt-3">
          <div className="flex flex-col">
            <h1 className="text-xl font-extrabold mb-2">$4,763.40</h1>
            <p className="text-sm font-light">Available Balance</p>
          </div>
          <p className="mr-10">****3863</p>
        </div>
        <div className="my-5 flex flex-row justify-start items-center gap-2">
          <div className="bg-black rounded-full p-2 text-white ">
            <ArrowRightAltOutlinedIcon />
          </div>

          <img
            src={Second}
            width={35}
            height={35}
            alt="clients"
            className="rounded-full"
          />
          <img
            src={Third}
            width={40}
            height={40}
            alt="clients"
            className="rounded-full"
          />
          <img
            src={Fourth}
            width={40}
            height={40}
            alt="clients"
            className="rounded-full"
          />
          <img
            src={Fifth}
            width={40}
            height={40}
            alt="clients"
            className="rounded-full"
          />
        </div>
        <div className="mb-2 bg-[#ff545f] absolute bottom-3 right-7 w-24 rounded-full text-white px-7 py-2 flex justify-end items-end">
          <button className="text-lg font-extrabold">Send</button>
        </div>
      </div>
      <div className="flex flex-row mt-5 w-[35rem] gap-5">
        {/* Last Left Right Component */}
        <div className="bg-[#272727] w-[17rem] px-6 py-6 rounded-3xl relative">
          <div className="flex flex-row text-white justify-between items-center mb-3">
            <h1 className="text-lg font-extrabold">Project Details</h1>
            <MoreVertOutlinedIcon className="text-xl font-extrabold" />
          </div>
          <h1 className="text-2xl text-[#ff545f] font-extrabold mb-3">
            Hira R.
          </h1>
          <h2 className="text-sm text-white font-light mb-7">UI/UX Designer</h2>
          <h2 className="text-sm text-white font-extrabold mb-3">
            Project Progress
          </h2>
          <div className="text-white">
            <p className="text-sm text-bold absolute right-8 bottom-13 ">75%</p>
          </div>
          <br />
          <div className="bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
            <div
              className="bg-blue-600  h-1.5 rounded-full dark:bg-blue-500"
              style={{ width: "75%" }}
            ></div>
          </div>
        </div>
        {/* Last Left Right Component */}
        <div className="bg-[#272727] w-[17rem] px-6 py-6 rounded-3xl relative">
          <div className="text-white flex flex-row justify-between items-center mb-3">
            <h1 className="text-lg font-extrabold">Project Progress</h1>
            <MoreVertOutlinedIcon className="text-xl font-extrabold" />
          </div>

          <div className="mt-10 ml-[4rem] w-20 flex flex-row justify-center items-center p-6 bg-[#ff545f] rounded-full">
            <h1 className="text-2xl font-extrabold text-white">75% </h1>
          </div>

          <p className="text-sm text-extralight text-white mt-7 bottom-4">
            3 Remaining Projects
          </p>
        </div>
      </div>
    </>
  );
};

export default RightSide;
