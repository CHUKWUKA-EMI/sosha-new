import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser, IUsers } from "../types/user";

type InitialState = {
  users: IUsers;
};

const initialState: InitialState = {
  users: {
    data: [],
    count: 0,
    start: 0,
    total: 0,
  },
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state: InitialState, { payload }: PayloadAction<IUsers>) => {
      state.users = payload;
    },

    updateUser: (state: InitialState, { payload }: PayloadAction<IUser>) => {
      const userIndex = state.users.data.findIndex(
        (user) => user.id === payload.id
      );
      if (Math.sign(userIndex) !== -1) {
        state.users.data[userIndex] = payload;
      }
    },
    removeUser: (state: InitialState, { payload }: PayloadAction<IUser>) => {
      state.users.data = state.users.data.filter(
        (user) => user.id !== payload.id
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { removeUser, setUsers, updateUser } = usersSlice.actions;

export default usersSlice.reducer;
