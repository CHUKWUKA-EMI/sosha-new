import {
  ChatIcon,
  ChatAltIcon,
  HeartIcon,
  ThumbUpIcon,
} from "@heroicons/react/outline";
import React, { FC } from "react";
import { Post } from "../../../types/post";
import PrimaryButton from "../../Buttons/PrimaryButton";

const PostFooter: FC<Post> = (post) => {
  return (
    <div className="w-full px-2 block box-border">
      <div className="flex items-center justify-between py-2 border-b border-gray-500 w-full">
        {post.numberOfLikes > 0 && (
          <a className="w-fit hover:underline flex items-center">
            <ThumbUpIcon className="w-4 h-4" />{" "}
            <HeartIcon className="w-4 h-4" />{" "}
            <span className="w-4 h-4">👏</span> <a>{post.numberOfLikes}</a>
          </a>
        )}
        {post.numberOfComments > 0 && (
          <a className="w-fit hover:underline">{`${post.numberOfComments} comments`}</a>
        )}
      </div>
      <div className="flex items-center w-full justify-between py-2">
        <div
          role="button"
          className="flex items-center justify-center w-[30%] text-sm font-semibold active:scale-75 outline-none dark:hover:bg-gray-600 dark:text-white hover:bg-gray-200 p-2 rounded-md text-gray-600 gap-1"
        >
          <ThumbUpIcon className="w-6 h-6" />
          <span>Like</span>
        </div>

        <div
          role="button"
          className="flex items-center justify-center w-[30%]  active:scale-75 text-sm font-semibold outline-none dark:hover:bg-gray-600 dark:text-white hover:bg-gray-200 p-2 rounded-md text-gray-600 gap-1"
        >
          <ChatAltIcon className="w-6 h-6" />
          <span>Comment</span>
        </div>

        <div
          role="button"
          className="flex items-center justify-center font-semibold w-[30%] active:scale-75 text-sm  outline-none dark:hover:bg-gray-600 dark:text-white hover:bg-gray-200 p-2 rounded-md text-gray-600 gap-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.0}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3"
            />
          </svg>

          <span>Share</span>
        </div>
      </div>
    </div>
  );
};

export default PostFooter;
