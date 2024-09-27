"use client";
import React, { Suspense } from "react";
import GradientOverlay from "../gradient-overlay";
import dynamic from "next/dynamic";
import { FaSpinner } from "react-icons/fa6";
import { Spicy_Rice } from "next/font/google";

const SpinAnimation = dynamic(
  async () => await import("@/components/landing-page/spin-animation")
);

const spicyRice = Spicy_Rice({
  weight: ["400"],
  subsets: ["latin"],
});

const LandingPage = () => {
  return (
    <main className=" w-screen overflow-x-hidden text-white relative">
      <GradientOverlay />
      <div className="h-screen w-full z-10 pointer-events-none relative">
        <Suspense
          fallback={
            <div className="w-screen h-screen flex items-center justify-center flex-col">
              <p className={`text-9xl tracking-widest ${spicyRice.className}`}>
                WINU
              </p>
              <p className="text-xl tracking-wider">
                Win big with your dream team.
              </p>
              <FaSpinner className="animate-spin mt-2" />
            </div>
          }
        >
          <SpinAnimation />
        </Suspense>
        <div className="absolute bottom-0 right-0 h-20 w-72 bg-black" />
      </div>
      <div className="h-screen w-full "></div>
    </main>
  );
};

export default LandingPage;
