"use client";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { updateStartDate } from "@/state-manager/features/create-venue-form";
import StartTimePicker from "./time-picker";

const StartDatetime = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const dispatch = useDispatch();

  useEffect(() => {
    if (date) dispatch(updateStartDate(date.toISOString()));
  }, [date]);

  return (
    <div className="w-full flex gap-4 items-center justify-between">
      <p>Start</p>
      <div className="flex items-center justify-center gap-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-[220px] justify-start text-left text-gray-800 font-semibold"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        <StartTimePicker type="START_TIME" />
      </div>
    </div>
  );
};

export default StartDatetime;
