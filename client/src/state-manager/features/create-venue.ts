import { createSlice } from "@reduxjs/toolkit";

type CreateVenue = {
  modalActive: boolean;
};

const initialState: CreateVenue = {
  modalActive: false,
};

const createVenue = createSlice({
  name: "Create Venue",
  initialState,
  reducers: (create) => ({
    toggleModalActive: create.reducer((state, action) => {
      state.modalActive = !state.modalActive;
    }),
  }),
});

export const { toggleModalActive } = createVenue.actions;
export default createVenue.reducer;
