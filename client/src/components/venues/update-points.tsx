import { updatePlayerPoints } from "@/actions/update-player-points";
import { TPlayer } from "@/types/player";
import React, { useState } from "react";
import { FaCheck, FaXmark } from "react-icons/fa6";
import { toast } from "sonner";

const UpdatePoints = ({ players }: { players: TPlayer[] }) => {
  return (
    <div className="h-full w-fit px-10">
      <div className="w-fit gap-5 py-2 border-b flex items-center justify-between">
        <p className="w-40">Player</p>
        <p className="w-20">Points</p>
      </div>
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

export default UpdatePoints;

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
      className="w-fit gap-5 h-10 flex items-center justify-between font-normal"
      key={`${player._id}-points-${player.username}`}
    >
      <p className="w-40 ">{player.username}</p>
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
          className="p-2 rounded-full bg-[#181818] hover:bg-[#484848] transition-colors disabled:bg-[#181818]"
          disabled={input === player.points}
          onClick={updatePoints}
        >
          <FaCheck />
        </button>
      </div>
    </div>
  );
};
