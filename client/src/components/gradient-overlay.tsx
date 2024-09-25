import React from "react";
import styles from "./gradient.module.css";
import { TsParticles } from "./particles";

const GradientOverlay = () => {
  return (
    <div className="size-full bg-transparent relative">
      <TsParticles />
    </div>
  );
};

export default GradientOverlay;
