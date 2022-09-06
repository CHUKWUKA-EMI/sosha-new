import React, { FC, useState } from "react";
import { Comment, Replies } from "../../../types/post";
import { dateTimeDuration } from "../../../utils/date-time-diff";
import Avatar from "../../Avatar";
import CommentOptionsDropDown from "./CommentOptionsDropdown";
import { reply } from "../../../utils/testData";
import { useAppDispatch } from "../../../state/hooks";
import { setReplies } from "../../../state/postsReducers";
import RepliesComponent from "../Reply/Replies";

const Comment: FC<Comment> = (comment) => {
  const dispatch = useAppDispatch();
  const [showOptionsButton, setShowOptionsButton] = useState(false);
  const [openRepliesComponent, setOpenRepliesComponent] = useState(false);

  const showReplies = () => {
    setOpenRepliesComponent(!openRepliesComponent);
    if (!comment.replies || !comment.replies.data.length) {
      const repliesArr = [1, 2, 3].map((i) => ({
        ...reply,
        id: `${i}`,
        commentId: comment.id,
        postId: comment.postId,
      }));
      const replies: Replies = {
        commentId: comment.id,
        count: 3,
        data: repliesArr,
        postId: comment.postId,
        start: 0,
        total: 3,
      };
      dispatch(setReplies(replies));
    }
  };

  return (
    <div className="w-full flex flex-col py-2 px-4">
      <div
        onMouseEnter={() => setShowOptionsButton(true)}
        onMouseLeave={() => setShowOptionsButton(false)}
        className="w-full flex gap-2"
      >
        <div className="w-fit">
          <Avatar className="w-10 h-10" />
        </div>
        <div className="w-fit flex items-center">
          <div className="w-fit px- flex flex-col items-center">
            <div className="flex flex-col py-1 px-4 items-center rounded-2xl bg-gray-200 text-gray-700 dark:bg-gray-500 dark:text-white">
              <span className="text-base font-semibold">{`${comment.user.firstName} ${comment.user.lastName}`}</span>
              {comment.user.headline && (
                <small className="text-gray-500 dark:text-gray-300 font-medium">
                  {comment.user.headline}
                </small>
              )}
              <div className="w-full py-3 text-gray-700 dark:text-white">
                {comment.comment}
              </div>
            </div>
            <div className="w-full flex items-center justify-between p-1">
              <small
                onClick={showReplies}
                role="button"
                className="font-semibold flex items-center gap-1 dark:hover:bg-gray-500 hover:bg-gray-200 py-1 px-2 rounded-lg text-gray-600 dark:text-gray-300"
              >
                Reply
              </small>
              {comment.numberOfReplies > 0 && (
                <small className="font-medium text-gray-600 dark:text-gray-300">
                  {`${comment.numberOfReplies} ${
                    comment.numberOfReplies > 1 ? "Replies" : "Reply"
                  }`}
                </small>
              )}
              <small className="text-gray-600 dark:text-gray-300">
                {dateTimeDuration(comment.createdAt)}
              </small>
            </div>
          </div>
          <CommentOptionsDropDown
            displayButton={showOptionsButton}
            commentId={comment.id}
          />
        </div>
      </div>
      {openRepliesComponent ? <RepliesComponent {...comment} /> : ""}
    </div>
  );
};

export default Comment;
