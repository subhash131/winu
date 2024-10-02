"use client";
import React, { useEffect, useState, useTransition } from "react";
import BidCard from "./bid-card";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { getBidByUser } from "@/actions/get-bids-by-user";
import { useSearchParams } from "next/navigation";
import { IBid } from "@/models/bid";

const BidList = () => {
  const [bids, setBids] = useState<IBid[]>([]);
  const wallet = useAnchorWallet();
  const type = useSearchParams().get("type");
  const [loading, startLoading] = useTransition();

  const fetchBids = () => {
    if (!type || !wallet) return;

    startLoading(async () => {
      const bids = await getBidByUser({
        type,
        userId: wallet.publicKey?.toString(),
      });
      setBids(bids);
    });
  };

  useEffect(() => {
    fetchBids();
  }, [type, wallet]);
  return (
    <>
      {bids.length == 0 && (
        <div className="w-full text-center h-44 flex items-center justify-center text-xl">
          {!wallet && <p>Please connect your wallet!</p>}
          {!loading && wallet && bids.length <= 0 && <p>No Bids!</p>}
          {loading && <p>Loading!</p>}
        </div>
      )}
      <div className="size-full overflow-y-scroll overflow-x-hidden grid [grid-template-columns:repeat(auto-fill,minmax(250px,1fr))] pt-4 gap-4">
        {bids.map((bid) => (
          <BidCard />
        ))}
      </div>
    </>
  );
};

export default BidList;
