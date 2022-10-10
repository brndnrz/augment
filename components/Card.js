import React from "react";

const Card = ({ article }) => {
  const { title, url, urlToImage, source } = article;
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="mb-8  w-full max-w-sm mx-auto h-80 sm:h-96 sm:w-10/12 lg:h-[34rem] rounded-2xl relative "
    >
      {/* <div className="w-full max-w-sm mx-auto  h-80 sm:h-96 sm:w-10/12 lg:h-[34rem] rounded-2xl relative"> */}
      <img
        src={urlToImage ? urlToImage : "/noimage.svg"}
        alt={title}
        className="object-cover w-full h-full rounded-2xl"
      />
      <div className="absolute top-0 w-full h-full rounded-2xl bg-gradient-to-b from-lightGradientBlue/10 to-highlightBlue/[.58]"></div>
      <div className="absolute bottom-0 left-0 flex items-center w-full p-2 text-center rounded-2xl h-2/6 backdrop-blur-sm">
        <h1 className="w-4/5 mx-auto text-sm line-clamp-3 text-backgroundWhite sm:text-base md:text-lg font-Inter">
          {title}
        </h1>
      </div>
      {/* </div> */}
    </a>
  );
};

export default Card;
