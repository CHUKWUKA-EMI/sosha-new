import { DotsHorizontalIcon } from "@heroicons/react/outline";
import { GlobeIcon } from "@heroicons/react/solid";
import Link from "next/link";
import React, { FC } from "react";
import { Post } from "../../../types/post";
import { dateTimeDuration } from "../../../utils/date-time-diff";
import Avatar from "../../Avatar";
import PostOptionsDropDown from "./PostOptionsDropDown";

interface IProps {
  deletePost?: (id: string) => void;
  embedPost?: () => void;
}

const PostHead: FC<Post & IProps> = (post) => {
  return (
    <div className="w-full p-4 flex items-center justify-between">
      <div className="flex gap-4">
        <Avatar className="w-16 h-16" />
        <div className="flex flex-col">
          <Link href="">
            <a className="text-lg text-sky-800 dark:text-white font-semibold">{`${post.user.firstName} ${post.user.lastName}`}</a>
          </Link>
          {post.user.headline && (
            <small className="text-sm text-gray-600 dark:text-white font-normal">
              {post.user.headline}
            </small>
          )}
          <small className="text-sm flex items-center gap-1 text-gray-600 dark:text-white tracking-normal font-medium">
            {dateTimeDuration(post.createdAt)}
            <div className="text-sm w-1 h-1 bg-gray-600 rounded-full font-bold" />
            <GlobeIcon role="button" className="w-4 h-4" />
          </small>
        </div>
      </div>
      <PostOptionsDropDown
        {...post}
        embedPost={() => post.deletePost?.(post.id)}
        deletePost={post.deletePost}
      />
      <button className="xs:hidden w-fit h-fit p-2 text-gray-600 dark:hover:bg-gray-500 hover:bg-gray-300 rounded-full">
        <DotsHorizontalIcon className="w-7 h-7" />
      </button>
    </div>
  );
};

export default PostHead;
