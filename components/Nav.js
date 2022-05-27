import React from "react";
import SearchBar from "../components/SearchBar";
import Link from "next/link";
import { AiFillThunderbolt, AiOutlineStock } from "react-icons/ai";
import { BsPersonBoundingBox } from "react-icons/bs";
import { MdSportsSoccer } from "react-icons/md";
import { RiSignalTowerFill } from "react-icons/ri";
import { IoMdGlobe } from "react-icons/io";

const Nav = () => {
  let date = new Date().toDateString();
  return (
    <>
      <div className="flex-col justify-center w-full text-center">
        <div className="md:flex md:items-end">
          <Link href="/">
            <h1 className="text-6xl cursor-pointer text-darkGrey font-Questrial">
              Augment
            </h1>
          </Link>
          <h3 className="text-lg text-darkGrey font-Inter md:ml-auto md:pb-2">
            {date}
          </h3>
        </div>
        <SearchBar />

        <div className="max-w-3xl mx-auto bg-gray-200 border-4 border-neutral-200 xl:max-w-4xl rounded-2xl font-Inter">
          <ul className="grid grid-cols-3 grid-rows-2 text-xs md:text-base sm:text-sm lg:grid-rows-1 lg:grid-cols-6 text-darkGrey">
            <Link href="/">
              <div className="flex items-center justify-center gap-2 p-1 border-2 border-transparent cursor-pointer lg:p-2 hover:bg-highlightBlue hover:text-backgroundWhite hover:rounded-xl">
                <AiFillThunderbolt />
                <li>Trending</li>
              </div>
            </Link>
            <Link href="/section/business">
              <div className="flex items-center justify-center gap-2 p-1 border-2 border-transparent cursor-pointer lg:p-2 hover:bg-highlightBlue hover:text-backgroundWhite hover:rounded-xl">
                <AiOutlineStock />
                <li>Business</li>
              </div>
            </Link>
            <Link href="/section/media">
              <div className="flex items-center justify-center gap-2 p-1 border-2 border-transparent cursor-pointer lg:p-2 hover:bg-highlightBlue hover:text-backgroundWhite hover:rounded-xl">
                <BsPersonBoundingBox />
                <li>Media</li>
              </div>
            </Link>
            <Link href="/section/sports">
              <div className="flex items-center justify-center gap-2 p-1 border-2 border-transparent cursor-pointer lg:p-2 hover:bg-highlightBlue hover:text-backgroundWhite hover:rounded-xl">
                <MdSportsSoccer />
                <li>Sports</li>
              </div>
            </Link>
            <Link href="/section/technology">
              <div className="flex items-center justify-center gap-2 p-1 border-2 border-transparent cursor-pointer lg:p-2 hover:bg-highlightBlue hover:text-backgroundWhite hover:rounded-xl">
                <RiSignalTowerFill />
                <li>Tech</li>
              </div>
            </Link>
            <Link href="/section/science">
              <div className="flex items-center justify-center gap-2 p-1 border-2 border-transparent cursor-pointer lg:p-2 hover:bg-highlightBlue hover:text-backgroundWhite hover:rounded-xl">
                <IoMdGlobe />
                <li>Science</li>
              </div>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
