import Head from "next/head";
import Card from "../components/Card";
import { BsHandIndexThumb } from "react-icons/bs";

export default function Home({ articles, feature }) {
  return (
    <>
      <Head>
        <title>Augment</title>
        <meta
          name="description"
          content="Augment News is a daily news link aggregator featuring currently trending news from business, pop culture, sports, tech, and science sources across the web."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="grid w-full grid-cols-1 row-auto md:grid-cols-2 lg:gap-y-8 ">
        <a
          href={feature.url}
          target="_blank"
          rel="noreferrer"
          className="col-span-1 md:col-span-2"
        >
          <div className="relative h-48 mt-16 rounded-2xl sm:h-60 md:h-64 lg:h-80 xl:h-96">
            <img
              src={feature.urlToImage}
              alt={feature.title}
              className="object-cover w-full h-full rounded-2xl"
            />
            <div className="absolute rounded-2xl top-0 w-full h-full bg-gradient-to-b from-lightGradientBlue/5 to-highlightBlue/[.58]"></div>
            <div className="absolute bottom-0 left-0 flex items-center w-full p-2 text-left rounded-2xl h-2/6 backdrop-blur-sm">
              <h1 className="w-full text-xl line-clamp-1 text-backgroundWhite sm:text-base md:text-lg md:px-6 font-Inter">
                {feature.title}
              </h1>
            </div>
          </div>
        </a>

        <div className="w-40 mx-auto my-8 border-t-4 sm:w-60 md:w-80 md:col-span-2 border-highlightBlue"></div>

        <div className="col-span-1 mt-2 mb-8 md:col-span-2 md:mb-10">
          <h3 className="text-2xl text-darkGrey lg:text-3xl xl:text-4xl">
            <span className="border-b-4 border-highlightBlue">
              Current Headlines
            </span>
          </h3>
        </div>

        {articles.map((article) => {
          let key = article.publishedAt + article.number;
          return (
            <>
              <Card article={article} key={key} />
            </>
          );
        })}

        <a
          href="#top"
          className="flex items-center justify-center w-3/5 max-w-md col-span-1 gap-4 py-2 mx-auto my-24 bg-gray-200 rounded-md md:col-span-2 text-lightGrey font-Inter md:text-lg sm:w-4/5 sm:py-4"
        >
          <BsHandIndexThumb />
          <h3>Back To Top</h3>
        </a>
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=aa7502d584ce420682cfa2eba9559d0d`
  );
  const data = await res.json();
  const articles = data.articles;
  const withID = articles.map((article) => {
    let number = Math.floor(Math.random() * 10000);
    return { ...article, number };
  });

  const feature = withID.shift();
  return {
    props: {
      articles: withID,
      feature: feature,
    },
  };
};
