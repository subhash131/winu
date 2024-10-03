"use client";
import { claimReward } from "@/contract-actions/claim-reward";
import { PROGRAM_ID } from "@/helpers/contract/constants";
import { IVenue } from "@/models/venue";
import { AnchorProvider, Idl, Program } from "@project-serum/anchor";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import Image from "next/image";
import React, { useTransition } from "react";
import { toast } from "sonner";
import IDL from "@/helpers/contract/idl.json";
import { FaSpinner } from "react-icons/fa6";
import { updateBidClaimed } from "@/actions/update-bid-claimed";

const BidCard = ({
  claimed,
  venue,
  won,
  id,
}: {
  claimed: boolean;
  venue: IVenue;
  won: boolean;
  id: string;
}) => {
  const wallet = useAnchorWallet();
  const { connection } = useConnection();
  const [loading, startTransition] = useTransition();

  const handleClaimReward = async () => {
    if (!wallet) {
      toast.error("Please connect your wallet!");
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
    console.log(venue._id);
    console.log(id);
    const program = new Program(IDL as Idl, PROGRAM_ID, provider);
    startTransition(async () => {
      await claimReward({
        bidId: id,
        venueId: venue._id as string,
        wallet: wallet,
        program,
      });
      await updateBidClaimed({ bidId: id });
    });
  };
  return (
    <div className="relative w-full bg-[#181818] border-[#484848] rounded-lg border h-60 text-sm flex flex-col items-center">
      <div className="absolute size-full z-0 shadow-inner rounded-lg overflow-hidden">
        <Image
          className="object-cover size-full rounded-md"
          src={venue.imageUrl || "/icon.svg"}
          alt="image"
          width={10}
          height={10}
        />
      </div>
      <div className="size-full flex justify-end flex-col px-4 z-10 bg-gradient-to-b from-[rgba(255,255,255,0)] to-[rgba(0,0,0,0.9)] rounded-lg py-2">
        <p>{venue.name}</p>
        <div className="flex items-center justify-between pb-2">
          {won && <p className="text-green-500">WON</p>}
          {!won && <p className="text-red-500">LOST</p>}
          {won && !claimed && (
            <button
              className="bg-white text-black px-3 py-1 rounded-lg active:scale-95 transition-transform"
              disabled={claimed}
              onClick={handleClaimReward}
            >
              {loading ? <FaSpinner className="animate-spin" /> : "Claim"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BidCard;
