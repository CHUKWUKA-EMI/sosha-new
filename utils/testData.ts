import dayjs from "dayjs";
import { Comment, Comments, Post, Posts } from "../types/post";

// sample data
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

export const postsData: Posts = {
  count: 6,
  data: postArr,
  start: 0,
  total: 6,
};

const comment: Comment = {
  comment: "This is nice",
  createdAt: dayjs().format(),
  id: "",
  numberOfReplies: 3,
  postId: "1",
  user: {
    id: "25525252525",
    firstName: "Chukwuka",
    lastName: "Emi",
    headline: "Software Engineer",
    imgUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  userId: "25525252525",
  updatedAt: dayjs().format(),
};

const commentsArr = [1, 2, 3, 4, 5].map((i) => ({
  ...comment,
  id: `${i}`,
}));

export const comments: Comments = {
  count: 5,
  data: commentsArr,
  postId: "1",
  start: 0,
  total: 5,
};
