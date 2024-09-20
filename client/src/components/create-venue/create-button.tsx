"use client";
import { createVenue } from "@/actions/create-venue";
import { combineDateAndTime } from "@/helpers/combine-date-time";
import { updateVenueId } from "@/state-manager/features/create-venue-form";
import { RootState } from "@/state-manager/store";
import { useUser } from "@clerk/nextjs";
import React, { useTransition } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

const CreateButton = () => {
  const {
    endDate,
    endTime,
    startDate,
    startTime,
    streamLink,
    name,
    description,
    imageUrl,
    id,
  } = useSelector((state: RootState) => state.CreateVenue);
  const dispatch = useDispatch();
  const { user } = useUser();
  const [loading, startTransition] = useTransition();

  const parsedStartDate = combineDateAndTime(
    startDate,
    startTime
  ).toISOString();
  const parsedEndDate = combineDateAndTime(endDate, endTime).toISOString();

  const create = async () => {
    const userId = user?.id || "123xyz";

    try {
      startTransition(async () => {
        const res = await createVenue({
          createdBy: userId,
          description,
          imageUrl,
          name,
          streamLink,
          startDate: parsedStartDate,
          endDate: parsedEndDate,
        });
        if (res) {
          dispatch(updateVenueId(res._id));
          toast.success("Venue created..! Add Teams..");
        }
      });
    } catch (err) {
      console.log("🚀 ~ create ~ err:", err);
    }
  };

  if (id) return;
  return (
    <button
      className="bg-white text-black font-semibold px-10 py-2 rounded-lg active:scale-95 transition-transform disabled:bg-gray-300 disabled:scale-100"
      onClick={create}
      disabled={loading}
    >
      Create venue
    </button>
  );
};

export default CreateButton;
