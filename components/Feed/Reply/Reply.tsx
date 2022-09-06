import React, { FC, useState } from "react";
import { Reply } from "../../../types/post";
import { dateTimeDuration } from "../../../utils/date-time-diff";
import Avatar from "../../Avatar";
import ReplyOptionsDropDown from "./ReplyOptionsDropdown";

const Reply: FC<Reply> = (reply) => {
  const [showOptionsButton, setShowOptionsButton] = useState(false);

  return (
    <div
      onMouseEnter={() => setShowOptionsButton(true)}
      onMouseLeave={() => setShowOptionsButton(false)}
      className="w-full flex py-2 px-4 gap-2"
    >
      <div className="w-fit">
        <Avatar className="w-10 h-10" />
      </div>
      <div className="w-fit flex items-center">
        <div className="w-fit px- flex flex-col items-center">
          <div className="flex flex-col py-1 px-4 items-center rounded-2xl bg-gray-200 text-gray-700 dark:bg-gray-500 dark:text-white">
            <span className="text-base font-semibold">{`${reply.user.firstName} ${reply.user.lastName}`}</span>
            {reply.user.headline && (
              <small className="text-gray-500 dark:text-gray-300 font-medium">
                {reply.user.headline}
              </small>
            )}
            <div className="w-full py-3 text-gray-700 dark:text-white">
              {reply.reply}
            </div>
          </div>
          <div className="w-full flex items-center justify-start p-1">
            <small className="text-gray-600 dark:text-gray-300">
              {dateTimeDuration(reply.createdAt)}
            </small>
          </div>
        </div>
        <ReplyOptionsDropDown
          displayButton={showOptionsButton}
          replyId={reply.id}
        />
      </div>
    </div>
  );
};

export default Reply;
