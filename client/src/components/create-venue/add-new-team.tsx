"use client";
import { addNewTeam } from "@/state-manager/features/create-venue-form";
import { useDispatch } from "react-redux";

export const AddNewTeam = () => {
  const dispatch = useDispatch();
  const handleAddNew = () => {
    dispatch(addNewTeam());
  };
  return (
    <button
      className="w-fit h-16 border-inactive border hover:border-active transition-colors rounded-lg flex items-center justify-start px-4 py-2 gap-4 cursor-pointer"
      onClick={handleAddNew}
    >
      + Add New
    </button>
  );
};
