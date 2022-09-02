import { PhotographIcon } from "@heroicons/react/solid";
import {
  MailIcon,
  MailOpenIcon,
  ArrowLeftIcon,
} from "@heroicons/react/outline";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import Avatar from "../Avatar";
import PrimaryButton from "../Buttons/PrimaryButton";
import Emojis from "../Emojis";
import TextArea from "../TextFields/TextArea";
import { selectThread } from "../../state/chatsReducers";

const MessageBox = () => {
  const dispatch = useAppDispatch();
  const selectedThread = useAppSelector((state) => state.chats.selectedThread);

  const backToThreads = () => {
    dispatch(selectThread(null));
  };

  return (
    <div className="h-full relative w-full">
      <div
        className={`h-14 p-4 flex items-center ${
          selectedThread ? "justify-between" : "justify-start sm:justify-end"
        } text-sky-700 dark:text-white font-bold border-b border-gray-400 dark:border-white`}
      >
        <div className={`${!selectedThread ? "hidden" : ""}`}>
          <div className={`flex items-center gap-2`}>
            <Avatar className="hidden sm:block w-6 h-6" />
            <button
              onClick={backToThreads}
              className="sm:hidden mr-3 h-fit w-fit rounded-full p-1 bg-gray-200 hover:bg-gray-300"
            >
              <ArrowLeftIcon className="w-8 h-8" />
            </button>
            <div className="flex flex-col justify-center">
              <span
                className={`font-semibold`}
              >{`${selectedThread?.friend.firstName} ${selectedThread?.friend.lastName}`}</span>
              <span className={`text-sm font-normal`}>
                {selectedThread?.friend.headline}
              </span>
            </div>
          </div>
        </div>
        <div className="hidden sm:block">
          {selectedThread ? (
            <MailOpenIcon className="w-8 h-8" />
          ) : (
            <MailIcon className="w-8 h-8" />
          )}
        </div>
      </div>
      <div className="h-[70%]"></div>
      <div
        className={`w-full bg-gray-100 ${
          !selectedThread ? "hidden" : ""
        } absolute bottom-0 overflow-y-hidden p-2`}
      >
        <TextArea
          parent="messageBox"
          className="rounded-lg border border-gray-400 w-full py-3 px-4"
          placeholder="Write a message..."
        />
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center justify-around">
            <input
              id="image-input"
              accept="image/*"
              name="image"
              className="hidden"
              type="file"
            />
            <label htmlFor="image-input">
              <span className="text-sky-700 cursor-pointer">
                <PhotographIcon className="h-8 w-8" />
              </span>
            </label>
            <div className="hidden sm:block z-20">
              <Emojis />
            </div>
          </div>

          <PrimaryButton className="rounded-full">Send</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default MessageBox;
