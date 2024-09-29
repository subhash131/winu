"use client";
import React, { useTransition } from "react";
import { placeBid } from "@/contract-actions/place-bid";
import { TPlayer } from "@/types/player";
import { Idl, Program } from "@project-serum/anchor";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import { toast } from "sonner";
import IDL from "@/helpers/contract/idl.json";
import { PROGRAM_ID } from "@/helpers/contract/constants";

const PlaceBidButton = ({ fantasyTeam }: { fantasyTeam: TPlayer[] }) => {
  const connection = useConnection();
  const wallet = useAnchorWallet();
  const [loading, startTransition] = useTransition();

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
    startTransition(async () => {
      const tx = await placeBid({
        bidId: "subhashxxx",
        venueId: "66f6dfb28720ec29ca4c547e",
        program,
        wallet,
      });
    });
  };
  return (
    <button
      className="px-6 py-2 rounded-lg bg-white disabled:bg-gray-400 text-black active:scale-95 transition-all"
      disabled={fantasyTeam.length !== 4 || loading}
      onClick={handlePlaceBid}
    >
      Place Bid
    </button>
  );
};

export default PlaceBidButton;
