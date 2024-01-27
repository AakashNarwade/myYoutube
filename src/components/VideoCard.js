import React from "react";

const VideoCard = ({ info }) => {
  console.log(info, "  =>info");
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 w-72 shadow-lg cursor-pointer h-full">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount}</li>
      </ul>
    </div>
  );
};

// export const AdVideoCard = ({ info }) => {
//   return (
//     <div className="p-1 m-1 border border-y-red-300">
//       <VideoCard info={info} />
//     </div>
//   );
// };

export default VideoCard;
