import React from "react";
import GradientOverlay from "../gradient-overlay";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Anton } from "next/font/google";
import Link from "next/link";

const SpinAnimation = dynamic(
  async () => await import("@/components/landing-page/spin-animation")
);

const anton = Anton({ weight: ["400"], subsets: ["latin"] });

const LandingPage = () => {
  return (
    <main className=" w-screen overflow-hidden text-white relative">
      <GradientOverlay />
      <div className="h-screen w-full z-10 pointer-events-none relative">
        <SpinAnimation />
        <div className="absolute bottom-0 right-0 h-20 w-72 bg-black" />
      </div>
      <div className="absolute size-full left-0 top-0 z-40 flex justify-between items-end pb-20 px-32 max-lg:px-10">
        <Image
          src="/my-team.png"
          alt="my-team"
          width={1}
          height={1}
          className="w-80 object-cover max-md:w-60"
          priority
        />
        <div
          className={`w-full flex-col h-52 flex items-center justify-center gap-2 ${anton.className}`}
        >
          <p className={`text-7xl  text-white max-md:text-3xl max-xl:text-5xl`}>
            VS
          </p>
          <p className="text-3xl text-[#F0BC0D] max-md:text-xl max-xl:text-2xl text-nowrap">
            WIN 100,000+ SOL
          </p>
          <Link
            href="/home?type=active"
            className="text-xl px-5 py-1 rounded-md bg-[#0097A7] hover:scale-105 transition-transform"
          >
            JOIN NOW
          </Link>
        </div>
        <Image
          src="/other-teams.png"
          alt="my-team"
          width={1}
          height={1}
          className="w-80 object-cover max-md:w-60"
          priority
        />
      </div>
    </main>
  );
};

export default LandingPage;
