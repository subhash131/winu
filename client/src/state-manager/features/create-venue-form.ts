import { getTime } from "@/helpers/get-time";
import { TTeam } from "@/types/team";
import { TVenue } from "@/types/venue";

import { createSlice } from "@reduxjs/toolkit";

type CreateVenue = Omit<
  TVenue,
  "startDate" | "endDate" | "createdBy" | "teams"
> & {
  modalActive: boolean;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  id?: string;
  imageUrl?: string;
  teams: TTeam[];
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
  teams: [{ name: "Team 1" }, { name: "Team 2" }, { name: "Team 3" }],
};

const createVenue = createSlice({
  name: "Create Venue",
  initialState,
  reducers: (create) => ({
    toggleModalActive: create.reducer((state) => {
      state.modalActive = !state.modalActive;
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
        { name: "New Team", imageUrl: "/icon.svg" },
      ];
    }),
  }),
});

export const {
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
