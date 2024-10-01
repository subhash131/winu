"use client";
import { getVenueById } from "@/actions/get-venue-by-id";
import { addUrlParams } from "@/helpers/add-url-params";
import { CreateVenue } from "@/state-manager/features/create-venue-form";
import { TPlayer } from "@/types/player";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState, useTransition } from "react";
import { FaSpinner } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

import General from "./general";
import LeaderBoard from "./leader-board";

const BidModal = () => {
  const [venue, setVenue] = useState<CreateVenue>();
  const [fantasyTeam, setFantasyTeam] = useState<TPlayer[]>([]);
  const venueId = useSearchParams().get("venue");

  const [loading, startTransition] = useTransition();

  const modal = useSearchParams().get("modal");

  const fetchVenue = async () => {
    if (!venueId) return;

    startTransition(async () => {
      const res = await getVenueById(venueId);
      setVenue(res);
    });
  };

  useEffect(() => {
    fetchVenue();
    setFantasyTeam([]);
  }, [venueId]);

  return (
    <div
      className={`fixed size-full backdrop-blur-md left-0 z-[100] transition-all flex items-center justify-center ${
        venueId ? "top-0" : "-top-[100vh]"
      }`}
      onClick={() => addUrlParams({ param: "venue", value: "" })}
    >
      <div
        className="w-[90%] h-[90%] rounded-xl border border-[#484848] bg-[#282828] overflow-x-hidden overflow-y-scroll relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full h-10 border-b border-[#484848] flex px-6 items-center justify-start gap-4">
          <button
            onClick={() => {
              addUrlParams({ param: "modal", value: "" });
            }}
            className={`${
              modal === "leader-board" ? "text-gray-300" : "underline"
            }`}
          >
            General
          </button>
          <button
            onClick={() => {
              addUrlParams({ param: "modal", value: "leader-board" });
            }}
            className={`${
              modal === "leader-board" ? "underline" : "text-gray-300"
            }`}
          >
            Leader board
          </button>
        </div>
        <div className="h-fit w-full backdrop-blur-lg flex items-center justify-between border-b px-6 border-[#484848] sticky top-0 py-2">
          <h2 className="text-2xl">{!loading && venue?.name}</h2>
          <button
            className="rounded-full grid place-content-center p-2 transition-colors"
            onClick={() => addUrlParams({ param: "venue", value: "" })}
          >
            <IoMdClose size={24} className="text-active hover:text-white" />
          </button>
        </div>
        {loading && (
          <div className="size-full p-10 flex gap-2 items-center justify-center">
            <FaSpinner className="animate-spin" />
            loading...
          </div>
        )}

        {!loading && venue && (
          <>
            {modal === "leader-board" ? (
              <LeaderBoard />
            ) : (
              <General
                venue={venue}
                fantasyTeam={fantasyTeam}
                setFantasyTeam={setFantasyTeam}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default BidModal;
