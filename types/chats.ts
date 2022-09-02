import { IUser } from "./user";

type DateTime = Date;

export type IChat = {
  id: number;
  senderId: string;
  receiverId: string;
  friendshipId: string;
  message: string;
  imageUrl: string;
  createdAt: DateTime;
  updatedAt: DateTime;
};

export type IChats = {
  data: IChat[];
  count: number;
  lastEvaluationKey?: String;
};
export type IUserIsTyping = {
  friendshipId: string;
  receiverId: string;
  notification: string;
};

export type ICreateChatInput = {
  receiverId: string;
  senderId: string;
  friendshipId: string;
  message?: string;
  imageUrl?: string;
};

export type IUpdateChatInput = {
  id: number;
  message: string;
};

export type IGetChatsInput = {
  friendshipId: string;
  lastkey?: string;
  count?: number;
};

export type SearchChatsInput = {
  friendshipId: string;
  search: string;
  lastkey?: string;
  count?: number;
};

// --- THREAD TYPES ---
export type LastMessage = {
  text: string;
  sentBy: string;
  read: boolean;
  friendshipId: string;
};

export type GetThreadsInput = {
  userId: string;
  start?: number;
  count?: number;
};

export type SearchThreadsInput = {
  userId: string;
  searchTerm: string;
  start?: number;
  count?: number;
};

export type CreateThreadInput = {
  friendshipId: string;
  user1Name: string;
  user1Id: string;
  user2Name: string;
  user2Id: string;
  lastMessage: LastMessage;
};

export type UpdateThreadInput = {
  userId: string;
  friendshipId: string;
  lastMessage: LastMessage;
};

export type Thread = {
  friendshipId: string;
  user1Name: string;
  user1Id: string;
  user2Name: string;
  user2Id: string;
  friend: Partial<IUser>;
  lastMessage: LastMessage;
  createdAt: Date | string;
  updatedAt?: Date | string;
};

export type Threads = {
  data: Thread[];
  count: number;
  start: number;
  total: number;
};
