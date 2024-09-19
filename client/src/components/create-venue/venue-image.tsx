"use client";
import { useFileStore } from "@/providers/file-storage-provider";
import { updateImageUrl } from "@/state-manager/features/create-venue-form";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import { TbPhotoUp } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

const VenueImage = () => {
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
      onProgressChange: (p) => {
        setUploadProgress(p);
      },
    });
    dispatch(updateImageUrl(res.url));
    setImage(res.url);
  };
  return (
    <div className="relative w-fit cursor-pointer group border border-[#282828] hover:border-[#484848] rounded-xl overflow-hidden">
      <Image
        src={image}
        alt="image"
        width={10}
        height={10}
        className="size-96 max-lg:size-80 max-md:size-60 bg-[#282828] backdrop-blur-lg rounded-xl"
      />
      <button className="absolute bottom-4 right-4 size-10 rounded-full bg-[#282828] flex items-center justify-center border border-gray-400 group-hover:bg-[#484848] transition-colors">
        <TbPhotoUp
          className="rounded-md text-white transition-colors"
          size={22}
        />
      </button>

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
      <input
        className="opacity-0 top-0 absolute size-full cursor-pointer"
        type="file"
        accept="image/*"
        onChange={uploadImage}
      />
    </div>
  );
};

export default VenueImage;
