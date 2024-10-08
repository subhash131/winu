"use client";
import {
  addNewTeamPlayer,
  updateActiveTeamId,
} from "@/state-manager/features/create-venue-form";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const AddNewPlayer = () => {
  const dispatch = useDispatch();
  const activeTeamId = useSearchParams().get("team");

  useEffect(() => {
    dispatch(updateActiveTeamId(activeTeamId || ""));
  }, [activeTeamId]);

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
