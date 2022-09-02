import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Draft } from "@reduxjs/toolkit";
import {
  Post,
  Posts,
  Comment,
  Comments,
  Reaction,
  ReactionType,
  Reactions,
  Replies,
  Reply,
} from "../types/post";

type ModalType = "mobile" | "desktop" | "none";

type InitialState = {
  posts: Posts;
  openPostModalDesktop: boolean;
  openPostModalMobile: boolean;
};

const posts: Posts = {
  data: [],
  count: 0,
  start: 0,
  total: 0,
};
const initialState: InitialState = {
  posts: posts,
  openPostModalDesktop: false,
  openPostModalMobile: false,
};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state: InitialState, action: PayloadAction<Draft<Posts>>) => {
      if (state.posts.data.length > 0) {
        state.posts.data.push(...action.payload.data);
        state.posts.count += action.payload.count;
        state.posts.start = action.payload.start;
        state.posts.total = action.payload.total;
      } else {
        state.posts = action.payload;
      }
    },
    addPost: (state: InitialState, { payload }: PayloadAction<Draft<Post>>) => {
      state.posts.data.unshift(payload);
    },
    updatePost: (state: InitialState, { payload }: PayloadAction<Post>) => {
      const postIndex = state.posts.data.findIndex((p) => p.id === payload.id);
      if (Math.sign(postIndex) !== -1) {
        state.posts.data[postIndex] = payload;
      }
    },
    deletePost: (state: InitialState, { payload }: PayloadAction<Post>) => {
      state.posts.data = state.posts.data.filter(
        (post) => post.id !== payload.id
      );
    },
    setComments: (
      state: InitialState,
      { payload }: PayloadAction<Comments>
    ) => {
      const post = state.posts.data.find((p) => p.id === payload.postId);
      if (post) {
        if (post.comments) {
          post.comments.data.push(...payload.data);
          post.comments.postId = payload.postId;
          post.comments.count += payload.count;
          post.comments.start = payload.start;
        } else {
          post.comments = payload;
        }
      }
    },
    addAComment: (
      state: InitialState,
      { payload }: PayloadAction<Draft<Comment>>
    ) => {
      const post = state.posts.data.find((post) => post.id === payload.postId);
      if (post) {
        if (post.comments) {
          post.comments.data.push(payload);
        } else {
          const commentsObj: Comments = {
            data: [payload],
            count: 1,
            start: 0,
            total: 1,
            postId: payload.postId,
          };
          post.comments = commentsObj;
        }
        post.numberOfComments += 1;
      }
    },
    updateComment: (
      state: InitialState,
      { payload }: PayloadAction<Comment>
    ) => {
      const post = state.posts.data.find((p) => p.id === payload.postId);
      if (post && post.comments) {
        const commentIdx = post.comments.data.findIndex(
          (c) => c.id === payload.id
        );
        if (Math.sign(commentIdx) !== -1) {
          post.comments.data[commentIdx] = payload;
        }
      }
    },
    deleteComment: (
      state: InitialState,
      { payload }: PayloadAction<Comment>
    ) => {
      const post = state.posts.data.find((p) => p.id === payload.postId);
      if (post && post.comments) {
        post.comments.data = post.comments.data.filter(
          (c) => c.id !== payload.id
        );
        post.numberOfComments--;
      }
    },
    setReplies: (state: InitialState, { payload }: PayloadAction<Replies>) => {
      const post = state.posts.data.find((p) => (p.id = payload.postId));
      if (post) {
        const comment = post.comments?.data.find(
          (c) => c.id === payload.commentId
        );
        if (comment) {
          if (comment.replies) {
            comment.replies.data.push(...payload.data);
            comment.replies.count += payload.count;
            comment.replies.start = payload.start;
          } else {
            comment.replies = payload;
          }
        }
      }
    },
    addReply: (state: InitialState, { payload }: PayloadAction<Reply>) => {
      const post = state.posts.data.find((p) => (p.id = payload.postId));
      if (post) {
        const comment = post.comments?.data.find(
          (c) => c.id === payload.commentId
        );
        if (comment) {
          if (comment.replies) {
            comment.replies.data.push(payload);
          } else {
            const repliesObj: Replies = {
              data: [payload],
              commentId: payload.commentId,
              count: 1,
              postId: payload.postId,
              start: 0,
              total: 1,
            };
            comment.replies = repliesObj;
          }
          comment.numberOfReplies += 1;
        }
      }
    },
    updateReply: (state: InitialState, { payload }: PayloadAction<Reply>) => {
      const post = state.posts.data.find((p) => (p.id = payload.postId));
      if (post) {
        const comment = post.comments?.data.find(
          (c) => c.id === payload.commentId
        );
        if (comment && comment.replies) {
          const replyIdx = comment.replies.data.findIndex(
            (r) => r.id === payload.id
          );
          if (Math.sign(replyIdx) !== -1)
            comment.replies.data[replyIdx] = payload;
        }
      }
    },
    deleteReply: (state: InitialState, { payload }: PayloadAction<Reply>) => {
      const post = state.posts.data.find((p) => (p.id = payload.postId));
      if (post) {
        const comment = post.comments?.data.find(
          (c) => c.id === payload.commentId
        );
        if (comment && comment.replies) {
          comment.replies.data = comment.replies.data.filter(
            (r) => r.id !== payload.id
          );
          comment.numberOfReplies--;
        }
      }
    },

    setReactions: (
      state: InitialState,
      { payload }: PayloadAction<Reactions>
    ) => {
      const post = state.posts.data.find((post) => post.id === payload.postId);
      if (post) {
        if (post.reactions) {
          post.reactions.data.push(...payload.data);
          post.reactions.count += payload.count;
          post.reactions.start = payload.start;
        } else {
          post.reactions = payload;
        }
      }
    },
    reactToPost: (
      state: InitialState,
      { payload }: PayloadAction<Reaction>
    ) => {
      const post = state.posts.data.find((post) => post.id === payload.postId);
      if (post) {
        if (post.reactions) {
          const reactionIds = post.reactions.data.map((r) => r.id);
          if (payload.reactionType === ReactionType.DISLIKE) {
            post.reactions.data = post.reactions.data.filter(
              (r) => r.id !== payload.id
            );
            post.numberOfLikes--;
          } else {
            if (reactionIds.includes(payload.id)) return;
            post.reactions.data.push(payload);
            post.numberOfLikes++;
          }
        } else {
          const reactionsObj: Reactions = {
            data: [payload],
            count: 1,
            postId: payload.postId,
            start: 0,
            total: 1,
          };

          post.reactions = reactionsObj;
        }
      }
    },

    setOpenPostModal: (
      state: InitialState,
      { payload }: PayloadAction<ModalType>
    ) => {
      if (payload === "desktop") {
        state.openPostModalDesktop = true;
        state.openPostModalMobile = false;
      } else if (payload === "mobile") {
        state.openPostModalMobile = true;
        state.openPostModalDesktop = false;
      } else {
        state.openPostModalDesktop = false;
        state.openPostModalMobile = false;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setPosts,
  addPost,
  deletePost,
  addAComment,
  reactToPost,
  addReply,
  deleteComment,
  deleteReply,
  setComments,
  setReactions,
  setReplies,
  updateComment,
  updatePost,
  updateReply,
  setOpenPostModal,
} = postSlice.actions;

export default postSlice.reducer;
