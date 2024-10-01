import { getVenueById } from "@/actions/get-venue-by-id";
import { updatePlayerPoints } from "@/actions/update-player-points";
import { CreateVenue } from "@/state-manager/features/create-venue-form";
import { TPlayer } from "@/types/player";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState, useTransition } from "react";
import { FaCheck, FaSpinner, FaXmark } from "react-icons/fa6";
import { toast } from "sonner";

const Manage = () => {
  const [venue, setVenue] = useState<CreateVenue>();
  const [players, setPlayers] = useState<TPlayer[]>();
  const venueId = useSearchParams().get("venue");
  const [loading, startTransition] = useTransition();

  const fetchVenue = async () => {
    if (!venueId) return;

    startTransition(async () => {
      const res = await getVenueById(venueId);
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
    <div className="px-6 pt-4 pb-10 size-full">
      {players?.map((player) => {
        return (
          <>
            <List player={player} />
          </>
        );
      })}
    </div>
  );
};

export default Manage;

const List = ({ player }: { player: TPlayer }) => {
  const [input, setInput] = useState<number>(Number(player.points));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(player._id);
    const value = e.target.value;
    const parsedValue = Number(value.replace(/^0+/, ""));
    if (!isNaN(parsedValue) && parsedValue >= 0) {
      setInput(parsedValue);
    } else {
      setInput(0);
    }
  };

  const updatePoints = async () => {
    if (!player._id) return;
    const res = await updatePlayerPoints({
      playerId: player._id,
      points: input,
    });
    if (res) {
      toast.success("Points Updated");
    }
  };

  return (
    <div
      className="w-fit gap-5 h-10 flex items-center justify-between"
      key={`${player._id}-points-${player.username}`}
    >
      <p className="w-40">{player.username}</p>
      <input
        className="bg-transparent border-[#383838] border-b outline-none focus:border-b-2 transition-all w-20 text-center focus:border-active"
        onChange={handleInputChange}
        type="number"
        value={input}
        min={0}
        onWheel={(e) => e.currentTarget.blur()}
      />
      <div className="flex gap-2">
        <button
          className="p-2 rounded-full bg-[#383838] hover:bg-[#484848] transition-colors disabled:bg-[#181818]"
          disabled={input === player.points}
          onClick={updatePoints}
        >
          <FaCheck />
        </button>
        <button
          className="p-2 rounded-full bg-[#383838] hover:bg-[#484848] transition-colors disabled:bg-[#181818]"
          disabled={input === player.points}
          onClick={() => {
            if (!player.points) setInput(0);
            else setInput(player.points);
          }}
        >
          <FaXmark />
        </button>
      </div>
    </div>
  );
};
