"use client";
import {
  updateEndTime,
  updateStartTime,
} from "@/state-manager/features/create-venue-form";
import { RootState } from "@/state-manager/store";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const StartTimePicker = ({ type }: { type: "START_TIME" | "END_TIME" }) => {
  const timeRef = useRef<HTMLInputElement>(null);
  const { startTime, endTime } = useSelector(
    (state: RootState) => state.CreateVenue
  );
  const dispatch = useDispatch();

  const updateTime = () => {
    if (!timeRef.current) return;
    switch (type) {
      case "START_TIME":
        dispatch(updateStartTime(timeRef.current.value));
        break;
      case "END_TIME":
        dispatch(updateEndTime(timeRef.current.value));
    }
  };

  return (
    <form className="max-w-[10rem] w-[120px] mx-auto">
      <div className="relative">
        <input
          type="time"
          id="time"
          className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none"
          min="09:00"
          max="18:00"
          required
          onChange={updateTime}
          value={type === "START_TIME" ? startTime : endTime}
          ref={timeRef}
        />
      </div>
    </form>
  );
};

export default StartTimePicker;
