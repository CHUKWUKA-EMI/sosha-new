/* eslint-disable @next/next/no-img-element */

import { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  UsersIcon,
  HomeIcon,
  ChatIcon,
  BellIcon,
} from "@heroicons/react/solid";
import { LogoutIcon, UserCircleIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import SearchInput from "../TextFields/SearchInput";
import { ToggleButton } from "../Buttons/ToggleButton";

const navigation = [
  { name: "Home", href: "/feed", icon: <HomeIcon className="h-6 w-6" /> },
  { name: "People", href: "/people", icon: <UsersIcon className="h-6 w-6" /> },
  {
    name: "Messaging",
    href: "/messaging",
    icon: <ChatIcon className="h-6 w-6" />,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function MainNavbar() {
  const router = useRouter();
  const [enabledDarkMode, setEnabledDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("sosha.theme");
    if (theme === "dark") {
      setEnabledDarkMode(true);
    } else {
      setEnabledDarkMode(false);
    }
  }, []);

  const handThemeToggle = () => {
    if (enabledDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("sosha.theme");
      setEnabledDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("sosha.theme", "dark");
      setEnabledDarkMode(true);
    }
  };

  return (
    <nav className="dark:bg-[#1d2226] fixed z-30 top-0 left-0 right-0 bg-white px-4">
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
        <div className="relative flex items-center  justify-around sm:justify-between h-16">
          <div className="w-fit max-w-fit flex flex-auto items-center justify-center sm:items-stretch sm:justify-start">
            <Link className="sm:hidden" href="/profile">
              <a className="sm:hidden dark:bg-white bg-sky-800 w-fit flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </a>
            </Link>
            {/* <div
              role="link"
              className="flex-shrink-0 hidden dark:bg-slate-300 rounded-lg sm:flex items-center"
            > */}
            <Link className="hidden sm:flex" href="/feed">
              <a className="flex-shrink-0 hidden rounded-lg sm:flex items-center">
                <img
                  className="h-8 w-auto"
                  src="https://ik.imagekit.io/chukwuka1991/Component_4ZAw9YtQAa.png?updatedAt=1635083451062"
                  alt="Workflow"
                />
              </a>
            </Link>
            {/* </div> */}

            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    href={item.href}
                    key={item.name}
                    aria-current={
                      router.pathname === item.href ? "page" : undefined
                    }
                  >
                    <a
                      className={classNames(
                        "flex items-center flex-col dark:text-gray-400 text-sky-800 dark:hover:bg-inherit hover:bg-sky-700 dark:hover:text-white hover:text-white",
                        "px-3 py-2 rounded-md text-sm font-medium"
                      )}
                      aria-current={
                        router.pathname === item.href ? "page" : undefined
                      }
                    >
                      {item.icon}
                      {item.name}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-1 items-center w-full max-w-[70%] sm:max-w-[30%] ml-3 sm:ml-0 mr-3">
            <SearchInput
              fullWidth
              containerStyle="rounded-full"
              className="rounded-full"
            />
          </div>
          <div className="absolute inset-y-0 min-w-fit flex items-center -right-[8px] sm:right-0 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="p-1 rounded-full text-sky-800 dark:text-gray-400 hover:text-white dark:hover:text-white hover:bg-sky-700 dark:hover:bg-inherit focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">View notifications</span>
              <BellIcon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="ml-3 relative hidden sm:block">
              <div>
                <Menu.Button className="bg-sky-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-800 focus:ring-white">
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
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
                <Menu.Items className="origin-top-right text-slate-700 font-semibold absolute right-0 mt-2 w-48 rounded-md shadow-lg dark:bg-[#1d2226] dark:text-gray-400 dark:border dark:border-gray-400 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item
                    as="button"
                    className="w-full flex items-center py-1 px-3 dark:hover:bg-inherit dark:hover:text-white hover:bg-gray-200"
                  >
                    <UserCircleIcon className="w-6 h-6" />
                    <Link href="/profile">
                      <a
                        className={classNames(
                          "ui-active:bg-gray-100 block px-4 py-2 text-base"
                        )}
                      >
                        Profile
                      </a>
                    </Link>
                  </Menu.Item>

                  <Menu.Item
                    as="button"
                    className="w-full flex items-center py-1 px-3 dark:hover:bg-inherit dark:hover:text-white hover:bg-gray-100"
                  >
                    <LogoutIcon className="w-6 h-6" />
                    <span
                      className={classNames(
                        "ui-active:bg-gray-100 block px-4 py-2 text-base"
                      )}
                    >
                      Sign out
                    </span>
                  </Menu.Item>
                  <Menu.Item
                    as="div"
                    className="border-t dark:hover:text-white border-gray-600 px-3 py-3"
                  >
                    <ToggleButton
                      enabled={enabledDarkMode}
                      handleChange={handThemeToggle}
                      className=""
                    />
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </nav>
  );
}
