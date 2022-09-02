import { configureStore } from "@reduxjs/toolkit";
import usersReducers from "./usersReducers";
import friendsReducers from "./connectionsReducers";
import authReducers from "./authReducers";
import chatReducers from "./chatsReducers";
import postReducers from "./postsReducers";
import countriesReducers from "./countriesReducers";

export const store = configureStore({
  reducer: {
    users: usersReducers,
    friends: friendsReducers,
    authData: authReducers,
    chats: chatReducers,
    posts: postReducers,
    countries: countriesReducers,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
