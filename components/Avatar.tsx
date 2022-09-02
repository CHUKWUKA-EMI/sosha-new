/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { FC } from "react";

interface IProps {
  className?: string;
  imageUrl?: string;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Avatar: FC<IProps> = ({ className, imageUrl }) => {
  return (
    <Link className="sm:hidden" href="#">
      <a className="w-fit flex items-center justify-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
        <img
          className={classNames(`${className} rounded-full`)}
          src={
            imageUrl ??
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          }
          alt=""
        />
      </a>
    </Link>
  );
};

export default Avatar;
