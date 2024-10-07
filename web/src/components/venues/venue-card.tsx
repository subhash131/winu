"use client";
import { addUrlParams } from "@/helpers/add-url-params";
import { convertISOToTime } from "@/helpers/convert-iso-time";
import { formatEndDate } from "@/helpers/format-end-date";
import { formatStartDate } from "@/helpers/format-start-date";
import { TeamWithPlayers } from "@/state-manager/features/create-venue-form";
import { Edit } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
type Team = Omit<TeamWithPlayers, "id"> & { _id: string };

const VenueCard = ({
  name,
  startDate,
  endDate,
  imageUrl,
  streamLink,
  description,
  id,
  teams,
  type,
}: {
  name: string;
  id: string;
  startDate: string;
  endDate: string;
  imageUrl: string;
  streamLink: string;
  description: string;
  type?: "MY_VENUE";
  teams: Team[];
}) => {
  const router = useRouter();
  return (
    <div className="w-full h-52 flex">
      <div className="w-36 h-full">
        <h6 className="font-semibold text-base">
          {formatStartDate({ startDate, includeYear: false })}
        </h6>
        <p className="font-medium text-[#8e8e8e]">
          {new Date(startDate).toLocaleString("en-us", { weekday: "long" })}
        </p>
      </div>

      <div className="w-2 h-full relative items-center flex flex-col">
        <div className="size-3 absolute top-0 rounded-full bg-[#606062]" />
        <div className="h-full w-0.5 border-r-2 border-dashed border-[#606062]"></div>
      </div>
      <div className="size-full px-16 py-2">
        <div
          className={`size-full border rounded-xl border-[#484848] bg-[#282828] cursor-pointer hover:border-[#686868] transition-colors max-w-[85%] px-4 pt-2 pb-1 flex justify-between gap-4 ${
            type == "MY_VENUE" ? "group" : ""
          } relative`}
          onClick={() => {
            type === "MY_VENUE"
              ? router.push(`/create?venue=${id}`)
              : addUrlParams({ param: "venue", value: id });
          }}
        >
          <div className="absolute px-3 py-1 size-full flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity gap-2">
            <Edit />
            Edit
          </div>
          <div className="flex flex-col gap-2">
            <div className="w-full h-10 flex items-center justify-start gap-2 font-normal tracking-wider">
              <div className="size-3 rounded-full bg-orange-400 animate-pulse flex-shrink-0" />
              <p className="text-orange-400">LIVE</p>
              <p className="text-yellow-400 ml-4 flex-shrink-0">
                ENDS ON: {formatEndDate({ endDate, includeYear: true })}{" "}
                {convertISOToTime(endDate)}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xl">
                {name.length > 100 ? `${name.substring(0, 100)}` : name}
              </p>
              <p className="text-xs text-[#8C8F90] font-normal">
                {description.length > 150
                  ? `${description.substring(0, 150)} ....`
                  : description}{" "}
              </p>
              <div className="flex">
                {teams.map(({ imageUrl, _id, name }) => {
                  if (imageUrl)
                    return (
                      <Image
                        src={imageUrl}
                        key={_id}
                        alt={name}
                        width={10}
                        height={10}
                        className="size-10 rounded-full bg-black border border-gray-300"
                      />
                    );
                  else
                    return (
                      <div className="size-10 rounded-full bg-black border border-gray-300 grid place-content-center">
                        {name.substring(0, 1)}
                      </div>
                    );
                })}
              </div>
              <p className="text-green-500 mt-1 flex-shrink-0">
                WIN PRIZES UPTO 100,000 SOL
              </p>
            </div>
          </div>
          <div className="size-36 rounded-lg mt-2 bg-black overflow-hidden flex-shrink-0">
            <Image
              src={imageUrl}
              alt="venue"
              width={10}
              height={10}
              className="size-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenueCard;
