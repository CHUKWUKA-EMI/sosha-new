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
    <div className="w-full shadow-sm shadow-gray-700 bottom-0 z-20 fixed py-2 px-0 text-xs flex items-center justify-around sm:hidden bg-white">
      {navigation.map((item) => {
        return item.name === "Post" ? (
          <button
            onClick={openPostModal}
            key={item.name}
            className="flex flex-col items-center font-normal text-sky-800"
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
              className="flex items-center flex-col text-sky-800 font-normal"
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
