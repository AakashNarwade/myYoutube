import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Songs",
    "Live",
    "Cricket",
    "News",
    "Politics",
    "Gym",
    "Nutrition",
  ];

  return (
    <div className="flex">
      {list.map((item, i) => (
        <div key={i}>
          <Button name={item} />
        </div>
      ))}
    </div>
  );
};

export default ButtonList;
