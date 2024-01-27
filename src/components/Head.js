import React, { useEffect, useState } from "react";
import HamburgerLogo from "../assets/hamburger.jpg";
import Logo from "../assets/utubelogo.jpg";
import UserIcon from "../assets/usericon.jpg";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
// import { Link } from "react-router-dom";

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState(-1);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);

  const searchHandler = (e) => {
    // console.log("Clicked", e.key);
    if (e.key === "ArrowUp" && selectedItem > 0) {
      setSelectedItem((prev) => prev - 1);
    }
    // e.target.value = "aakash";
    else if (e.key === "ArrowDown" && selectedItem < suggestions.length - 1) {
      setSelectedItem((prev) => prev - 1);
    } else if (e.key === "Enter") {
      //  suggestions[selectedItem]
      // setSuggestions((prev) => prev[selectedItem]);
      // console.log("sssssss", suggestions[selectedItem + 1]);
      // e.target.value = suggestions[selectedItem];
    }
    // const t = suggestions.filter((suggestion) => s === suggestion);
    // setSuggestions(t);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    // console.log("API CALL-", searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    // console.log(json);

    //update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const clickHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg  ">
      {/* <Link to={"/"}> */}
      <div className="flex col-span-1 cursor-pointer">
        <img
          onClick={() => clickHandler()}
          className="h-8"
          src={HamburgerLogo}
          alt="menu"
        />

        <a href="/">
          <img className="h-14 w-27 my-[-9px] mx-2" src={Logo} alt="logo" />
        </a>
      </div>
      {/* </Link> */}
      <div className="col-span-10 ">
        <div className="relative">
          <input
            onKeyDown={searchHandler}
            className="px-5 w-1/2 p-2  border border-gray-400 rounded-l-full"
            type="text"
            value={searchQuery}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search here"
          />
          <button className="p-2 border border-gray-400 rounded-r-full">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute  bg-white py-2 px-5 w-[35rem] rounded-lg shadow-lg border border-gray-200">
            <ul>
              {suggestions.map((s) => (
                <li
                  key={s}
                  onClick={(e) => {
                    e.preventDefault();
                    console.log("i am clicked");
                  }}
                  className="cursor-pointer py-2 shadow-sm hover:bg-gray-100"
                >
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div>
        <img
          className="h-8 col-span-1 cursor-pointer"
          src={UserIcon}
          alt="user"
        />
      </div>
    </div>
  );
};
export default Head;

// 1:22:21
