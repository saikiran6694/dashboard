import React from "react";
import {
  EmailOutlinedIcon,
  CalendarTodayOutlinedIcon,
  BarChartOutlinedIcon,
  FolderOpenOutlinedIcon,
  ArticleOutlinedIcon,
} from "./icons";

const LeftSide = () => {
  return (
    <>
      <div className="bg-[#272727] w-[13rem] px-5 py-4 rounded-3xl">
        <h1 className="text-2xl text-[#ff545f] font-extrabold mx-2">Hira R.</h1>
        <p className="mt-1 text-white mx-2">UI/UX Designer</p>

        <div className="mt-10 text-white flex flex-row gap-10 text-center">
          <div>
            <p className="font-extrabold">125</p>
            <p className="font-light">Projects</p>
          </div>
          <div>
            <p className="font-extrabold">$124</p>
            <p className="font-light">Revenue</p>
          </div>
        </div>
      </div>
      {/* Second Left Part */}
      <div className="mt-5 bg-[#272727] w-[13rem] px-8 py-6 rounded-3xl text-white">
        <div className="mx-3">
          <div className="flex justify-start items-center gap-5 mb-6">
            <div className="-mx-1 p-2 bg-black rounded-lg">
              <FolderOpenOutlinedIcon />
            </div>
            <p>Dashboard</p>
          </div>
          <div className="flex justify-start items-center gap-7 mb-6">
            <EmailOutlinedIcon />
            <p>Email</p>
          </div>
          <div className="flex justify-start items-center gap-7 mb-6">
            <CalendarTodayOutlinedIcon />
            <p>Calender</p>
          </div>
          <div className="flex justify-start items-center gap-7 mb-6">
            <BarChartOutlinedIcon />
            <p>Graph</p>
          </div>
          <div className="flex justify-start items-center gap-7">
            <ArticleOutlinedIcon />
            <p>Forms</p>
          </div>
        </div>
      </div>
      {/* Third left part */}
      <div className="mt-5 bg-[#3827b1] w-[13rem] p-4 pt-7 rounded-3xl text-white">
        <div className="-mt-3 mx-3">
          <h1 className="mb-3 text-white text-xl">Go Pro</h1>
          <p className="mb-3 text-sm">Upgrade your plan to get pro benefits</p>
        </div>
        <button className="bg-black text-sm p-3 rounded-s-full rounded-ee-full ml-[50px]">
          Let's Start
        </button>
      </div>
    </>
  );
};

export default LeftSide;
