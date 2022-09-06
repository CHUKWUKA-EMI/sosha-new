import React from "react";
import PostComponent from "./Post/Post";
import { useAppSelector } from "../../state/hooks";

const Posts = () => {
  const posts = useAppSelector((state) => state.posts.posts);
  return posts ? (
    <div
      className={`w-full flex flex-col items-center pb-16  pt-6 sm:pb-6 gap-2`}
    >
      {posts.data.length
        ? posts.data.map((post, i) => <PostComponent key={i} {...post} />)
        : ""}
    </div>
  ) : null;
};

export default Posts;
