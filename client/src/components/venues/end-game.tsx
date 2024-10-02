"use client";
import { getBidByVenue } from "@/actions/get-bids-by-venue";
import { endGame } from "@/contract-actions/end-game";
import { AnchorProvider, Idl, Program } from "@project-serum/anchor";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState, useTransition } from "react";
import { FaSpinner } from "react-icons/fa6";
import IDL from "@/helpers/contract/idl.json";
import { PROGRAM_ID } from "@/helpers/contract/constants";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import { toast } from "sonner";
import { updateBidResult } from "@/actions/update-bid-result";

const EndGame = () => {
  const [bids, setBids] = useState<
    { user: string; points: number; _id: string }[]
  >([]);
  const [loading, startTransition] = useTransition();
  const venueId = useSearchParams().get("venue");
  const wallet = useAnchorWallet();
  const { connection } = useConnection();

  const fetchBids = () => {
    if (!venueId) return;
    startTransition(async () => {
      const res = await getBidByVenue(venueId);
      if (res.length > 0) {
        const parsedBid = res.map((bid: any) => {
          const totalPoints = bid.team.reduce((total: number, t: any) => {
            if (t) {
              return total + t.points;
            }
          }, 0);
          console.log("bid::", { ...bid, points: totalPoints });
          return { ...bid, points: totalPoints };
        });
        const sortedBids = parsedBid.sort(
          (a: any, b: any) => b.points - a.points
        );
        setBids(sortedBids);
      }
    });
  };

  const handleEndGame = async () => {
    if (!PROGRAM_ID) {
      toast.error("Invalid env variables, please contact developer!");
      return;
    }
    if (!venueId) {
      toast.error("venue id is missing!");
      return;
    }
    if (!wallet) {
      toast.error("Please Connect your wallet");
      return;
    }
    const provider = new AnchorProvider(connection, wallet, {
      commitment: "confirmed",
    });
    const program = new Program(IDL as Idl, PROGRAM_ID, provider);
    startTransition(async () => {
      await endGame({
        venueId,
        program,
        wallet: wallet.publicKey,
        winner: new PublicKey(bids[0].user),
      });
      await updateBidResult({ bidId: bids[0]._id });
    });
  };

  useEffect(() => {
    fetchBids();
  }, []);
  return (
    <div className="size-full px-10 py-2 flex items-start justify-center">
      <button
        className="px-4 py-3 bg-[#383838] shadow-2xl border border-[#353535] hover:border-active active:scale-95 transition-all rounded-lg"
        type="button"
        disabled={loading}
        onClick={handleEndGame}
      >
        {loading ? <FaSpinner className="animate-spin" /> : "End Game"}
      </button>
    </div>
  );
};

export default EndGame;
