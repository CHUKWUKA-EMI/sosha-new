import { PhotographIcon } from "@heroicons/react/solid";
import React, { FC, useState } from "react";
import { Thread } from "../../types/chats";
import PrimaryButton from "../Buttons/PrimaryButton";
import Emojis from "../Emojis";
import TextArea from "../TextFields/TextArea";

interface IProps {
  parent: "messageBox" | "messageOverlay";
  selectedThread?: Thread | null;
}

const MessageInputArea: FC<IProps> = ({ parent, selectedThread }) => {
  const [openEmoji, setOpenEmoji] = useState(false);

  return (
    <div
      className={`w-full bg-gray-100 dark:bg-[#1d2226] ${
        parent === "messageBox" && !selectedThread ? "hidden" : ""
      } ${
        parent === "messageBox" ? "absolute" : ""
      } bottom-0 overflow-y-hidden p-2`}
    >
      <TextArea
        parent="messageBox"
        className="rounded-lg dark:bg-inherit dark:text-white border border-gray-400 w-full py-2 px-4"
        placeholder="Write a message..."
      />
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center justify-around gap-2">
          <input
            id="image-input"
            accept="image/*"
            name="image"
            className="hidden"
            type="file"
          />
          <label htmlFor="image-input">
            <span className="text-sky-700 dark:text-white cursor-pointer">
              <PhotographIcon className="h-8 w-8" />
            </span>
          </label>
          <div className="hidden pt-2 sm:block z-20">
            <Emojis
              top={0}
              isPopoverOpen={openEmoji}
              setIsPopoverOpen={setOpenEmoji}
            />
          </div>
        </div>

        <PrimaryButton disabled className="rounded-full">
          Send
        </PrimaryButton>
      </div>
    </div>
  );
};

export default MessageInputArea;
