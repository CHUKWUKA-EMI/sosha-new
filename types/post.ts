import { DateTime, IUser } from "./user";

// --- COMMENT TYPES -----
export type Comment = {
  id: string;
  userId: string;
  user: Partial<IUser>;
  comment: string;
  replies?: Replies;
  createdAt: DateTime;
  updatedAt?: DateTime;
  postId: string;
  numberOfReplies: number;
};

export type CreateCommentInput = {
  postId: string;
  comment: string;
  userId: string;
};

export type UpdateCommentInput = {
  id: string;
  comment: string;
  userId: string;
};

export type Comments = {
  postId: string;
  data: Comment[];
  count: number;
  start: number;
  total: number;
};

// --- POST TYPES ---

export type Post = {
  id: string;
  content?: string;
  imgUrl?: string;
  videoUrl?: string;
  imagekit_fileId?: string;
  userId: string;
  user: Partial<IUser>;
  numberOfLikes: number;
  numberOfComments: number;
  comments?: Comments;
  reactions?: Reactions;
  createdAt: DateTime;
  updatedAt: DateTime;
};

export type Posts = {
  data: Post[];
  count: number;
  start: number;
  total: number;
};

export type CreatePostInput = {
  content?: string;
  imgUrl?: string;
  userId: string;
  imagekit_fileId?: string;
  videoUrl?: string;
};

export type PostInitialState = {
  content?: string;
  image?: File | null;
  video?: string | null;
};

export type PreviewType = "image" | "video" | "none";
export type Preview = {
  type: PreviewType;
  show: boolean;
};

export type UpdatePostInput = {
  id: string;
  userId: string;
  content?: string;
};

export type IGetUserPostsInpuT = {
  userId: string;
  start?: number;
  count?: number;
};

// --- REPLY TYPES ---

export type Reply = {
  id: string;
  userId: string;
  user: Partial<IUser>;
  reply: string;
  createdAt: DateTime;
  updatedAt: DateTime;
  commentId: string;
  postId: string;
};

export type Replies = {
  postId: string;
  commentId: string;
  data: Reply[];
  count: number;
  start: number;
  total: number;
};

export type CreateReplyInput = {
  userId: string;
  commentId: string;
  postId: string;
  reply: string;
};

export type UpdateReplyInput = {
  id: string;
  reply: string;
  userId: string;
};

export type GetRepliesInput = {
  commentId: string;
  postId: string;
  start?: number;
  count?: number;
};

// -- REACTION TYPES ----

export enum ReactionType {
  THUMBSUP = "THUMBSUP",
  HEART = "HEART",
  CLAP = "CLAP",
  DISLIKE = "DISLIKE",
}

export type Reaction = {
  id: string;
  reactionType: ReactionType;
  postId: string;
  userId: string;
  user: Partial<IUser>;
  createdAt: Date;
};

export type Reactions = {
  postId: string;
  data: Reaction[];
  count: number;
  start: number;
  total: number;
};

export type CreateReactionInput = {
  postId: string;
  userId: string;
  reactionType: ReactionType;
};

export type GetReactionsInput = {
  postId: string;
  start: number;
  count: number;
};
