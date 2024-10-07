"use client";
import { createVenue } from "@/actions/create-venue";
import { registerVenue } from "@/contract-actions/register-venue";
import { addUrlParams } from "@/helpers/add-url-params";
import { combineDateAndTime } from "@/helpers/combine-date-time";
import { RootState } from "@/state-manager/store";
import { AnchorProvider, Idl, Program } from "@project-serum/anchor";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import { useSearchParams } from "next/navigation";
import React, { useState, useTransition } from "react";
import { useSelector } from "react-redux";
import { toast } from "sonner";

import IDL from "@/helpers/contract/idl.json";
import { PROGRAM_ID } from "@/helpers/contract/constants";
import { updateVenueById } from "@/actions/update-venue-by-id";

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
  const venueId = useSearchParams().get("venue");
  const wallet = useAnchorWallet();

  const { connection } = useConnection();

  const createOrUpdate = async () => {
    if (!name) {
      toast.error("Venue name is missing");
      return;
    }
    if (!streamLink) {
      toast.error("stream Link is missing");
      return;
    }

    if (!wallet) {
      toast.error("please connect your wallet!");
      return;
    }
    if (!PROGRAM_ID) {
      toast.error(
        "Environment variables missing, please contact the developer!"
      );
      return;
    }
    const provider = new AnchorProvider(connection, wallet, {
      commitment: "confirmed",
    });
    const program = new Program(IDL as Idl, PROGRAM_ID, provider);
    const userId = wallet?.publicKey?.toString();
    if (!userId) {
      toast.error("Please Connect your wallet");
      return;
    }

    try {
      startTransition(async () => {
        const parsedStartDate = combineDateAndTime(
          startDate,
          startTime
        ).toISOString();

        const parsedEndDate = combineDateAndTime(
          endDate,
          endTime
        ).toISOString();

        if (venueId) {
          const res = await updateVenueById({
            createdBy: userId,
            description,
            imageUrl,
            name,
            streamLink,
            startDate: parsedStartDate,
            endDate: parsedEndDate,
            id: venueId,
          });
          if (res) {
            toast.success("venue updated!");
          }
        } else {
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
            await registerVenue({
              venueId: res._id,
              program,
              wallet: wallet?.publicKey,
            });
            addUrlParams({ param: "venue", value: res._id });
          }
        }
      });
    } catch (err) {
      console.log("🚀 ~ create ~ err:", err);
    }
  };

  return (
    <button
      className="bg-white text-black font-semibold px-10 py-2 rounded-lg active:scale-95 transition-transform disabled:bg-gray-300 disabled:scale-100"
      onClick={createOrUpdate}
      disabled={loading}
    >
      {venueId ? "Update" : "Create venue"}
    </button>
  );
};

export default CreateButton;
