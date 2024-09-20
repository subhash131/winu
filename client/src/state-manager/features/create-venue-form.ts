import { getTime } from "@/helpers/get-time";
import { TTeam } from "@/types/team";
import { TVenue } from "@/types/venue";
import { v4 as uuidv4 } from "uuid";

import { createSlice } from "@reduxjs/toolkit";
import { TPlayer } from "@/types/player";

type TeamWithPlayers = {
  players: TPlayer[];
} & Omit<TTeam, "players">;

type CreateVenue = Omit<
  TVenue,
  "startDate" | "endDate" | "createdBy" | "teams"
> & {
  modalActive: boolean;
  activeTeamId?: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  id?: string;
  imageUrl?: string;
  teams: TeamWithPlayers[];
};

const initialState: CreateVenue = {
  id: "remove",
  modalActive: false,
  startDate: new Date().toISOString(),
  startTime: getTime("START_TIME"),
  endTime: getTime("END_TIME"),
  endDate: new Date().toISOString(),
  streamLink: "",
  name: "",
  description: "",
  teams: [
    { name: "Team 1", id: "1", players: [{ username: "", id: "1" }] },
    { name: "Team 2", id: "2", players: [{ username: "", id: "2" }] },
    { name: "Team 3", id: "3", players: [{ username: "", id: "3" }] },
  ],
};

const createVenue = createSlice({
  name: "Create Venue",
  initialState,
  reducers: (create) => ({
    toggleModalActive: create.reducer((state) => {
      state.modalActive = !state.modalActive;
    }),
    updateActiveTeamId: create.reducer<string>((state, action) => {
      state.activeTeamId = action.payload;
    }),
    updateStartDate: create.reducer<string>((state, action) => {
      state.startDate = action.payload;
    }),
    updateEndDate: create.reducer<string>((state, action) => {
      state.endDate = action.payload;
    }),
    updateStartTime: create.reducer<string>((state, action) => {
      state.startTime = action.payload;
    }),
    updateEndTime: create.reducer<string>((state, action) => {
      state.endTime = action.payload;
    }),
    updateName: create.reducer<string>((state, action) => {
      state.name = action.payload;
    }),
    updateDescription: create.reducer<string>((state, action) => {
      state.description = action.payload;
    }),
    updateStreamLink: create.reducer<string>((state, action) => {
      state.streamLink = action.payload;
    }),
    updateVenueId: create.reducer<string>((state, action) => {
      state.id = action.payload;
    }),
    updateImageUrl: create.reducer<string>((state, action) => {
      state.imageUrl = action.payload;
    }),
    updateTeams: create.reducer<CreateVenue["teams"]>((state, action) => {
      state.teams = action.payload;
    }),
    addNewTeam: create.reducer((state) => {
      state.teams = [
        ...state.teams,
        {
          id: uuidv4(),
          name: `Team ${state.teams.length + 1}`,
          players: [{ username: "" }],
        },
      ];
    }),
    updateATeamName: create.reducer<{ teamId: string; teamName: string }>(
      (state, action) => {
        state.teams = state.teams.map((team) =>
          team.id === action.payload.teamId
            ? { ...team, name: action.payload.teamName }
            : team
        );
      }
    ),
    updateATeamPlayer: create.reducer<{
      teamId: string;
      teamName: string;
      playerId: string;
      playerName: string;
    }>((state, action) => {
      const newTeam = state.teams.map((team) => {
        if (team.id === action.payload.teamId) {
          team.players.map((player) => {
            if (player.id === action.payload.playerId) {
              return { ...player, username: action.payload.playerName };
            } else return player;
          });
          return { ...team, name: action.payload.teamName };
        } else return team;
      });
      state.teams = newTeam;
    }),
  }),
});

export const {
  updateActiveTeamId,
  updateATeamName,
  updateATeamPlayer,
  addNewTeam,
  toggleModalActive,
  updateStartDate,
  updateStartTime,
  updateEndTime,
  updateEndDate,
  updateDescription,
  updateStreamLink,
  updateName,
  updateVenueId,
  updateImageUrl,
  updateTeams,
} = createVenue.actions;
export default createVenue.reducer;
