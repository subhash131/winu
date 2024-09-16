import React from "react";
import GradientOverlay from "@/components/gradient-overlay";

const CreatePage = () => {
  return (
    <main className=" w-screen h-screen overflow-hidden text-white relative">
      <GradientOverlay />
      <div className="size-full absolute top-0 left-0 z-10">
        
      </div>
    </main>
  );
};

export default CreatePage;
