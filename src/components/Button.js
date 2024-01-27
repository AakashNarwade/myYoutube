import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="px-5 py-2 m-2 bg-gray-200 rounded-lg ">{name}</button>
      {/* <button className="px-5 py-2 m-2 bg-gray-200 rounded-lg">All</button>

      <button className="px-5 py-2 m-2 bg-gray-200 rounded-lg">All</button>

      <button className="px-5 py-2 m-2 bg-gray-200 rounded-lg">All</button> */}
    </div>
  );
};

export default Button; 
