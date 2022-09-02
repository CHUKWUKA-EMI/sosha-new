import React from "react";
import Avatar from "../Avatar";

const UserInfo = () => {
  return (
    <div className="w-full top-[4.5rem] sm:flex-auto md:flex-none h-fit sticky shadow-sm shadow-gray-500 dark:shadow-gray-700 dark:bg-[#1d2226] dark:text-white bg-white rounded-lg">
      <div className="w-full relative">
        <div className="relative border-b h-20 border-gray-500 mb-4 w-full flex items-center p-2 justify-center">
          <Avatar className="h-32 absolute flex-auto top-4 w-32" />
        </div>
        <div className="w-full flex-auto text-center p-4 mt-14 text-gray-600">
          <div className="text-xl dark:text-white">Chukwuka Emi</div>
          <small className="text-sm dark:text-gray-300">
            Software Engineer
          </small>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
