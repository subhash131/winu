"use client";
import React from "react";
import { toggleModalActive } from "@/state-manager/features/create-venue-form";
import { RootState } from "@/state-manager/store";
import { useDispatch, useSelector } from "react-redux";

const ModalOverlay = () => {
  const { modalActive } = useSelector((state: RootState) => state.CreateVenue);
  const dispatch = useDispatch();

  const handleCloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    dispatch(toggleModalActive());
  };
  if (!modalActive) return;
  return (
    <div
      className="w-screen h-screen fixed top-0 left-0 backdrop-blur-md overflow-hidden z-10"
      onClick={handleCloseModal}
    />
  );
};

export default ModalOverlay;
