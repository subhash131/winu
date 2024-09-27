"use client";
import React from "react";
import GradientOverlay from "../gradient-overlay";
import dynamic from "next/dynamic";

const SpinAnimation = dynamic(
  async () => await import("@/components/landing-page/spin-animation")
);

const LandingPage = () => {
  return (
    <main className=" w-screen overflow-x-hidden text-white relative">
      <GradientOverlay />
      <div className="h-screen w-full z-10 pointer-events-none relative">
        <SpinAnimation />
        <div className="absolute bottom-0 right-0 h-20 w-72 bg-black" />
      </div>
      <div className="h-screen w-full "></div>
    </main>
  );
};

export default LandingPage;
