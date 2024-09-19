import { getTime } from "@/helpers/get-time";
import { TVenue } from "@/types/venue";
import { createSlice } from "@reduxjs/toolkit";

type CreateVenue = Omit<TVenue, "startDate" | "endDate" | "createdBy"> & {
  modalActive: boolean;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  id?: string;
  imageUrl?: string;
};

const initialState: CreateVenue = {
  modalActive: false,
  startDate: new Date().toISOString(),
  startTime: getTime("START_TIME"),
  endTime: getTime("END_TIME"),
  endDate: new Date().toISOString(),
  streamLink: "",
  name: "",
  description: "",
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
  }),
});

export const {
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
} = createVenue.actions;
export default createVenue.reducer;
