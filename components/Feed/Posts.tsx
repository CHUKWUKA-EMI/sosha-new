import React, { useState } from "react";
import { Post, Posts as PostsType } from "../../types/post";
import dayjs from "dayjs";
import { useEffectOnce } from "../UseEffectOnce";
import PostComponent from "./Post/Post";

const post: Post = {
  id: "",
  createdAt: dayjs().format(),
  numberOfComments: 0,
  numberOfLikes: 0,
  updatedAt: dayjs().format(),
  user: {
    id: "25525252525",
    firstName: "Chukwuka",
    lastName: "Emi",
    headline: "Software Engineer",
    imgUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  userId: "25525252525",
  content: `Well, let me tell you something, funny boy. Y'know that little stamp, the one that says "New York Public Library"? 
  Well that may not mean anything to you,but that means a lot to me. One whole hell of a lot
  
  Sure, go ahead, laugh if you want to. I've seen your type before: Flashy, making the scene, flaunting convention. Yeah, I know what you're thinking. What's this guy making such a big stink about old library books? Well, let me give you a hint, junior.
  `,
  imgUrl:
    "https://images.unsplash.com/photo-1661732017116-60d4a28d2a2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
};

const postArr = [1, 2, 3, 4, 5, 6].map((i) => ({ ...post, id: `${i}` }));

const Posts = () => {
  const [posts, setPosts] = useState<PostsType | null>(null);
  useEffectOnce(() => {
    const postsData: PostsType = {
      count: 6,
      data: postArr,
      start: 0,
      total: 6,
    };
    setPosts(postsData);
  });

  const handleDelete = (id: string) => {
    const filteredPostData = posts?.data.filter((p) => p.id !== id);
    const filteredPost: PostsType = {
      count: posts?.count ? posts.count - 1 : 0,
      start: posts?.start ?? 0,
      total: posts?.total ? posts.total - 1 : 0,
      data: filteredPostData ?? posts?.data ?? [],
    };
    setPosts(filteredPost);
  };

  return posts ? (
    <div
      className={`w-full flex flex-col items-center pb-16  pt-6 sm:pb-6 gap-2`}
    >
      {posts.data.length
        ? posts.data.map((post, i) => (
            <PostComponent key={i} deletePost={handleDelete} {...post} />
          ))
        : ""}
    </div>
  ) : null;
};

export default Posts;
