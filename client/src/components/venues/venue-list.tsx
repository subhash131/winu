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
    console.log("🚀 ~ VenueList ~ type:", type);
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
    console.log("venues ::", res);
  };
  useEffect(() => {
    getVenues();
  }, [type]);
  return (
    <div className="h-full w-full overflow-scroll pb-32">
      {venues.map(({ id, name }) => {
        return <VenueCard name={name} key={id} />;
      })}
    </div>
  );
};

export default VenueList;
