"use client";
import { updateName } from "@/state-manager/features/create-venue-form";
import { RootState } from "@/state-manager/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Title = () => {
  const { name } = useSelector((state: RootState) => state.CreateVenue);
  const dispatch = useDispatch();
  return (
    <input
      className="text-4xl bg-transparent outline-none"
      placeholder="Venue name"
      autoFocus
      onChange={(e) => dispatch(updateName(e.target.value))}
      value={name}
    />
  );
};

export default Title;
