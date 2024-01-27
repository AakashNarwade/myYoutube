import React from "react";
import User from "../assets/user.jpg";

const commentsData = [
  {
    name: "Aakash Narwade",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ad qui reiciendis eum ",
    replies: [],
  },
  {
    name: "Aakash Narwade",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ad qui reiciendis eum ",
    replies: [
      {
        name: "Aakash Narwade",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ad qui reiciendis eum ",
        replies: [
          {
            name: "Aakash Narwade",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ad qui reiciendis eum ",
            replies: [
              {
                name: "Aakash Narwade",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ad qui reiciendis eum ",
                replies: [
                  {
                    name: "Aakash Narwade",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ad qui reiciendis eum ",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Aakash Narwade",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ad qui reiciendis eum ",
    replies: [
      {
        name: "Aakash Narwade",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ad qui reiciendis eum ",
        replies: [
          {
            name: "Aakash Narwade",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ad qui reiciendis eum ",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Aakash Narwade",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ad qui reiciendis eum ",
    replies: [
      {
        name: "Aakash Narwade",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ad qui reiciendis eum ",
        replies: [
          {
            name: "Aakash Narwade",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ad qui reiciendis eum ",
            replies: [
              {
                name: "Aakash Narwade",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ad qui reiciendis eum ",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;

  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img className="w-13 h-12  px-1" src={User} alt="user" />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, i) => (
    <div key={i}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <p className="text-2xl font-bold">Comments:</p>
      <CommentsList comments={commentsData} />
    </div>
  );
};
export default CommentsContainer;
// 2:14:29
