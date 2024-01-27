import React from "react";
import UserIcon from "../assets/user.jpg";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex   items-center shadow-sm p-2">
      <img
        className="h-8 col-span-1 cursor-pointer"
        src={UserIcon}
        alt="user"
      />
      <span className="text-sm font-bold px-2">{name}</span>
      <span className="text-sm">{message}</span>
    </div>
  );
};

export default ChatMessage;
