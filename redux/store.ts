import { configureStore } from "@reduxjs/toolkit";

import { authenticationReducer } from "@redux/authentication/authenticationSlice";

export default configureStore({
  reducer: {
    authentication: authenticationReducer,
  },
});
