import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";

const reducer = {
  auth: userSlice,
};

export const store = configureStore({ reducer });
