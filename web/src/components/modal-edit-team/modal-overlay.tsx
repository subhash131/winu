"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import { addUrlParams } from "@/helpers/add-url-params";

const ModalOverlay = () => {
  const modalActive = useSearchParams().get("team");

  const handleCloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    addUrlParams({ param: "team", value: "" });
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
