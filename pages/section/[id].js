import { useRouter } from "next/router";
import Card from "../../components/Card";
import { BsHandIndexThumb } from "react-icons/bs";

const Page = ({ articles }) => {
  const router = useRouter();
  const page = router.query.id;
  return (
    <>
      <div className="grid grid-cols-1 row-auto mt-8 mb-16 md:grid-cols-2 lg:gap-y-8">
        {articles.map((article) => {
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
    },
    revalidate: 3000,
  };
};
