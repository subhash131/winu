import GradientOverlay from "@/components/gradient-overlay";
import SplineAnimation from "@/components/spline-animation";

export default function Home() {
  return (
    <main className=" w-screen h-screen overflow-hidden text-white relative">
      <GradientOverlay />
      <div className="size-full absolute top-0 left-0 z-10">
        <SplineAnimation />
      </div>
    </main>
  );
}
