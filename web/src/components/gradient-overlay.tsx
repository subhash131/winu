import React from "react";
import { TsParticles } from "./landing-page/particles";

const GradientOverlay = () => {
  return (
    <div className="h-screen w-full bg-transparent absolute top-0 left-0">
      <TsParticles />
    </div>
  );
};

export default GradientOverlay;
