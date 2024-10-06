import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CreateVenue from "./features/create-venue-form";
import Venues from "./features/venues";

const reducer = combineReducers({ CreateVenue, Venues });

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
