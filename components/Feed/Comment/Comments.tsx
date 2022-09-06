import React, { FC } from "react";
import { Post } from "../../../types/post";
import Comment from "./Comment";
import CommentBox from "./CommentBox";

const Comments: FC<Post> = (post) => {
  return (
    <div className="w-full">
      <CommentBox />
      {post.comments && post.comments.data.length ? (
        <div className="w-full py-2 flex flex-col border-t border-gray-600 dark:border-gray-300">
          {post.comments.data.map((comment, i) => (
            <Comment key={i} {...comment} />
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Comments;
