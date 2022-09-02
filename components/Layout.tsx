import React, { FC, PropsWithChildren } from "react";
import { CreatePostModalMobile } from "./Feed/CreatePostModalMobile";
import BottomNavigation from "./Navigation/BottomNavigation";
import MainNavbar from "./Navigation/MainNavbar";

interface IProps extends PropsWithChildren {}

const Layout: FC<IProps> = ({ children }) => {
  return (
    <div className="w-full h-full px-0">
      <MainNavbar />
      <div className="mt-16" />
      <main className="">{children}</main>
      <CreatePostModalMobile />
      <BottomNavigation />
    </div>
  );
};

export default Layout;
