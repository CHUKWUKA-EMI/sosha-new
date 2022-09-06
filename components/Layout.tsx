import React, { FC, PropsWithChildren } from "react";
import { useAppSelector } from "../state/hooks";
import { CreatePostModalMobile } from "./Feed/CreatePostModalMobile";
import MessageOverlayConversationBox from "./Messaging/MessageOverlayConversationBox";
import BottomNavigation from "./Navigation/BottomNavigation";
import MainNavbar from "./Navigation/MainNavbar";

interface IProps extends PropsWithChildren {}

const Layout: FC<IProps> = ({ children }) => {
  const selectedConnections = useAppSelector(
    (state) => state.chats.selectedFriendships
  );

  return (
    <div className="w-full h-full px-0">
      <MainNavbar />
      <div className="mt-16" />
      <main className="">{children}</main>
      <CreatePostModalMobile />
      {selectedConnections.length && (
        <div className="fixed bottom-0 sm:left-1/4 sm:right-14 flex items-center justify-start gap-4">
          {selectedConnections.map((connection, i) => (
            <MessageOverlayConversationBox key={i} {...connection} />
          ))}
        </div>
      )}

      <BottomNavigation />
    </div>
  );
};

export default Layout;
