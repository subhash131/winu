"use client";
import { getVenueById } from "@/actions/get-venue-by-id";
import { addUrlParams } from "@/helpers/add-url-prarams";
import { CreateVenue } from "@/state-manager/features/create-venue-form";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

const BidModal = () => {
  const [venue, setVenue] = useState<CreateVenue>();
  const searchParams = useSearchParams();
  const venueId = searchParams.get("venue");

  const fetchVenue = async () => {
    if (!venueId) return;
    console.log("🚀 ~ fetchVenue ~ venueId:", venueId);
    const res = await getVenueById(venueId);
    setVenue(res);
  };
  useEffect(() => {
    fetchVenue();
  }, [venueId]);
  return (
    <div
      className={`fixed size-full top-0 backdrop-blur-md left-0 z-[100] transition-all flex items-center justify-center ${
        searchParams.get("venue") ? "top-0" : "-top-[100vh]"
      }`}
      onClick={() => addUrlParams({ param: "venue", value: "" })}
    >
      <div className="w-[80%] h-[80%] rounded-xl border border-[#484848] bg-[#282828] py-4 px-8">
        <div className="h-fit w-full backdrop-blur-lg flex items-center justify-between ">
          <h2 className="text-xl">{venue?.name}</h2>
          <button className="rounded-full border border-inactive hover:border-active grid place-content-center p-2 transition-colors">
            <IoMdClose size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BidModal;
