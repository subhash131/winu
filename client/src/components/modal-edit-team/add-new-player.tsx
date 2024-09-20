"use client";
import { addNewTeamPlayer } from "@/state-manager/features/create-venue-form";
import { RootState } from "@/state-manager/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const AddNewPlayer = () => {
  const { activeTeamId } = useSelector((state: RootState) => state.CreateVenue);
  const dispatch = useDispatch();

  const handleAddNewPlayer = () => {
    if (activeTeamId) dispatch(addNewTeamPlayer({ teamId: activeTeamId }));
  };
  return (
    <button
      className="border h-16 rounded-lg border-inactive flex items-center justify-start gap-4 px-6 w-fit"
      onClick={handleAddNewPlayer}
    >
      + Add New
    </button>
  );
};

export default AddNewPlayer;
