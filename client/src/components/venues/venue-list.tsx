"use client";
import React, { useEffect, useState } from "react";
import VenueCard from "./venue-card";
import { useSelector } from "react-redux";
import { RootState } from "@/state-manager/store";
import { getActiveVenues } from "@/actions/get-active-venues";
import { getPastVenues } from "@/actions/get-past-venues";

const VenueList = () => {
  const [venues, setVenues] = useState([]);
  const { type } = useSelector((state: RootState) => state.SwitchVenue);
  const getVenues = async () => {
    let res;
    switch (type) {
      case "UPCOMING":
        res = await getActiveVenues();
        break;
      case "PAST":
        res = await getPastVenues();
        break;
    }
    if (res) setVenues(res);
    console.log("🚀 ~ getVenues ~ res:", res);
  };
  useEffect(() => {
    getVenues();
  }, [type]);
  return (
    <div className="h-full w-full overflow-scroll pb-32">
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
            />
          );
        }
      )}
    </div>
  );
};

export default VenueList;
