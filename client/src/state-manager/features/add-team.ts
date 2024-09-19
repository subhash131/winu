import { TPlayer } from "@/types/player";
import { createSlice } from "@reduxjs/toolkit";

type Team = {
  id?: string;
  venueId?: string;
  players: TPlayer[];
};

const initialState: Team = {
  players: [],
};

const venues = createSlice({
  name: "Venues",
  initialState,
  reducers: (create) => ({
    updateVenueId: create.reducer<string>((state, action) => {
      state.venueId = action.payload;
    }),
    updatePlayers: create.reducer<TPlayer[]>((state, action) => {
      state.players = action.payload;
    }),
  }),
});

export const { updateVenueId } = venues.actions;
export default venues.reducer;
