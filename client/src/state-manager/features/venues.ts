import { createSlice } from "@reduxjs/toolkit";
import { CreateVenue } from "./create-venue-form";

type Venue = Omit<CreateVenue, "modalActive" | "activeTeamId"> & {};

type VenuesState = {
  venues: Venue[];
};

const initialState: VenuesState = { venues: [] };

const createVenue = createSlice({
  name: "Venues",
  initialState,
  reducers: (create) => ({
    addVenue: create.reducer<Venue>((state, action) => {
      state.venues = [...state.venues, action.payload];
    }),
  }),
});

export const { addVenue } = createVenue.actions;
export default createVenue.reducer;
