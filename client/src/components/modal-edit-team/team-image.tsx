"use client";
import Image from "next/image";
import React from "react";
import { TbPhotoUp } from "react-icons/tb";
import { useState, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { useFileStore } from "@/providers/file-storage-provider";
import { updateTeamImageUrl } from "@/state-manager/features/team-form";

const TeamImage = () => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [image, setImage] = useState("/icon.svg");
  const { edgestore } = useFileStore();
  const dispatch = useDispatch();

  const uploadImage = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = (e.target as HTMLInputElement).files;
    if (!files || !files[0]) {
      toast.error("Image not found!");
      return;
    }
    setImage(URL.createObjectURL(files[0]));
    const res = await edgestore.publicFiles.upload({
      file: files[0],
      onProgressChange: (p: number) => {
        setUploadProgress(p);
      },
    });
    dispatch(updateTeamImageUrl(res.url));
    setImage(res.url);
  };
  return (
    <div className="size-80 border border-inactive rounded-lg bg-[#282828] relative overflow-hidden">
      <Image
        src={image}
        alt="players"
        className="size-full "
        width={10}
        height={10}
      />
      <button className="absolute bottom-4 right-4 size-10 rounded-full bg-[#282828] flex items-center justify-center border border-gray-400 group-hover:bg-[#484848] transition-colors">
        <TbPhotoUp
          className="rounded-md text-white transition-colors"
          size={22}
        />
      </button>
      <input
        className="opacity-0 top-0 absolute z-10 size-full cursor-pointer"
        type="file"
        accept="image/*"
        onChange={uploadImage}
      />
      {uploadProgress > 0 && uploadProgress != 100 && (
        <div className="absolute left-0 bottom-0 size-full bg-[rgba(200,200,200,0.4)] flex items-center justify-center p-10">
          <div className="w-full h-2 rounded-full border">
            <div
              className="h-full bg-white"
              style={{ width: `${uploadProgress}%` }}
            ></div>
          </div>
          {uploadProgress}
        </div>
      )}
    </div>
  );
};

export default TeamImage;
