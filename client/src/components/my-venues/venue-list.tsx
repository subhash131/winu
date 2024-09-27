"use client";
import { getVenueByUserId } from "@/actions/get-venues-by-userId";
import { useAnchorWallet, useWallet } from "@solana/wallet-adapter-react";
import React, { useEffect, useState, useTransition } from "react";
import { FaSpinner } from "react-icons/fa6";
import { toast } from "sonner";
import VenueCard from "../venues/venue-card";

const VenueList = () => {
  const [myVenues, setMyVenues] = useState([]);
  const [loading, startTransition] = useTransition();
  const wallet = useWallet();
  const fetchMyVenues = async () => {
    if (wallet.connecting || !wallet.connected || !wallet.publicKey) {
      setMyVenues([]);
      return;
    }

    const res = await getVenueByUserId(wallet.publicKey.toString());
    if (res.length > 0) {
      setMyVenues(res);
    }
    console.log("🚀 ~ fetchMyVenues ~ res:", res);
    return res;
  };

  useEffect(() => {
    startTransition(() => {
      fetchMyVenues();
    });
  }, [wallet?.publicKey]);
  return (
    <div className="size-full">
      <div className="flex items-center justify-center size-full gap-4 transition-all py-2">
        {loading && (
          <>
            <FaSpinner className="animate-spin" />
            <p>Loading...</p>
          </>
        )}
        {wallet.connected && myVenues.length <= 0 && !loading && "No Venues"}
        {!wallet.connected && "Connect your wallet!"}
      </div>
      {myVenues.map(
        ({
          _id,
          name,
          startDate,
          endDate,
          imageUrl,
          streamLink,
          description,
          teams,
        }) => {
          return (
            <VenueCard
              name={name}
              key={_id}
              startDate={startDate}
              endDate={endDate}
              imageUrl={imageUrl}
              streamLink={streamLink}
              description={description}
              teams={teams}
              id={_id}
              type="MY_VENUE"
            />
          );
        }
      )}
    </div>
  );
};

export default VenueList;
