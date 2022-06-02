import { FiSearch } from "react-icons/fi";
import { useRouter } from "next/router";
import { useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const SEARCH_API = `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=aa7502d584ce420682cfa2eba9559d0d
  `;
  const handleChange = (e) => {
    setSearchTerm(e.target.value.replace(/\s+/g, "-"));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      fetch(SEARCH_API)
        .then((res) => res.json())
        .then((data) => {
          // console.log(JSON.stringify(data.articles));
          router.push(
            {
              pathname: "/search",
              query: {
                data: data.articles,
              },
            },
            `/search-${searchTerm}`
          );
        });
    }
    searchBar.value = "";
    setSearchTerm("");
  };

  return (
    <div className="flex items-center justify-center max-w-screen-sm gap-0 mx-auto mt-12 mb-12 bg-gray-200 rounded-2xl font-Inter">
      <FiSearch className="w-1/4 pl-2 text-2xl cursor-pointer text-lightGrey" />
      <form onSubmit={handleSubmit}>
        <input
          id="searchBar"
          type="search"
          placeholder="Search"
          autoComplete="on"
          minLength="2"
          className="w-3/4 py-2 bg-gray-200 border-white cursor-pointer mr-28 border-r-1 rounded-2xl focus:pl-2"
          onChange={handleChange}
          // value={searchTerm}
        />
      </form>
    </div>
  );
};

export default Search;
