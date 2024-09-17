"use client";
import { toggleModalActive } from "@/state-manager/features/create-venue";
import { Edit } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";

const TeamCard = () => {
  const dispatch = useDispatch();
  const handleToggleModal = () => {
    dispatch(toggleModalActive());
  };
  return (
    <div className="w-80 h-20 border-inactive border hover:border-active transition-colors rounded-lg flex items-center justify-between px-4 py-2 gap-4">
      <div className="size-10 rounded-lg border border-inactive flex-shrink-0">
        <Image
          src="/icon.svg"
          alt="players"
          className="size-full "
          width={10}
          height={10}
        />
      </div>
      <div className="size-full flex flex-col items-start justify-center">
        <p>Name</p>
        <div className="flex">
          <Image
            src="/icon.svg"
            alt="players"
            className="size-4 rounded-full border border-active"
            width={10}
            height={10}
          />
          <Image
            src="/icon.svg"
            alt="players"
            className="size-4 rounded-full border border-active"
            width={10}
            height={10}
          />
          <Image
            src="/icon.svg"
            alt="players"
            className="size-4 rounded-full border border-active"
            width={10}
            height={10}
          />
          <Image
            src="/icon.svg"
            alt="players"
            className="size-4 rounded-full border border-active"
            width={10}
            height={10}
          />
        </div>
      </div>
      <button
        className="size-10 flex-shrink-0 rounded-full border-inactive grid place-content-center group text-inactive hover:text-active hover:border-active transition-colors"
        onClick={handleToggleModal}
      >
        <Edit size={20} />
      </button>
    </div>
  );
};

export default TeamCard;
