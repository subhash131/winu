import { combineReducers, configureStore } from "@reduxjs/toolkit";
import SwitchVenue from "./features/switch-venues";
import CreateVenue from "./features/create-venue-form";
import Venues from "./features/venues";
import TeamForm from "./features/team-form";

const reducer = combineReducers({ SwitchVenue, CreateVenue, Venues, TeamForm });

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
