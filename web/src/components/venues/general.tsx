import React from "react";
import PlaceBidButton from "./place-bid-button";
import { CreateVenue } from "@/state-manager/features/create-venue-form";
import { useSearchParams } from "next/navigation";
import { TPlayer } from "@/types/player";
import Image from "next/image";
import { convertISOToTime } from "@/helpers/convert-iso-time";
import { formatStartDate } from "@/helpers/format-start-date";
import { formatEndDate } from "@/helpers/format-end-date";
import { toast } from "sonner";
import { CopyIcon } from "lucide-react";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

const General = ({
  venue,
  setFantasyTeam,
  fantasyTeam,
}: {
  venue: CreateVenue;
  setFantasyTeam: React.Dispatch<React.SetStateAction<TPlayer[]>>;
  fantasyTeam: TPlayer[];
}) => {
  if (!venue) return;

  return (
    <div className="size-full p-10 flex flex-col gap-10">
      <div className="flex gap-10">
        {venue.imageUrl && (
          <div className="rounded-lg overflow-hidden bg-black border border-active w-fit">
            <Image
              src={venue?.imageUrl}
              alt="profile"
              width={10}
              height={10}
              className="size-60 rounded-lg w-fit"
            />
          </div>
        )}
        <div className="flex flex-col gap-2">
          <p>{venue.description}</p>
          <p className="uppercase text-sm font-medium">
            STARTS ON : {convertISOToTime(venue.startDate)}
            {",  "}
            {formatStartDate({ startDate: venue.startDate })}
          </p>
          <p className="uppercase text-sm font-medium text-orange-500">
            ENDS ON : {convertISOToTime(venue.endDate)}
            {", "}
            {formatEndDate({ endDate: venue.endDate })}
          </p>
          <div className="flex gap-2 items-center">
            <p className="uppercase text-sm font-medium">
              HOSTED BY : {venue.createdBy}
            </p>
            <button
              className="p-1 rounded-lg"
              onClick={() => {
                navigator.clipboard.writeText(`${venue.createdBy}`);
                toast.success(`address copied`);
              }}
            >
              <CopyIcon size={20} className="text-active" />
            </button>
          </div>
          <Link
            href={venue.streamLink}
            className="font-medium text-sm"
            target="_blank"
          >
            STREAM LINK : {venue.streamLink}
          </Link>
          <p className="font-medium text-sm">POOL SIZE : 100,000</p>
          <p className="font-medium text-sm">BID AMOUNT : 1 SOL</p>
          <p className="font-medium text-sm">1st PRIZE : 10,000 SOL</p>
        </div>
      </div>
      <div className="size-full">
        <p className="text-xl pb-4">Participants</p>
        {venue.teams.length <= 0 && (
          <p className="text-red-500 font-semibold w-full">
            The host hasn't added the players yet. Stay tuned!
          </p>
        )}
        <div className="w-full grid [grid-template-columns:repeat(auto-fit,minmax(250px,300px))] gap-4">
          {venue.teams.map((team) => {
            return (
              <div className="border rounded-lg border-active px-4 py-2">
                <div className="flex items-center gap-2 pb-2">
                  {team.imageUrl && (
                    <Image
                      src={team.imageUrl}
                      alt="team"
                      width={1}
                      height={1}
                      className="size-8 rounded-full border border-active"
                    />
                  )}
                  <p className="text-xl underline">{team.name}</p>
                </div>
                <div className="flex flex-col gap-2 pb-4">
                  {team.players.map(({ imageUrl, username, _id, points }) => {
                    return (
                      <div
                        className="pl-6 font-normal flex items-center gap-2 cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          setFantasyTeam((prev) => {
                            if (prev.length < 4) {
                              const index = prev.findIndex(
                                (team) => team._id === _id
                              );
                              if (index >= 0) {
                                toast.error("Player is already in the team");
                                return prev;
                              }
                              return [
                                ...prev,
                                { _id, username, imageUrl, points },
                              ];
                            }
                            toast.error("Your team is full");
                            return prev;
                          });
                        }}
                        key={_id}
                      >
                        <Image
                          src={imageUrl || "/icon.svg"}
                          alt="player"
                          width={1}
                          height={1}
                          className="size-5 rounded-full border border-active"
                        />

                        <p className="uppercase tracking-wider">{username}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {venue.teams.length > 0 && (
        <div className="size-full pb-20">
          <p className="text-xl pb-4">My Fantasy Team</p>
          {fantasyTeam.length <= 0 && (
            <p className="w-full text-red-500">
              Select 4 players from the above participants list!
            </p>
          )}
          <div className="w-full grid [grid-template-columns:repeat(auto-fit,minmax(250px,300px))] gap-4">
            {fantasyTeam.map(({ _id, username, imageUrl }) => {
              return (
                <div
                  className="h-fit rounded-lg border border-active px-4 py-3 flex items-center gap-2"
                  key={_id}
                >
                  <div className="size-full flex items-center gap-2">
                    <Image
                      src={imageUrl || "/icon.svg"}
                      alt="player"
                      width={1}
                      height={1}
                      className="size-6 flex-shrink-0 border border-active rounded-full"
                    />
                    <p className="uppercase tracking-wider font-normal">
                      {username}
                    </p>
                  </div>
                  <button
                    className="p-1 rounded-full border border-active"
                    onClick={() => {
                      setFantasyTeam((prev) => {
                        const updatedTeam = prev.filter(
                          (team) => team._id != _id
                        );
                        return updatedTeam;
                      });
                    }}
                  >
                    <IoMdClose size={18} />
                  </button>
                </div>
              );
            })}
          </div>
          <div className="w-full h-16 font-normal uppercase py-10">
            <PlaceBidButton fantasyTeam={fantasyTeam} />
          </div>
        </div>
      )}
    </div>
  );
};

export default General;
