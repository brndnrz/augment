import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="relative h-48 mt-16 rounded-2xl sm:h-80 md:h-96 lg:h-[500px] xl:h-[650px]">
        <Image
          src="/augment-people.jpg"
          width={500}
          height={600}
          layout="fill"
          alt="Augment News About Page Cover Image"
          className="object-cover w-full h-full bg-center rounded-2xl"
        />
        <div className="absolute rounded-2xl top-0 w-full h-full bg-gradient-to-b from-lightGradientBlue/5 to-highlightBlue/[.58]"></div>
        <div className="absolute bottom-0 left-0 flex items-center w-full p-2 text-left rounded-2xl h-2/6 backdrop-blur-xs">
          {/* <h1 className="w-full text-sm text-xl line-clamp-1 text-backgroundWhite sm:text-base md:text-lg md:px-6 font-Inter">
            Augment News
          </h1> */}
        </div>
      </div>
      <div className="my-16 lg:max-w-[85%] mr-auto ">
        <h1 className="text-4xl">Augment</h1>
        <h3 className="mt-2 text-lightGrey">
          verb: to make greater, more numerous, or more intense
        </h3>
        <p className="mt-6 text-md xl:max-w-[70%] lg:mr-auto lg:text-lg">
          Finding the latest news articles isn&#39;t as simple as performing a
          browser search. With Publishers paying to the be in the top of most
          search results, and dedicated partners ensuring their news articles
          perform better than smaller outlets, the news most people are exposed
          to is actually kind of old. <br></br> <br></br> Augment delivers the
          latest news from the world&#39;s most trusted sources provided by our
          own API source. Articles are updated daily and are categorized by 6
          simple tabs that ensure all our provided article links are reached by
          their proper audience. <br></br> <br></br> Search functionality is
          currently offered to our patrons with extended service planned in the
          future. Until then please enjoy our tab sources that are always free
          to use. <br></br> <br></br> Have a question? Shoot us an{" "}
          <a
            href="mailto:ruizkidd@gmail.com?subject= Augment News Feedback"
            className="font-bold text-highlightBlue"
          >
            email!
          </a>
        </p>
      </div>
    </>
  );
};

export default About;
