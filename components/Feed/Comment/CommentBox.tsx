import React, { useState } from "react";
import Avatar from "../../Avatar";
import PrimaryButton from "../../Buttons/PrimaryButton";
import Emojis from "../../Emojis";
import TextArea from "../../TextFields/TextArea";

const CommentBox = () => {
  const [openEmoji, setOpenEmoji] = useState(false);

  return (
    <div className="w-full">
      <div className="w-full flex relative gap-2 px-4">
        <Avatar className="w-9 h-9 absolute top-3" />

        <TextArea
          className="w-full ml-4 dark:bg-inherit text-gray-700 dark:text-gray-300 focus:ring-[0.5px] focus:ring-sky-700 dark:focus:ring-gray-200 border border-gray-600 dark:border-gray-300 rounded-2xl placeholder:text-gray-600 dark:placeholder:text-gray-300"
          placeholder="Add a comment"
        />
      </div>
      <div className="w-full flex items-center py-2 justify-end gap-1 px-6">
        <Emojis isPopoverOpen={openEmoji} setIsPopoverOpen={setOpenEmoji} />
        <PrimaryButton className="rounded-full flex items-center justify-center w-16 h-8">
          Send
        </PrimaryButton>
      </div>
    </div>
  );
};

export default CommentBox;
