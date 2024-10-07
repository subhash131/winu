import { getVenueById } from "@/actions/get-venue-by-id";
import { addUrlParams } from "@/helpers/add-url-params";
import { CreateVenue } from "@/state-manager/features/create-venue-form";
import { TPlayer } from "@/types/player";
import { useWallet } from "@solana/wallet-adapter-react";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState, useTransition } from "react";
import UpdatePoints from "./update-points";
import EndGame from "./end-game";

const Manage = () => {
  const [venue, setVenue] = useState<CreateVenue>();
  const [players, setPlayers] = useState<TPlayer[]>();
  const venueId = useSearchParams().get("venue");
  const [loading, startTransition] = useTransition();

  const wallet = useWallet();

  const fetchVenue = async () => {
    if (!venueId) return;
    startTransition(async () => {
      const res = await getVenueById(venueId);
      if (res.createdBy !== wallet.publicKey?.toString()) {
        addUrlParams({ param: "modal", value: "general" });
      }
      setVenue(res);
    });
  };

  useEffect(() => {
    fetchVenue();
  }, [venueId]);

  useEffect(() => {
    if (!venue) return;
    const rawPlayers = venue.teams.map((team) => {
      return team.players;
    });
    setPlayers(rawPlayers.flat());
  }, [venue]);

  return (
    <div className="px-6 pt-4 pb-20 w-full h-fit flex flex-col gap-20 items-center">
      <div>
        {players && <UpdatePoints players={players} />}
        <EndGame />
      </div>
    </div>
  );
};

export default Manage;
