import { createSlice } from "@reduxjs/toolkit";

type State = {
  id: number;
};

const initialState = {};

const authenticationSlice = createSlice({
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

export default authenticationSlice;
export const authenticationActions = authenticationSlice.actions;
export const authenticationReducer = authenticationSlice.reducer;
