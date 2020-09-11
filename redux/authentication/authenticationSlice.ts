import { createSlice } from "@reduxjs/toolkit";

type State = {
  id: number;
};

const initialState = {};

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    login: (state: State, action: redux.Action<State>) => {
      return { ...state, ...action.payload };
    },
    logout: () => {
      return initialState;
    },
  },
});

export const authenticationActions = authenticationSlice.actions;
export const authenticationReducer = authenticationSlice.reducer;
