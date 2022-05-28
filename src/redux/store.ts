import {configureStore} from "@reduxjs/toolkit";

import counterReducer from "./features/counterSlice";
import postsReducer from "./features/postsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
