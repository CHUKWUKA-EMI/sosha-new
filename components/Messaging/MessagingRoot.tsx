import React, { FC } from "react";
import { useAppSelector } from "../../state/hooks";
import MessageBox from "./MessageBox";
import Threads from "./Threads";

const MessagingRoot: FC = () => {
  const selectedThread = useAppSelector((state) => state.chats.selectedThread);
  return (
    <div className="w-full xs:px-2 pt-2 sm:pt-4">
      <div className="w-full bg-white dark:bg-[#1d2226] h-[90vh] sm:h-[87.5vh] overflow-y-hidden shadow-md shadow-gray-600 rounded-md sm:w-[70%] mx-auto">
        {/* Message Box mobile view */}
        {selectedThread && (
          <div className="sm:hidden h-[80vh] w-full overflow-y-hidden items-center">
            <MessageBox />
          </div>
        )}

        <div
          className={`w-full h-[90vh] sm:h-[87.5vh] grid grid-cols-1 sm:grid-cols-3`}
        >
          <div className="sm:block overflow-y-hidden border-r border-gray-400 pb-4">
            <Threads />
          </div>
          <div className="hidden sm:block col-span-2 overflow-y-hidden items-center">
            <MessageBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagingRoot;
