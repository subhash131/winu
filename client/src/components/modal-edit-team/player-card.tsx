"use client";
import { updateATeamPlayer } from "@/state-manager/features/create-venue-form";
import { RootState } from "@/state-manager/store";
import Image from "next/image";
import { TbPhotoUp } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";

export const PlayerCard = ({
  imageUrl,
  index,
  username,
  id,
}: {
  username: string;
  imageUrl: string;
  id: string;
  index: number;
}) => {
  const { activeTeamId } = useSelector((state: RootState) => state.CreateVenue);
  const dispatch = useDispatch();

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateATeamPlayer({
        playerId: id,
        playerName: e.target.value,
        teamId: activeTeamId!,
      })
    );
  };

  return (
    <div className="border h-16 rounded-lg border-inactive flex items-center justify-start gap-4 px-2">
      <div className="relative w-10 flex-shrink-0 h-10 cursor-pointer group border border-[#282828] hover:border-[#484848] rounded-xl flex items-center justify-center overflow-hidden">
        <Image
          src={imageUrl || "/icon.svg"}
          alt="Player Image"
          width={40}
          height={40}
          layout="fixed"
          className="bg-[#282828] size-full object-contain"
        />
        <button className="absolute size-4 rounded-full bg-[#282828] flex items-center justify-center border border-gray-400 group-hover:bg-[#484848] transition-all opacity-0 group-hover:opacity-100">
          <TbPhotoUp
            className="rounded-md text-white transition-colors"
            size={22}
          />
        </button>
      </div>
      <input
        className="bg-transparent outline-none w-full"
        placeholder="Enter Player Name"
        value={username}
        onChange={handleUsernameChange}
      />
    </div>
  );
};
