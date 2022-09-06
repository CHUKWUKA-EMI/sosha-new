import React from "react";
import {
  HomeIcon,
  UsersIcon,
  ChatIcon,
  PlusCircleIcon,
} from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import { setOpenPostModal } from "../../state/postsReducers";
import { useAppDispatch } from "../../state/hooks";

const navigation = [
  { name: "Home", href: "/feed", icon: <HomeIcon className="h-6 w-6" /> },
  { name: "People", href: "/people", icon: <UsersIcon className="h-6 w-6" /> },
  { name: "Post", href: "#", icon: <PlusCircleIcon className="h-6 w-6" /> },
  {
    name: "Messaging",
    href: "/messaging",
    icon: <ChatIcon className="h-6 w-6" />,
  },
];

const BottomNavigation = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const openPostModal = () => {
    dispatch(setOpenPostModal("mobile"));
  };

  return (
    <div className="w-full shadow-sm shadow-gray-700 bottom-0 z-[55] fixed px-0 text-xs flex items-stretch justify-between sm:hidden dark:border-t dark:border-gray-500 bg-white dark:bg-[#1d2226]">
      {navigation.map((item) => {
        return item.name === "Post" ? (
          <button
            onClick={openPostModal}
            key={item.name}
            className="flex flex-col py-3 items-center font-normal text-sky-800 dark:text-gray-400"
          >
            {item.icon}
            {item.name}
          </button>
        ) : (
          <Link
            href={item.href}
            key={item.name}
            aria-current={router.pathname === item.href ? "page" : undefined}
          >
            <a
              className={`flex items-center py-3 px-3 flex-col ${
                router.pathname === item.href
                  ? "text-sky-600 border-t-2 dark:text-white"
                  : "text-sky-800 dark:text-gray-400"
              } font-normal`}
              aria-current={router.pathname === item.href ? "page" : undefined}
            >
              {item.icon}
              {item.name}
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default BottomNavigation;
