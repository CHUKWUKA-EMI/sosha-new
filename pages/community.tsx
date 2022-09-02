import { NextPage } from "next";
import Head from "next/head";
import React, { PropsWithChildren } from "react";
import Layout from "../components/Layout";
import { setThreads } from "../state/chatsReducers";
import { useAppDispatch } from "../state/hooks";
import { Thread, Threads } from "../types/chats";
import dayjs from "dayjs";
import { useEffectOnce } from "../components/UseEffectOnce";

interface IProps extends PropsWithChildren {
  page?: string;
  description?: string;
}

const thread: Thread = {
  createdAt: dayjs().format(),
  friend: {
    id: "25525252525",
    firstName: "Chukwuka",
    lastName: "Emi",
    imgUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  friendshipId: (Math.random() * 100).toString(),
  lastMessage: {
    friendshipId: (Math.random() * 100).toString(),
    read: false,
    sentBy: "25525252525",
    text: "last message...",
  },
  user1Id: "25525252525",
  user1Name: "Chukwuka Emi",
  user2Id: "25525252526",
  user2Name: "John Doe",
  updatedAt: dayjs().format(),
};

const Community: NextPage<IProps> = ({ page, description, children }) => {
  const dispatch = useAppDispatch();

  useEffectOnce(() => {
    const threads: Threads = {
      data: [1, 2, 3, 4, 5, 6].map(() => thread),
      count: 6,
      start: 0,
      total: 6,
    };
    dispatch(setThreads(threads));
  });

  return (
    <div className="w-full h-full">
      <Head>
        <title>{`Sosha | ${page ?? "Feed"}`}</title>
        <meta name="description" content={description ?? "Social media App"} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>{children}</Layout>
    </div>
  );
};

export default Community;
