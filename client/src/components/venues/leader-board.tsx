"use client";
import { getBidByVenue } from "@/actions/get-bids-by-venue";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState, useTransition } from "react";
import { LeaderTable } from "./table";
import { FaSpinner } from "react-icons/fa6";
import { IBid } from "@/models/bid";

type Bid = IBid & {
  points: number;
};

const LeaderBoard = () => {
  const [bids, setBids] = useState<Bid[]>([]);
  const [loading, startTransition] = useTransition();
  const venueId = useSearchParams().get("venue");
  const fetchBids = () => {
    if (!venueId) return;
    startTransition(async () => {
      const res = await getBidByVenue(venueId);
      if (res.length > 0) {
        const parsedBid: Bid[] = res.map((bid: Bid) => {
          const totalPoints = bid.team.reduce((total: number, t: any) => {
            if (t) {
              return total + t.points;
            }
          }, 0);
          console.log("bid::", { ...bid, points: totalPoints });
          return { ...bid, points: totalPoints };
        });
        const sortedBids = parsedBid.sort((a, b) => b.points - a.points);
        setBids(sortedBids);
      }
    });
  };

  useEffect(() => {
    fetchBids();
  }, []);
  return (
    <div className="px-6 py-4">
      {loading && <FaSpinner className="animate-spin " />}
      {!loading && (
        <>
          <LeaderTable bids={bids} />
        </>
      )}
    </div>
  );
};

export default LeaderBoard;
