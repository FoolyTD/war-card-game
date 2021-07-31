// create a redux store boiler plate
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../auth/userSlice";

export default configureStore({
    reducer: {
      user: userReducer
    },
    middleware: getDefaultMiddleware({
      serializableCheck: false,
    }),
  });