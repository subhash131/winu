"use client";
import { updateTitle } from "@/state-manager/features/create-venue";
import { RootState } from "@/state-manager/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Title = () => {
  const { title } = useSelector((state: RootState) => state.CreateVenue);
  const dispatch = useDispatch();
  return (
    <input
      className="text-4xl bg-transparent outline-none"
      placeholder="Venue name"
      autoFocus
      onChange={(e) => dispatch(updateTitle(e.target.value))}
      value={title}
    />
  );
};

export default Title;
