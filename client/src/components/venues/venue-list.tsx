"use client";
import React, { useEffect, useState, useTransition } from "react";
import VenueCard from "./venue-card";
import { getActiveVenues } from "@/actions/get-active-venues";
import { getPastVenues } from "@/actions/get-past-venues";
import { useSearchParams } from "next/navigation";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const VenueList = () => {
  const [venues, setVenues] = useState([]);
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const [loading, startTransition] = useTransition();

  const getVenues = async () => {
    startTransition(async () => {
      let res;
      switch (type) {
        case "PAST":
          res = await getPastVenues();
          break;
        default:
          res = await getActiveVenues();
      }
      if (res) setVenues(res);
      console.log("🚀 ~ getVenues ~ res:", res);
    });
  };

  useEffect(() => {
    getVenues();
  }, [type]);
  return (
    <div className="h-full w-full overflow-scroll pb-32">
      <div
        className={`flex gap-4 overflow-hidden transition-all text-white py-6 items-center  justify-center ${
          loading ? "h-10 w-full" : "h-0 w-0"
        }`}
      >
        <AiOutlineLoading3Quarters className="animate-spin" />
        loading...
      </div>
      {venues.length <= 0 && (
        <div className="size-full flex items-center justify-center">
          No venues..!
        </div>
      )}
      {venues.map(
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
            />
          );
        }
      )}
    </div>
  );
};

export default VenueList;
