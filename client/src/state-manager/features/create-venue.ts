import { getTime } from "@/helpers/get-time";
import { createSlice } from "@reduxjs/toolkit";

type CreateVenue = {
  modalActive: boolean;
  startDate: Date;
  startTime: string;
  endDate: Date;
  endTime: string;
  description?: string;
  title: string;
  streamLink: string;
};

const initialState: CreateVenue = {
  modalActive: false,
  startDate: new Date(),
  startTime: getTime("START_TIME"),
  endTime: getTime("END_TIME"),
  endDate: new Date(),
  streamLink: "",
  title: "",
  description: "",
};

const createVenue = createSlice({
  name: "Create Venue",
  initialState,
  reducers: (create) => ({
    toggleModalActive: create.reducer((state) => {
      state.modalActive = !state.modalActive;
    }),
    updateStartDate: create.reducer<Date>((state, action) => {
      state.startDate = action.payload;
    }),
    updateEndDate: create.reducer<Date>((state, action) => {
      state.endDate = action.payload;
    }),
    updateStartTime: create.reducer<string>((state, action) => {
      state.startTime = action.payload;
    }),
    updateEndTime: create.reducer<string>((state, action) => {
      state.endTime = action.payload;
    }),
    updateTitle: create.reducer<string>((state, action) => {
      state.title = action.payload;
    }),
    updateDescription: create.reducer<string>((state, action) => {
      state.description = action.payload;
    }),
    updateStreamLink: create.reducer<string>((state, action) => {
      state.streamLink = action.payload;
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
  updateTitle,
} = createVenue.actions;
export default createVenue.reducer;
