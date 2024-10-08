"use client";
import React, { useEffect, useTransition } from "react";
import ModalEditTeam from "../modal-edit-team";
import StartDatetime from "./start-datetime";
import EndDatetime from "./end-datetime";
import CreateButton from "./create-button";
import Teams from "./teams";
import Description from "./description";
import VenueImage from "./venue-image";
import Title from "./name";
import StreamLink from "./stream-link";
import { Overlay } from "./overlay";
import { useSearchParams } from "next/navigation";
import { getVenueById } from "@/actions/get-venue-by-id";
import { useDispatch } from "react-redux";
import { updateVenueForm } from "@/state-manager/features/create-venue-form";
import { FaSpinner } from "react-icons/fa6";

const CreateVenue = () => {
  const venueId = useSearchParams().get("venue");
  const dispatch = useDispatch();
  const [loading, startTransition] = useTransition();

  const getVenue = () => {
    if (!venueId) return;
    startTransition(async () => {
      const res = await getVenueById(venueId);
      dispatch(updateVenueForm(res));
    });
  };

  useEffect(() => {
    if (!venueId) return;
    getVenue();
  }, [venueId]);

  return (
    <main className="size-full min-h-screen overflow-x-hidden text-white relative pt-10 pb-28 flex flex-col gap-10">
      <ModalEditTeam />
      <Overlay />
      <div className="size-full px-36 flex pt-20 gap-14 max-lg:px-10 ">
        <div className="w-[40%] max-lg:w-[30%] h-full flex-shrink-0">
          <VenueImage />
        </div>
        <div className="size-full flex flex-col gap-4 ">
          <Title />
          <StreamLink />
          <div className="h-28 w-fit backdrop-blur-lg bg-[rgba(40,40,40,0.6)] rounded-lg py-2 px-4 flex flex-col justify-between gap-2">
            <StartDatetime />
            <EndDatetime />
          </div>
          <Description />
          <div className="w-full h-fit flex items-center justify-center">
            <CreateButton />
          </div>
        </div>
      </div>
      <Teams />
      {loading && (
        <div className="size-full absolute top-0 left-0 backdrop-blur-md flex items-center justify-center gap-2 pointer-events-none">
          <FaSpinner className="animate-spin" /> Loading...
        </div>
      )}
    </main>
  );
};

export default CreateVenue;
