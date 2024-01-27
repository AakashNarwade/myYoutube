import React, { useEffect, useState } from "react";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addVideos } from "../utils/videoSlice";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  // const dispatch = useDispatch();
  // const vids = useSelector((store) => store.video);
  // console.log("vids=> ", vids);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    // console.log(data);
    const json = await data.json();
    // console.log(json.items);
    // dispatch(addVideos(json.items));
    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap">
      {/* {console.log(vids.map((v) => v[0]))} */}
      {/* {videos[0] && <AdVideoCard info={videos[0]} />} */}
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};


export default VideoContainer;
