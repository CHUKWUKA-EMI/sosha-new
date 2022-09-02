import React from "react";
import type { NextPage } from "next";
import Community from "./community";
import MessagingRoot from "../components/Messaging/MessagingRoot";

const messaging: NextPage = () => {
  return (
    <Community page="Messaging">
      <MessagingRoot />
    </Community>
  );
};

export default messaging;
