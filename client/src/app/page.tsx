import GradientOverlay from "@/components/gradient-overlay";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className=" w-screen h-screen overflow-hidden text-white relative">
      <GradientOverlay />
      <div className="size-full absolute top-0 left-0 z-10">
        <Navbar />
      </div>
    </main>
  );
}
