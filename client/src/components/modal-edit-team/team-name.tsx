"use client";
import { updateATeamName } from "@/state-manager/features/create-venue-form";
import { RootState } from "@/state-manager/store";
import { useSearchParams } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const TeamName = () => {
  const [teamName, setTeamName] = useState<string>("");
  const { teams } = useSelector((state: RootState) => state.CreateVenue);
  const activeTeamId = useSearchParams().get("team");
  const dispatch = useDispatch();

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newTeamName = e.target.value;
    setTeamName(newTeamName);
    if (activeTeamId) {
      dispatch(
        updateATeamName({ teamId: activeTeamId, teamName: newTeamName })
      );
    }
  };

  useEffect(() => {
    const activeTeam = teams.find((team) => team.id === activeTeamId);
    if (activeTeam) {
      setTeamName(activeTeam.name);
    }
  }, [activeTeamId, teams]);

  return (
    <input
      className="text-xl font-semibold bg-transparent outline-none"
      placeholder="Enter Team Name"
      value={teamName}
      onChange={handleNameChange}
    />
  );
};

export default TeamName;
