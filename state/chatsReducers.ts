import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IChat, IChats, IUserIsTyping, Thread, Threads } from "../types/chats";
import { IUser } from "../types/user";

interface InitialState {
  chats: IChats;
  threads: Threads;
  selectedThread: Thread | null;
  userTyping: IUserIsTyping | null;
}

const chats: IChats = {
  data: [],
  count: 0,
  lastEvaluationKey: "",
};

export const chatSlice = createSlice({
  name: "chats",
  initialState: <InitialState>{
    chats: chats,
    threads: {
      count: 0,
      data: [],
      start: 0,
      total: 0,
    },
    selectedThread: null,
    userTyping: null,
  },
  reducers: {
    setChats: (state: InitialState, action: PayloadAction<IChats>) => {
      if (state.chats.data.length > 0) {
        state.chats.data.push(...action.payload.data);
        state.chats.count += action.payload.count;
        state.chats.lastEvaluationKey = action.payload.lastEvaluationKey;
      } else {
        state.chats = action.payload;
      }
    },
    addChat: (state: InitialState, action: PayloadAction<IChat>) => {
      state.chats.data.push(action.payload);
    },
    selectThread: (
      state: InitialState,
      action: PayloadAction<Thread | null>
    ) => {
      state.selectedThread = action.payload;
    },
    updateChat: (state: InitialState, action: PayloadAction<IChat>) => {
      const chatIndex = state.chats.data.findIndex(
        (c) => c.id === action.payload.id
      );
      if (Math.sign(chatIndex) === -1) return;
      state.chats.data[chatIndex] = action.payload;
    },

    deleteChat: (state: InitialState, action: PayloadAction<IChat>) => {
      state.chats.data = state.chats.data.filter(
        (c) => c.id !== action.payload.id
      );
    },

    setThreads: (state: InitialState, action: PayloadAction<Threads>) => {
      if (state.threads.data.length > 0) {
        state.threads.data.push(...action.payload.data);
        state.threads.count += action.payload.count;
        state.threads.start = action.payload.start;
        state.threads.total = action.payload.total;
      } else {
        state.threads = action.payload;
      }
    },

    addThread: (state: InitialState, action: PayloadAction<Thread>) => {
      state.threads.data.push(action.payload);
    },

    updateThread: (state: InitialState, action: PayloadAction<Thread>) => {
      const threadIndex = state.threads.data.findIndex(
        (thr) => thr.friendshipId === action.payload.friendshipId
      );
      if (Math.sign(threadIndex) === -1) return;
      state.threads.data[threadIndex] = action.payload;
    },

    deleteThread: (state: InitialState, action: PayloadAction<Thread>) => {
      state.threads.data = state.threads.data.filter(
        (t) => t.friendshipId !== action.payload.friendshipId
      );
    },

    handleUserTyping: (
      state: InitialState,
      action: PayloadAction<IUserIsTyping>
    ) => {
      if (state.selectedThread?.friend.id === action.payload.receiverId) {
        state.userTyping = action.payload;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setChats,
  selectThread,
  addChat,
  deleteChat,
  updateChat,
  addThread,
  deleteThread,
  setThreads,
  updateThread,
  handleUserTyping,
} = chatSlice.actions;

export default chatSlice.reducer;
