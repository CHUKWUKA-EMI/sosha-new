import { DotsHorizontalIcon } from "@heroicons/react/outline";
import { GlobeIcon } from "@heroicons/react/solid";
import Link from "next/link";
import React, { FC, useState } from "react";
import { Post } from "../../../types/post";
import { dateTimeDuration } from "../../../utils/date-time-diff";
import Avatar from "../../Avatar";
import PostOptionsDropDown from "./PostOptionsDropDown";
import { usePopperTooltip } from "react-popper-tooltip";
import UserPopper from "../../UserPopper";

const PostHead: FC<Post> = (post) => {
  const [visible, setVisible] = useState(false);

  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    // visible,
  } = usePopperTooltip({
    trigger: "hover",
    interactive: true,
    placement: "left",
    delayShow: 500,
    delayHide: 200,
    onVisibleChange: handlePopperVisibility,
  });

  function handlePopperVisibility(state: boolean) {
    setVisible(state);
  }

  return (
    <div className="w-full p-4 flex items-center justify-between">
      {visible && (
        <div
          id="popperContainer"
          onMouseEnter={(e) => setVisible(true)}
          ref={setTooltipRef}
          {...getTooltipProps({
            className: "tooltip-container",
          })}
        >
          <div
            {...getArrowProps({
              className: "tooltip-arrow",
              style: { color: "black !important" },
            })}
          />
          <UserPopper {...post.user} />
        </div>
      )}
      <div className="flex gap-4">
        <Avatar className="w-16 h-16" />
        <div className="flex flex-col">
          <Link
            id="userLink"
            onMouseEnter={(e) => setVisible(true)}
            ref={setTriggerRef}
            legacyBehavior={false}
            href={`user/${post.user.id}`}
            className="text-lg text-sky-800 dark:text-white hover:underline dark:hover:text-sky-600 font-semibold"
          >
            {`${post.user.firstName} ${post.user.lastName}`}
          </Link>
          {post.user.headline && (
            <small className="text-sm text-gray-600 dark:text-white font-normal">
              {post.user.headline}
            </small>
          )}
          <small className="text-sm flex items-center gap-1 text-gray-600 dark:text-white tracking-normal font-medium">
            {dateTimeDuration(post.createdAt)}
            <div className="text-sm w-1 h-1 bg-gray-600 rounded-full font-bold" />
            <GlobeIcon role="button" className="w-4 h-4" />
          </small>
        </div>
      </div>
      <PostOptionsDropDown postId={post.id} />
      <button className="xs:hidden w-fit h-fit p-2 text-gray-600 dark:hover:bg-gray-500 hover:bg-gray-300 rounded-full">
        <DotsHorizontalIcon className="w-7 h-7" />
      </button>
    </div>
  );
};

export default PostHead;
