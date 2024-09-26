"use client";
import Spline from "@splinetool/react-spline/next";
import { Spicy_Rice } from "next/font/google";
import { Suspense } from "react";
import { FaSpinner } from "react-icons/fa6";

const spicyRice = Spicy_Rice({
  weight: ["400"],
  subsets: ["latin"],
});

export default function SpinAnimation() {
  return (
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
      <Spline scene="https://prod.spline.design/dKrfIJhMYj0FRiyA/scene.splinecode" />
    </Suspense>
  );
}
