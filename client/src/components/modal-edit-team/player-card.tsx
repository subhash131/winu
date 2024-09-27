"use client";
import { useState } from "react";
import { useFileStore } from "@/providers/file-storage-provider";
import {
  updateATeamPlayerImage,
  updateATeamPlayerName,
} from "@/state-manager/features/create-venue-form";
import Image from "next/image";
import { TbPhotoUp } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { useSearchParams } from "next/navigation";

export const PlayerCard = ({
  imageUrl,
  index,
  username,
  id,
}: {
  username: string;
  imageUrl: string;
  id?: string;
  index: number;
}) => {
  const [uploadProgress, setUploadProgress] = useState<number>();
  const activeTeamId = useSearchParams().get("team");
  const dispatch = useDispatch();
  const { edgestore } = useFileStore();

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (id)
      dispatch(
        updateATeamPlayerName({
          playerId: id,
          playerName: e.target.value,
          teamId: activeTeamId!,
        })
      );
  };

  const uploadPlayerImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = (e.target as HTMLInputElement).files;
    if (!files || !files[0]) {
      toast.error("Image not found!");
      return;
    }
    toast.success("uploading image..");
    const res = await edgestore.publicFiles.upload({
      file: files[0],
      onProgressChange: (p: number) => {
        setUploadProgress(p);
      },
    });
    if (id)
      dispatch(
        updateATeamPlayerImage({
          playerId: id,
          playerImage: res.url,
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
          className={`bg-[#282828] size-full ${
            uploadProgress && uploadProgress > 0 && uploadProgress !== 100
              ? "opacity-35"
              : "opacity-100"
          }`}
        />

        <div className="absolute size-4 rounded-full bg-[#282828] flex items-center justify-center border border-gray-400 group-hover:bg-[#484848] transition-all opacity-0 group-hover:opacity-100 pointer-events-none">
          {
            <TbPhotoUp
              className="rounded-md text-white transition-colors pointer-events-none"
              size={22}
            />
          }
        </div>
        <input
          className="size-full absolute top-0 left-0 opacity-0 cursor-pointer"
          type="file"
          accept="image/*"
          onChange={uploadPlayerImage}
        />
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
