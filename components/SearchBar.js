import { FiSearch } from "react-icons/fi";
import { useRouter } from "next/router";
import { useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setSearchTerm(e.target.value.replace(/\s+/g, "-"));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (searchTerm) {
    //   router.push(
    //     {
    //       pathname: "/search",
    //       query: {
    //         term: searchTerm,
    //       },
    //     },
    //     `/search-${searchTerm}`
    //   );
    // }
    // searchBar.value = "";
    // setSearchTerm("");
  };

  return (
    // tooltip styles using GLOBAL CSS
    <div className="flex items-center justify-center max-w-screen-sm gap-0 mx-auto mt-12 mb-12 bg-gray-200 tooltip rounded-2xl font-Inter">
      <span className="tooltiptext">Search Currently Unavailable</span>
      <FiSearch className="w-1/4 pl-2 text-2xl cursor-not-allowed text-lightGrey group-hover:text-highlightBlue" />
      <form onSubmit={handleSubmit}>
        <input
          id="searchBar"
          type="search"
          placeholder="Search"
          autoComplete="on"
          minLength="2"
          className="w-3/4 py-2 bg-gray-200 border-white cursor-not-allowed mr-28 border-r-1 rounded-2xl focus:pl-2"
          onChange={handleChange}
          disabled
          // value={searchTerm}
        />
      </form>
    </div>
  );
};

export default Search;
