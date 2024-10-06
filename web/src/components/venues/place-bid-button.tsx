"use client";
import React, { useTransition } from "react";
import { placeBid } from "@/contract-actions/place-bid";
import { placeBid as mongoPlaceBid } from "@/actions/place-bid";
import { TPlayer } from "@/types/player";
import { Idl, Program } from "@project-serum/anchor";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import { toast } from "sonner";
import IDL from "@/helpers/contract/idl.json";
import { PROGRAM_ID } from "@/helpers/contract/constants";
import { FaSpinner } from "react-icons/fa6";
import { useSearchParams } from "next/navigation";
import { deleteBid } from "@/actions/delete-bid";

const PlaceBidButton = ({ fantasyTeam }: { fantasyTeam: TPlayer[] }) => {
  const connection = useConnection();
  const wallet = useAnchorWallet();
  const [loading, startTransition] = useTransition();
  const venueId = useSearchParams().get("venue");

  const handlePlaceBid = () => {
    if (!wallet) {
      toast.error("Please connect your wallet!");
      return;
    }
    if (!PROGRAM_ID) {
      toast.error("PROGRAM_ID is missing, contact developer!");
      return;
    }
    const program = new Program(IDL as Idl, PROGRAM_ID, connection);
    if (!venueId) {
      toast.error("Not a valid venue");
      return;
    }

    startTransition(async () => {
      const team = fantasyTeam.map((team) => team._id!);

      const res = await mongoPlaceBid({
        team,
        user: wallet.publicKey.toString(),
        venueId,
      });

      const tx = await placeBid({
        bidId: res._id,
        venueId,
        program,
        wallet,
      });
      if (tx) {
        toast.success(`Bid placed :: ${tx}`);
      } else {
        await deleteBid({ bidId: res._id });
      }
    });
  };
  return (
    <button
      className="px-6 py-2 rounded-lg bg-white disabled:bg-gray-400 text-black active:scale-95 transition-all w-36 flex items-center justify-center"
      disabled={fantasyTeam.length !== 4 || loading}
      onClick={handlePlaceBid}
    >
      {loading ? <FaSpinner className="animate-spin" /> : "Place Bid"}
    </button>
  );
};

export default PlaceBidButton;
