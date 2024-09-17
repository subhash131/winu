import { combineReducers, configureStore } from "@reduxjs/toolkit";
import SwitchVenue from "./features/switch-venues";

const reducer = combineReducers({ SwitchVenue });

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
