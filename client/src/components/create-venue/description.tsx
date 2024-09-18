"use client";

import { updateDescription } from "@/state-manager/features/create-venue";
import { RootState } from "@/state-manager/store";
import { useDispatch, useSelector } from "react-redux";

const Description = () => {
  const { description } = useSelector((state: RootState) => state.CreateVenue);
  const dispatch = useDispatch();
  return (
    <textarea
      name="description"
      className="bg-transparent focus:border-active font-normal outline-none border border-inactive resize-none rounded-lg p-4 text-xs h-32 transition-colors"
      placeholder="add description"
      onChange={(e) => dispatch(updateDescription(e.target.value))}
      value={description}
    />
  );
};

export default Description;
