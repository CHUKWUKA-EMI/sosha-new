import { PaperAirplaneIcon } from "@heroicons/react/solid";
import dayjs from "dayjs";
import React, { FC } from "react";
import { selectConnectionToChatWith } from "../state/chatsReducers";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import { FriendShip, FriendshipStatus, IUser } from "../types/user";
import Avatar from "./Avatar";
import PrimaryButton from "./Buttons/PrimaryButton";
import { useMediaQuery } from "./Hooks/UseMediaQuery";

const UserPopper: FC<Partial<IUser>> = (user) => {
  const dispatch = useAppDispatch();
  const selectedConnections = useAppSelector(
    (state) => state.chats.selectedFriendships
  );

  const mediumScreen = useMediaQuery("(min-width: 768px)");
  const largeScreen = useMediaQuery("(min-width: 1024px)");

  const handleMessageButtonClick = () => {
    if (window.innerWidth <= 767 && selectedConnections.length === 1) return;
    if (
      selectedConnections.length === 2 &&
      mediumScreen &&
      window.innerWidth < 1024
    )
      return;
    if (selectedConnections.length === 3 && largeScreen) return;

    const friendshipId = Math.floor(Math.random() * 100).toLocaleString();

    const selectedConnection: FriendShip = {
      followerId: "",
      friendId: user.id!,
      friendshipId, // temporary
      friendshipStatus: FriendshipStatus.FOLLOWED_BACK,
      friend: user,
      createdAt: dayjs().format(),
    };

    dispatch(selectConnectionToChatWith(selectedConnection));
  };
  return (
    <div className="bg-white dark:bg-[#1d2226] p-3 w-[16rem]">
      <div className="w-full p-3 flex relative gap-2">
        <Avatar className="w-8 h-8" imageUrl={user.imgUrl} />
        <div className="flex flex-col w-full">
          <span className="text-sky-800 dark:text-white text-lg font-semibold">{`${user.firstName} ${user.lastName}`}</span>
          {user.headline && (
            <small className="text-gray-600 dark:text-gray-400">
              {user.headline}
            </small>
          )}
        </div>
      </div>
      <div className="w-full mt-8">
        <PrimaryButton
          onClick={handleMessageButtonClick}
          label="Message"
          startIcon={<PaperAirplaneIcon className="w-6 h-6 rotate-45" />}
          fullWidth
          className="rounded-full font-medium"
        ></PrimaryButton>
      </div>
    </div>
  );
};

export default UserPopper;
