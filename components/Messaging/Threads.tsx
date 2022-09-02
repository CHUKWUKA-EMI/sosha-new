import React from "react";
import { useAppSelector } from "../../state/hooks";
import SearchInput from "../TextFields/SearchInput";
import Thread from "./Thread";

const Threads = () => {
  const threads = useAppSelector((state) => state.chats.threads);
  return (
    <div className="w-full h-full">
      <div className="h-14 p-4 text-sky-700 dark:text-white font-bold border-b border-gray-400 dark:border-white">
        Messaging
      </div>
      <div className="p-2 border-b flex justify-center border-gray-400 dark:border-white">
        <SearchInput
          className="w-full placeholder:text-gray-500"
          placeholder="Search messages"
        />
      </div>
      <div className="overflow-y-scroll h-full">
        {threads.data.length > 0
          ? threads.data.map((thread, i) => <Thread key={i} thread={thread} />)
          : ""}
      </div>
    </div>
  );
};

export default Threads;
