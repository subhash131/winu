"use client";
import React from "react";
import { updateStreamLink } from "@/state-manager/features/create-venue";
import { RootState } from "@/state-manager/store";
import { useDispatch, useSelector } from "react-redux";

const StreamLink = () => {
  const { streamLink } = useSelector((state: RootState) => state.CreateVenue);
  const dispatch = useDispatch();

  return (
    <input
      className="text-xl bg-transparent outline-none"
      placeholder="Stream link"
      value={streamLink}
      onChange={(e) => dispatch(updateStreamLink(e.target.value))}
      type="text"
    />
  );
};

export default StreamLink;
