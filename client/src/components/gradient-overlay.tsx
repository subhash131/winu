import React from "react";
import styles from "./gradient.module.css";
import { TsParticles } from "./particles";

const GradientOverlay = () => {
  return (
    <div className="size-full bg-transparent relative">
      <div
        className={`bg-gradient-glow size-96 blur-2xl after:absolute after:w-[90%] after:h-[80%] after:top-[25%] after:left-0 after:bg-gradient-glow after:blur-2xl absolute left-[40%] rounded-b-full after:rounded-b-full`}
      ></div>
      <div
        className={`bg-gradient-glow size-40 blur-2xl after:absolute after:w-[90%] after:h-[80%] after:top-[25%] after:left-0 after:bg-gradient-glow after:blur-2xl absolute left-[2%] rounded-b-full top-40 after:rounded-b-full`}
      ></div>
      <div
        className={`bg-gradient-glow size-40 blur-2xl after:absolute after:w-[90%] after:h-[80%] after:top-[25%] after:left-0 after:bg-gradient-glow after:blur-2xl absolute left-[2%] rounded-b-full top-[50%] bottom-[50%] after:rounded-b-full`}
      ></div>
      <div
        className={`bg-gradient-glow size-40 blur-2xl after:absolute after:w-[90%] after:h-[80%] after:top-[25%] after:left-0 after:bg-gradient-glow after:blur-2xl absolute right-[2%] rounded-b-full  bottom-0 after:rounded-b-full`}
      ></div>
      <div
        className={`bg-gradient-glow size-40 blur-2xl after:absolute after:w-[90%] after:h-[80%] after:top-[25%] after:left-0 after:bg-gradient-glow after:blur-2xl absolute right-[30%] rounded-b-full  bottom-32 after:rounded-b-full`}
      ></div>
      <TsParticles />
    </div>
  );
};

export default GradientOverlay;
