import { ArrowsExpandIcon, XIcon } from "@heroicons/react/solid";
import React, { FC } from "react";
import { removeConnectionToChatWith } from "../../state/chatsReducers";
import { useAppDispatch } from "../../state/hooks";
import { FriendShip } from "../../types/user";
import Avatar from "../Avatar";
import MessageInputArea from "./MessageInputArea";

const MessageOverlayConversationBox: FC<FriendShip> = (friendship) => {
  const dispatch = useAppDispatch();

  const closeConversation = () => {
    console.log("friendship", friendship.friendshipId);
    dispatch(
      removeConnectionToChatWith({ friendshipId: friendship.friendshipId })
    );
  };

  return friendship.friend ? (
    <div
      onMouseEnter={() => console.log("friendship", friendship.friendshipId)}
      className="h-[85vh] sm:h-auto w-screen shadow-sm shadow-gray-600 sm:w-72 border border-gray-500 bg-white dark:bg-[#1d2226] rounded-tl-lg rounded-tr-lg"
    >
      <div className="w-full flex items-center border-b border-gray-500 justify-between p-3">
        <span className="font-semibold w-full text-gray-700 dark:text-white">
          New message
        </span>
        <div className="w-full flex items-center justify-end">
          <span
            role="button"
            className="text-gray-600 hidden sm:block rounded-full font-bold dark:text-white p-2 hover:bg-gray-300 dark:hover:bg-gray-500"
          >
            <ArrowsExpandIcon className="w-6 h-6" />
          </span>
          <span
            onClick={closeConversation}
            role="button"
            className="text-gray-600 rounded-full font-bold dark:text-white p-2 hover:bg-gray-300 dark:hover:bg-gray-500"
          >
            <XIcon className="w-6 h-6" />
          </span>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full flex items-center gap-3 p-3">
          <Avatar imageUrl={friendship.friend.imgUrl} className="w-8 h-8" />
          <div className="flex flex-col">
            <span className="text-lg text-sky-800 dark:text-white font-semibold">{`${friendship.friend.firstName} ${friendship.friend.lastName}`}</span>
            {friendship.friend.headline && (
              <small className="text-gray-600 dark:text-gray-300">
                {friendship.friend.headline}
              </small>
            )}
          </div>
        </div>
        <div className="w-full p-4">Chats</div>
        <MessageInputArea parent="messageOverlay" />
      </div>
    </div>
  ) : null;
};

export default MessageOverlayConversationBox;
