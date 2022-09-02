import { Menu, Transition } from "@headlessui/react";
import {
  CodeIcon,
  DotsHorizontalIcon,
  LinkIcon,
  TrashIcon,
  FlagIcon,
} from "@heroicons/react/outline";
import { PencilAltIcon } from "@heroicons/react/solid";
import React, { FC, Fragment } from "react";
import { Post } from "../../../types/post";

interface IProps {
  deletePost?: (id: string) => void;
  embedPost?: () => void;
}

const PostOptionsDropDown: FC<Post & IProps> = (props) => {
  return (
    <Menu as="div" className="ml-3 relative hidden xs:block">
      <div>
        <Menu.Button className="flex text-sm p-1 dark:text-white text-gray-600 rounded-full focus:outline-none dark:hover:bg-gray-500 hover:bg-gray-200">
          <span className="sr-only">Open post options</span>
          <DotsHorizontalIcon className="w-7 h-7" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right overflow-hidden absolute right-0 mt-2 w-64 rounded-md shadow-lg shadow-gray-400 dark:border dark:border-gray-300 dark:shadow-sm dark:bg-[#1d2226] bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item
            className="w-full flex items-center dark:text-gray-300 dark:hover:text-white text-gray-600 font-medium gap-4 p-4 dark:hover:bg-inherit hover:bg-gray-200"
            as="button"
          >
            <LinkIcon className="w-6 h-6" />
            <span className="w-fit">Copy link to Post</span>
          </Menu.Item>
          <Menu.Item
            onClick={props.embedPost}
            className="w-full flex items-center dark:text-gray-300 dark:hover:text-white text-gray-600 font-medium gap-4 p-4 dark:hover:bg-inherit hover:bg-gray-200"
            as="button"
          >
            <CodeIcon className="w-6 h-6" />
            <span className="w-fit">Embed post</span>
          </Menu.Item>
          <Menu.Item
            className="w-full flex items-center dark:text-gray-300 dark:hover:text-white text-gray-600 font-medium gap-4 p-4 dark:hover:bg-inherit hover:bg-gray-200"
            as="button"
          >
            <FlagIcon className="w-6 h-6" />
            <span className="w-fit">Report this post</span>
          </Menu.Item>
          <Menu.Item
            className="w-full flex items-center dark:text-gray-300 dark:hover:text-white text-gray-600 font-medium gap-4 p-4 dark:hover:bg-inherit hover:bg-gray-200"
            as="button"
          >
            <PencilAltIcon className="w-6 h-6" />
            <span className="w-fit">Edit post</span>
          </Menu.Item>
          <Menu.Item
            onClick={() => props.deletePost?.(props.id)}
            className="w-full flex items-center dark:text-gray-300 dark:hover:text-white text-gray-600 font-medium gap-4 p-4 dark:hover:bg-inherit hover:bg-gray-200"
            as="button"
          >
            <TrashIcon className="w-6 h-6" />
            <span className="w-fit">Delete post</span>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default PostOptionsDropDown;
