import { Venue, venues } from "@/constants/venues";
import { createSlice } from "@reduxjs/toolkit";

type VenuesState = {
  venues: Venue[];
};

const initialState: VenuesState = { venues };

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
