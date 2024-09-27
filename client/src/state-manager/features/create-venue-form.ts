import { getTime } from "@/helpers/get-time";
import { TTeam } from "@/types/team";
import { TVenue } from "@/types/venue";
import { v4 as uuidv4 } from "uuid";

import { createSlice } from "@reduxjs/toolkit";
import { TPlayer } from "@/types/player";

export type TeamWithPlayers = {
  players: TPlayer[];
} & Omit<TTeam, "players">;

export type CreateVenue = Omit<
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
  createdBy?: string;
};

const initialState: CreateVenue = {
  id: "",
  modalActive: false,
  startDate: new Date().toISOString(),
  startTime: getTime("START_TIME"),
  endTime: getTime("END_TIME"),
  endDate: new Date().toISOString(),
  streamLink: "",
  name: "",
  description: "",
  teams: [],
};

const createVenue = createSlice({
  name: "Create Venue",
  initialState,
  reducers: (create) => ({
    toggleModalActive: create.reducer((state) => {
      state.modalActive = !state.modalActive;
    }),
    updateVenueForm: create.reducer<Omit<CreateVenue, "id"> & { _id: string }>(
      (state, action) => {
        const {
          endDate,
          endTime,
          modalActive,
          name,
          startDate,
          startTime,
          streamLink,
          teams,
          createdBy,
          description,
          _id,
          imageUrl,
        } = action.payload;

        state.activeTeamId = _id;
        state.createdBy = createdBy;
        state.description = description;
        state.endDate = endDate;
        // TODO::
        state.endTime = "11:00";
        state.id = _id;
        state.imageUrl = imageUrl;
        state.modalActive = modalActive;
        state.name = name;
        state.startDate = startDate;
        // TODO::
        state.startTime = "14:00";
        state.streamLink = streamLink;

        const formattedTeams =
          teams &&
          teams.map((team: any) => {
            return { ...team, id: team._id };
          });
        state.teams = formattedTeams;
      }
    ),

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
          players: [{ username: "", id: uuidv4() }],
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
    updateATeamId: create.reducer<{ teamId: string; newTeamId: string }>(
      (state, action) => {
        state.teams = state.teams.map((team) =>
          team.id === action.payload.teamId
            ? { ...team, id: action.payload.newTeamId }
            : team
        );
      }
    ),
    updateATeamImage: create.reducer<{ imageUrl: string }>((state, action) => {
      state.teams = state.teams.map((team) =>
        team.id === state.activeTeamId
          ? { ...team, imageUrl: action.payload.imageUrl }
          : team
      );
    }),
    updateATeamPlayerName: create.reducer<{
      teamId: string;
      playerId: string;
      playerName: string;
    }>((state, action) => {
      state.teams = state.teams.map((team) => {
        if (team.id === action.payload.teamId) {
          const updatedPlayers = team.players.map((player) =>
            player.id === action.payload.playerId
              ? { ...player, username: action.payload.playerName }
              : player
          );

          return { ...team, players: updatedPlayers };
        }
        return team;
      });
    }),
    updateATeamPlayerImage: create.reducer<{
      teamId: string;
      playerId: string;
      playerImage: string;
    }>((state, action) => {
      state.teams = state.teams.map((team) => {
        if (team.id === action.payload.teamId) {
          const updatedPlayers = team.players.map((player) =>
            player.id === action.payload.playerId
              ? { ...player, imageUrl: action.payload.playerImage }
              : player
          );

          return { ...team, players: updatedPlayers };
        }
        return team;
      });
    }),
    addNewTeamPlayer: create.reducer<{ teamId: string }>((state, action) => {
      state.teams = state.teams.map((team) => {
        if (team.id === action.payload.teamId) {
          return {
            ...team,
            players: [...team.players, { id: uuidv4(), username: "" }],
          };
        }
        return team;
      });
    }),
  }),
});

export const {
  updateVenueForm,
  updateATeamId,
  updateATeamPlayerImage,
  updateATeamImage,
  addNewTeamPlayer,
  updateActiveTeamId,
  updateATeamName,
  updateATeamPlayerName,
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
