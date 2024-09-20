import authReducer from "./reducers/auth";
import bookReducer from "./reducers/book";
import settingReducer from "./reducers/settings";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    auth: authReducer,
    book: bookReducer,
    setting: settingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
