import { TPlayer } from "@/types/player";
import { createSlice } from "@reduxjs/toolkit";

type Team = {
  id?: string;
  venueId?: string;
  imageUrl?: string;
  name: string;
  players: TPlayer[];
};

const initialState: Team = {
  players: [
    { username: "player1", imageUrl: "", description: "" },
    { username: "", imageUrl: "", description: "" },
  ],
  name: "Demo",
};

const teamForm = createSlice({
  name: "Team Form",
  initialState,
  reducers: (create) => ({
    updateVenueId: create.reducer<string>((state, action) => {
      state.venueId = action.payload;
    }),
    updatePlayers: create.reducer<TPlayer[]>((state, action) => {
      state.players = action.payload;
    }),
    updateTeamImageUrl: create.reducer<string>((state, action) => {
      state.imageUrl = action.payload;
    }),
    updateTeamId: create.reducer<string>((state, action) => {
      state.id = action.payload;
    }),
    updateTeamName: create.reducer<string>((state, action) => {
      state.name = action.payload;
    }),
  }),
});

export const {
  updateVenueId,
  updatePlayers,
  updateTeamId,
  updateTeamImageUrl,
  updateTeamName,
} = teamForm.actions;
export default teamForm.reducer;
