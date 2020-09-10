import { createSlice } from "@reduxjs/toolkit";

type state = {
  id: number;
};

const initialState = { id: null };

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    login: (state: state, action: redux.action<state>) => {
      return { ...state, ...action.payload };
    },
    logout: () => {
      return initialState;
    },
  },
});

export default authenticationSlice;
export const authenticationActions = authenticationSlice.actions;
export const authenticationReducer = authenticationSlice.reducer;
