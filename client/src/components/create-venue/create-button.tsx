"use client";
import { createVenue } from "@/actions/create-venue";
import { addUrlParams } from "@/helpers/add-url-params";
import { combineDateAndTime } from "@/helpers/combine-date-time";
import { RootState } from "@/state-manager/store";
import { useWallet } from "@solana/wallet-adapter-react";
import { useSearchParams } from "next/navigation";
import React, { useTransition } from "react";
import { useSelector } from "react-redux";
import { toast } from "sonner";

const CreateButton = () => {
  const {
    endDate,
    endTime,
    startDate,
    startTime,
    streamLink,
    name,
    description,
    imageUrl,
  } = useSelector((state: RootState) => state.CreateVenue);
  const [loading, startTransition] = useTransition();
  const wallet = useWallet();
  const venueId = useSearchParams().get("venue");

  const parsedStartDate = combineDateAndTime(
    startDate,
    startTime
  ).toISOString();
  
  const parsedEndDate = combineDateAndTime(endDate, endTime).toISOString();

  const create = async () => {
    const userId = wallet.publicKey?.toString();
    if (!userId) {
      toast.error("Please Connect your wallet");
      return;
    }

    try {
      startTransition(async () => {
        const res = await createVenue({
          createdBy: userId,
          description,
          imageUrl,
          name,
          streamLink,
          startDate: parsedStartDate,
          endDate: parsedEndDate,
        });
        if (res) {
          addUrlParams({ param: "venue", value: res._id });
          toast.success("Venue created..! Add Teams..");
        }
      });
    } catch (err) {
      console.log("🚀 ~ create ~ err:", err);
    }
  };

  if (venueId) return;
  return (
    <button
      className="bg-white text-black font-semibold px-10 py-2 rounded-lg active:scale-95 transition-transform disabled:bg-gray-300 disabled:scale-100"
      onClick={create}
      disabled={loading}
    >
      Create venue
    </button>
  );
};

export default CreateButton;
