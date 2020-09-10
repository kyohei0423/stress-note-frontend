import { configureStore } from "@reduxjs/toolkit";

import { authenticationReducer } from "@redux/authentication";

export default configureStore({
  reducer: {
    authentication: authenticationReducer,
  },
});
