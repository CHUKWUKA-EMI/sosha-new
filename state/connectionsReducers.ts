import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FriendShip, FriendShips } from "../types/user";

type AppState = {
  myConnections: FriendShips;
  myFollowers: FriendShips;
  myFollowings: FriendShips;
  myBlacklistedFriends: FriendShips;
  selectedFriendship: FriendShip | null;
};

const initialState: AppState = {
  myConnections: {
    data: [],
    count: 0,
    start: 0,
    total: 0,
  },
  myFollowers: {
    data: [],
    count: 0,
    start: 0,
    total: 0,
  },
  myFollowings: {
    data: [],
    count: 0,
    start: 0,
    total: 0,
  },
  myBlacklistedFriends: {
    data: [],
    count: 0,
    start: 0,
    total: 0,
  },
  selectedFriendship: null,
};

export const friendsSlice = createSlice({
  name: "friends",
  initialState,
  reducers: {
    setConnections: (
      state: AppState,
      { payload }: PayloadAction<FriendShips>
    ) => {
      if (state.myConnections.data.length > 0) {
        state.myConnections.data.push(...payload.data);
        state.myConnections.count += payload.count;
        state.myConnections.start = payload.start;
        state.myConnections.total = payload.total;
      } else {
        state.myConnections = payload;
      }
    },

    follow: (state: AppState, { payload }: PayloadAction<FriendShip>) => {
      state.myConnections.data.push(payload);
      state.myFollowings.data.push(payload);
    },

    setFollowers: (
      state: AppState,
      { payload }: PayloadAction<FriendShips>
    ) => {
      if (state.myFollowers.data.length > 0) {
        state.myFollowers.data.push(...payload.data);
        state.myFollowers.count += payload.count;
        state.myFollowers.start = payload.start;
        state.myFollowers.total = payload.total;
      } else {
        state.myFollowers = payload;
      }
    },

    setFollowings: (
      state: AppState,
      { payload }: PayloadAction<FriendShips>
    ) => {
      if (state.myFollowings.data.length > 0) {
        state.myFollowings.data.push(...payload.data);
        state.myFollowings.count += payload.count;
        state.myFollowings.start = payload.start;
        state.myFollowings.total = payload.total;
      } else {
        state.myFollowings = payload;
      }
    },

    setBlacklistedFriends: (
      state: AppState,
      { payload }: PayloadAction<FriendShips>
    ) => {
      if (state.myBlacklistedFriends.data.length > 0) {
        state.myBlacklistedFriends.data.push(...payload.data);
        state.myBlacklistedFriends.count += payload.count;
        state.myBlacklistedFriends.start = payload.start;
        state.myBlacklistedFriends.total = payload.total;
      } else {
        state.myBlacklistedFriends = payload;
      }
    },

    blacklistFriend: (
      state: AppState,
      { payload }: PayloadAction<FriendShip>
    ) => {
      state.myBlacklistedFriends.data.push(payload);
      state.myConnections.data = state.myConnections.data.filter(
        (c) => c.friendshipId !== payload.friendshipId
      );
    },

    whitelistFriend: (
      state: AppState,
      { payload }: PayloadAction<FriendShip>
    ) => {
      state.myConnections.data.push(payload);
      state.myBlacklistedFriends.data = state.myBlacklistedFriends.data.filter(
        (c) => c.friendshipId !== payload.friendshipId
      );
    },

    setSelectedConnection: (
      state: AppState,
      { payload }: PayloadAction<FriendShip>
    ) => {
      state.selectedFriendship = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  blacklistFriend,
  follow,
  setBlacklistedFriends,
  setConnections,
  setFollowers,
  setFollowings,
  whitelistFriend,
  setSelectedConnection,
} = friendsSlice.actions;

export default friendsSlice.reducer;
