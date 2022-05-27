import Card from "../components/Card";
import { BsHandIndexThumb } from "react-icons/bs";
import { useRouter } from "next/router";

const SearchPage = () => {
  const router = useRouter();

  // console.log(JSON?.parse(router.query.data));
  // const articles = JSON.parse(router.query.data);
  return (
    <div className="grid grid-cols-1 row-auto mt-8 md:grid-cols-2 lg:gap-y-8 ">
      {/* {articles.map((article) => {
        return <Card article={article} key={article.number} />;
      })} */}
      <a href="#top" className="col-span-1 md:col-span-2">
        <div className="flex items-center justify-center w-3/5 max-w-md col-span-2 gap-4 py-2 mx-auto my-32 bg-gray-200 rounded-md cursor-pointer text-lightGrey font-Inter md:text-lg sm:w-4/5 sm:py-4">
          <BsHandIndexThumb />
          <h3>Back To Top</h3>
        </div>
      </a>
    </div>
  );
};

export default SearchPage;
