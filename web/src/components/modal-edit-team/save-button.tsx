"use client";
import React, { useTransition } from "react";
import { RootState } from "@/state-manager/store";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { createTeam } from "@/actions/create-team";
import { updateATeamId } from "@/state-manager/features/create-venue-form";
import { addUrlParams } from "@/helpers/add-url-params";
import { useSearchParams } from "next/navigation";

const SaveButton = () => {
  const [loading, startTransition] = useTransition();
  const { teams } = useSelector((state: RootState) => state.CreateVenue);
  const activeTeamId = useSearchParams().get("team");
  const venueId = useSearchParams().get("venue")!;
  const dispatch = useDispatch();

  const handleSaveTeam = () => {
    teams.forEach((team) => {
      if (team.id === activeTeamId) {
        try {
          startTransition(async () => {
            const newTeam = await createTeam({
              name: team.name,
              players: team.players,
              venueId,
              imageUrl: team.imageUrl,
              activeTeamId,
            });
            if (newTeam) {
              toast.success("Saved!!");
              dispatch(
                updateATeamId({ teamId: team.id, newTeamId: newTeam._id })
              );
              addUrlParams({ param: "team", value: newTeam._id });
            }
          });
        } catch (err) {
          toast.error("Something went wrong!!😕");
          console.log(err);
        }
      }
    });
  };

  return (
    <button
      className="px-4 py-2 bg-white text-black rounded-xl active:scale-95 transition-transform disabled:scale-100 disabled:bg-slate-200"
      onClick={handleSaveTeam}
      disabled={loading}
    >
      Save
    </button>
  );
};

export default SaveButton;
