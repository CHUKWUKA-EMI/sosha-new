import React, { FC } from "react";
import { Comment } from "../../../types/post";
import CommentBox from "./CommentBox";
import Reply from "./Reply";

const Replies: FC<Comment> = (comment) => {
  return (
    <div className="w-full py-1 pl-[3.5rem]">
      {comment.replies && comment.replies.data.length ? (
        <div className="w-full flex flex-col dark:border-gray-300">
          {comment.replies.data.map((reply, i) => (
            <Reply key={i} {...reply} />
          ))}
        </div>
      ) : (
        ""
      )}
      <CommentBox />
    </div>
  );
};

export default Replies;
