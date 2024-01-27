import React from "react";
import HomeIcon from "../assets/Home.jpg";
import ShortsIcon from "../assets/shorts.jpg";
import YoutubeVideo from "../assets/video.jpg";
import Live from "../assets/live.jpg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  console.log(isMenuOpen);

  //early return
  if (!isMenuOpen) return null;
  //1:31:50

  return (
    <div className="p-5 shadow-lg w-48">
      <ul>
        <div className="flex gap-3 cursor-pointer">
          <img className="h-5" src={HomeIcon} alt="home" />
          <li>
            <Link to={"/"}>Home</Link>
          </li>
        </div>
        <div className="flex gap-3 cursor-pointer">
          <img className="h-5" src={ShortsIcon} alt="shorts" />
          <li>Shorts</li>
        </div>
        <div className="flex gap-3 cursor-pointer">
          <img className="h-5" src={YoutubeVideo} alt="videos" />
          <li>Videos</li>
        </div>
        <div className="flex gap-3 cursor-pointer">
          <img className="h-5" src={Live} alt="live" />
          <li>Live</li>
        </div>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
