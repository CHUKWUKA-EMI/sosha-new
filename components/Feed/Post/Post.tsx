import React, { FC } from "react";
import { Post } from "../../../types/post";
import PostBody from "./PostBody";
import PostFooter from "./PostFooter";
import PostHead from "./PostHead";

const Post: FC<Post> = (post) => {
  return (
    <div className="w-full bg-white dark:bg-[#1d2226] dark:text-white rounded-lg dark:shadow-sm shadow-sm shadow-gray-500 dark:shadow-gray-700 h-fit mx-auto flex-auto">
      <div className="w-full h-full flex flex-col">
        <PostHead {...post} />
        <PostBody {...post} />
        <PostFooter {...post} />
      </div>
    </div>
  );
};

export default Post;
