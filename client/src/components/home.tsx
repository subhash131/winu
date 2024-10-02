"use client";
import React, { useLayoutEffect } from "react";
import Venues from "./venues";
import { useSearchParams } from "next/navigation";
import { addUrlParams } from "@/helpers/add-url-params";

const Home = () => {
  const type = useSearchParams().get("type");
  useLayoutEffect(() => {
    if (!type) {
      addUrlParams({ param: "type", value: "active" });
    }
  }, []);
  return (
    <div className="size-full top-0 left-0 z-10 pt-28 px-36 max-lg:px-20 ">
      <Venues />
    </div>
  );
};

export default Home;
