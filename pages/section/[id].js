import { useRouter } from "next/router";
import Card from "../../components/Card";
import { BsHandIndexThumb } from "react-icons/bs";

const Page = ({ articles, section }) => {
  const router = useRouter();
  const page = router.query.id;

  let str = section.toString();
  let topic = str.charAt(0).toUpperCase() + str.slice(1);

  const firstArticle = articles[0];
  const { title, url, urlToImage, source } = firstArticle;

  return (
    <>
      <div className="grid grid-cols-1 row-auto mt-16 mb-16 md:grid-cols-2 lg:gap-y-8">
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="col-span-1 md:col-span-2"
        >
          <div className="relative h-48 rounded-2xl sm:h-60 md:h-64 lg:h-80 xl:h-96">
            <img
              src={urlToImage}
              alt={title}
              className="object-cover w-full h-full rounded-2xl"
            />
            <div className="absolute rounded-2xl top-0 w-full h-full bg-gradient-to-b from-lightGradientBlue/5 to-highlightBlue/[.58]"></div>
            <div className="absolute bottom-0 left-0 flex items-center w-full p-2 text-left rounded-2xl h-2/6 backdrop-blur-sm">
              <h1 className="w-full text-xl line-clamp-1 text-backgroundWhite sm:text-base md:text-lg md:px-6 font-Inter">
                {title}
              </h1>
            </div>
          </div>
        </a>

        <div className="w-40 mx-auto my-8 border-t-4 sm:w-60 md:w-80 md:col-span-2 border-highlightBlue"></div>

        <div className="col-span-1 mt-8 mb-12 md:col-span-2 md:mb-10">
          <h3 className="text-2xl text-darkGrey lg:text-3xl xl:text-4xl">
            <span className="border-b-4 border-highlightBlue">{topic}</span>
          </h3>
        </div>
        {articles.map((article, idx) => {
          if (idx === 0) {
            return;
          }
          return (
            <>
              <Card article={article} key={article.number} />
            </>
          );
        })}
      </div>

      <a
        href="#top"
        className="flex items-center justify-center w-3/5 max-w-md col-span-2 gap-4 py-2 mx-auto my-24 bg-gray-200 rounded-md cursor-pointer font-Inter md:text-lg sm:w-4/5 sm:py-4"
      >
        <BsHandIndexThumb />
        <h3>Back To Top</h3>
      </a>
    </>
  );
};

export default Page;

export const getStaticPaths = async () => {
  const pages = ["business", "media", "technology", "sports", "science"];
  const paths = pages.map((page, index) => {
    return {
      params: { id: page, num: index.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  // const id = context.params.num;
  let topic = context.params.id;
  if (topic === "media") {
    topic = "entertainment";
  }

  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=${topic}&apiKey=aa7502d584ce420682cfa2eba9559d0d`
  );
  const data = await res.json();
  const articles = data.articles;
  const withIDS = articles.map((article) => {
    let number = Math.floor(Math.random() * 10000);
    return { ...article, number };
  });

  return {
    props: {
      articles: withIDS,
      section: topic,
    },
    revalidate: 3000,
  };
};
