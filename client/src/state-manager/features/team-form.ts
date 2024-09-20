import { TPlayer } from "@/types/player";
import { createSlice } from "@reduxjs/toolkit";

export type Team = {
  activeTeamId?: string;
  venueId?: string;
  imageUrl?: string;
  name: string;
  players: TPlayer[];
};

const initialState: Team = {
  activeTeamId: "1",
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
    updatePlayers: create.reducer<TPlayer[]>((state, action) => {
      state.players = action.payload;
    }),
    updateTeamImageUrl: create.reducer<string>((state, action) => {
      state.imageUrl = action.payload;
    }),
    updateActiveTeam: create.reducer<{
      activeTeamId: string;
      players: TPlayer[];
      name: string;
      imageUrl: string;
      venueId: string;
    }>((state, action) => {
      state.activeTeamId = action.payload.activeTeamId;
      state.players = action.payload.players;
      state.name = action.payload.name;
      state.imageUrl = action.payload.imageUrl;
      state.venueId = action.payload.venueId;
    }),
    updateTeamName: create.reducer<string>((state, action) => {
      state.name = action.payload;
    }),
  }),
});

export const {
  updatePlayers,
  updateActiveTeam,
  updateTeamImageUrl,
  updateTeamName,
} = teamForm.actions;
export default teamForm.reducer;
