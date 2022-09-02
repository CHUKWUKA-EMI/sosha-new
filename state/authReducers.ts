import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthData } from "../types/auth";

interface IinitialState {
  authData: AuthData;
}

export const authSlice = createSlice({
  name: "authData",
  initialState: <IinitialState>{
    authData: "",
  },
  reducers: {
    login: (state: IinitialState, action: PayloadAction<AuthData>) => {
      state.authData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login } = authSlice.actions;

export default authSlice.reducer;
