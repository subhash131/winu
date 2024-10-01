"use client";
import { getBidByVenue } from "@/actions/get-bids-by-venue";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState, useTransition } from "react";
import { LeaderTable } from "./table";
import { FaSpinner } from "react-icons/fa6";

const LeaderBoard = () => {
  const [bids, setBids] = useState([]);
  const [loading, startTransition] = useTransition();
  const venueId = useSearchParams().get("venue");
  const fetchBids = () => {
    if (!venueId) return;
    startTransition(async () => {
      const res = await getBidByVenue(venueId);
      if (res.length > 0) {
        setBids(res);
      }
    });
  };

  useEffect(() => {
    fetchBids();
  }, []);
  return (
    <div className="px-6 py-4">
      {loading && <FaSpinner className="animate-spin " />}
      {!loading && <LeaderTable bids={bids} />}
    </div>
  );
};

export default LeaderBoard;
