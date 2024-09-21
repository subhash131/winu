"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

const BidModal = () => {
  const searchParams = useSearchParams();
  const updateUrl = () => {
    const url = new URL(window.location.toString());
    url.searchParams.set("venue", "");
    window.history.pushState({}, "", url);
  };
  return (
    <div
      className={`fixed size-full top-0 backdrop-blur-md left-0 z-[100] transition-all ${
        searchParams.get("venue") ? "top-0" : "top-[100vh]"
      }`}
      onClick={updateUrl}
    >
      Modal
    </div>
  );
};

export default BidModal;
