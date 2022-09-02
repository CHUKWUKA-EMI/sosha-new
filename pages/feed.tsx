import React from "react";
import type { NextPage } from "next";
import Community from "./community";
import Feed from "../components/Feed/Feed";

const feed: NextPage = () => {
  return (
    <Community page="Feed">
      <Feed />
    </Community>
  );
};

export default feed;
