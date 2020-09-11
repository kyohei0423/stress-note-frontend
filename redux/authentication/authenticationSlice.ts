import { createSlice } from "@reduxjs/toolkit";

import { Action } from "@redux/types";

type State = {
  id: number;
};

const initialState = {};

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    login: (state: State, action: Action<State>) => {
      return { ...state, ...action.payload };
    },
    logout: () => {
      return initialState;
    },
  },
});

export const authenticationActions = authenticationSlice.actions;
export const authenticationReducer = authenticationSlice.reducer;
