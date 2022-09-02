import React, { FC } from "react";
import { selectThread } from "../../state/chatsReducers";
import { useAppDispatch } from "../../state/hooks";
import { Thread } from "../../types/chats";
import Avatar from "../Avatar";

interface IProps {
  thread: Thread;
}

const Thread: FC<IProps> = ({ thread }) => {
  const dispatch = useAppDispatch();

  const select = () => {
    dispatch(selectThread(thread));
  };
  return (
    <div
      onClick={select}
      className="flex flex-col justify-center cursor-pointer w-full p-4 border-b border-gray-300 hover:bg-gray-200"
    >
      <div className="flex items-center gap-2">
        <Avatar className="w-8 h-8" imageUrl={thread.friend.imgUrl} />
        <span className="font-semibold">{`${thread.friend.firstName} ${thread.friend.lastName}`}</span>
      </div>
      <span
        className={`w-full text-sm pt-2 text-ellipsis ${
          thread.lastMessage.read
            ? "font-medium text-gray-500"
            : "font-semibold text-gray-600"
        } `}
      >
        {thread.lastMessage.text}
      </span>
    </div>
  );
};

export default Thread;
