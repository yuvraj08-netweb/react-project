import { configureStore } from "@reduxjs/toolkit";

import UserReducer from "../reducers/userSlice";

export const store = configureStore({
  reducer: {
    user: UserReducer,
  },
});
