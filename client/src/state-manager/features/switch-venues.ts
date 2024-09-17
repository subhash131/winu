import { createSlice } from "@reduxjs/toolkit";

type Venue = {
  type: "UPCOMING" | "PAST";
};

const initialState: Venue = {
  type: "UPCOMING",
};

const venues = createSlice({
  name: "Venues",
  initialState,
  reducers: (create) => ({
    updateVenueType: create.reducer<Venue["type"]>((state, action) => {
      state.type = action.payload;
    }),
  }),
});

export const { updateVenueType } = venues.actions;
export default venues.reducer;
