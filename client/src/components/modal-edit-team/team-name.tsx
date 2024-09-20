"use client";
import { updateATeamName } from "@/state-manager/features/create-venue-form";
import { RootState } from "@/state-manager/store";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const TeamName = () => {
  const [teamName, setTeamName] = useState<string>("");
  const { teams, activeTeamId } = useSelector(
    (state: RootState) => state.CreateVenue
  );

  const dispatch = useDispatch();

  // Set team name on initial load or when activeTeamId changes
  useEffect(() => {
    const activeTeam = teams.find((team) => team.id === activeTeamId);
    if (activeTeam) {
      setTeamName(activeTeam.name);
    }
  }, [activeTeamId, teams]);

  // Handle input value change
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newTeamName = e.target.value;
    setTeamName(newTeamName); // Update the local state immediately for controlled input
    if (activeTeamId) {
      dispatch(
        updateATeamName({ teamId: activeTeamId, teamName: newTeamName })
      );
    }
  };

  return (
    <input
      className="text-xl font-semibold bg-transparent outline-none"
      placeholder="Team name"
      value={teamName}
      onChange={handleNameChange}
    />
  );
};

export default TeamName;
