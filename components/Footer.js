import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="grid items-end w-full grid-cols-2 p-6 text-white sm:px-8 sm:h-40 md:h-44 md:px-16 md:py-8 lg:px-20 lg:py-10 lg:h-56 xl:px-32 xl:py-12 h-36 bg-highlightBlue">
      <Link href="/">
        <h1 className="text-5xl cursor-pointer lg:text-6xl xl:text-7xl font-Questrial">
          Augment
        </h1>
      </Link>
      <div className="flex flex-col items-end text-lg lg:text-2xl font-Inter">
        <Link href="/about">
          <h3 className="cursor-pointer ">About</h3>
        </Link>
        <Link href="/about">
          <h3 className="cursor-pointer ">Contact</h3>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
