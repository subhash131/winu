"use client";
import { updatePlayers } from "@/state-manager/features/team-form";
import { RootState } from "@/state-manager/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const AddNewPlayer = () => {
  const { players } = useSelector((state: RootState) => state.TeamForm);
  const dispatch = useDispatch();

  const handleAddNewPlayer = () => {
    dispatch(
      updatePlayers([
        ...players,
        { username: "", description: "", imageUrl: "" },
      ])
    );
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
