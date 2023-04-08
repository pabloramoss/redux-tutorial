import {configureStore, createListenerMiddleware} from "@reduxjs/toolkit";

import counterReducer, {incremented} from "./features/counterSlice";
import postsReducer, {postAdded} from "./features/postsSlice";

// Create the middleware instance and methods
const listenerMiddleware = createListenerMiddleware();

// Add one or more listener entries that look for specific actions.
// They may contain any sync or async logic, similar to thunks.
listenerMiddleware.startListening({
  actionCreator: postAdded,
  effect: async (action, listenerApi) => {
    // Run whatever additional side-effect-y logic you want here
    console.log("Post added with title: ", action.payload.title);

    listenerApi.dispatch(incremented());
    console.log("Incremented counter");
  },
});

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
