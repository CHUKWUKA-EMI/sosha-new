import React, { FC } from "react";
import { Post } from "../../../types/post";
import PostBody from "./PostBody";
import PostFooter from "./PostFooter";
import PostHead from "./PostHead";

interface IProps {
  deletePost?: (id: string) => void;
  embedPost?: () => void;
}

const Post: FC<Post & IProps> = (post) => {
  return (
    <div className="w-full bg-white dark:bg-[#1d2226] dark:text-white rounded-lg dark:shadow-sm shadow-sm shadow-gray-500 dark:shadow-gray-700 h-fit mx-auto flex-auto">
      <div className="w-full h-full flex flex-col">
        <PostHead {...post} deletePost={() => post.deletePost?.(post.id)} />
        <PostBody {...post} />
        <PostFooter {...post} />
      </div>
    </div>
  );
};

export default Post;
