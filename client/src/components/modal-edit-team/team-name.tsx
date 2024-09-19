"use client";
import { updateTeamName } from "@/state-manager/features/team-form";
import { RootState } from "@/state-manager/store";
import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

const TeamName = () => {
  const { name } = useSelector((state: RootState) => state.TeamForm);
  const dispatch = useDispatch();
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateTeamName(e.target.value));
  };
  return (
    <input
      className="text-xl font-semibold bg-transparent outline-none"
      placeholder="Team name"
      name={name}
      onChange={handleNameChange}
    />
  );
};

export default TeamName;
