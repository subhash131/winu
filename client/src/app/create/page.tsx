import GradientOverlay from "@/components/gradient-overlay";
import React from "react";

const CreateVenuePage = () => {
  return (
    <main className=" w-screen h-screen overflow-hidden text-white relative">
      <GradientOverlay />
      <div className="size-full absolute top-0 left-0 z-10"></div>
    </main>
  );
};

export default CreateVenuePage;
