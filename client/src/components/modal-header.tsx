import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const ModalHeader = () => {
  return (
    <div className="w-full backdrop-blur-md h-fit sticky top-0 px-6 py-2 flex items-center justify-between border-b border-inactive">
      <button>
        <FaCircleArrowRight size={24} />
      </button>
      <div className="flex gap-4 items-center w-fit h-full">
        <button className="p-1 grid place-content-center rounded-lg bg-inactive hover:border-active border border-inactive transition-colors">
          <IoIosArrowUp size={22} />
        </button>
        <button className="p-1 grid place-content-center rounded-lg bg-inactive hover:border-active border border-inactive transition-colors">
          <IoIosArrowDown size={22} />
        </button>
      </div>
    </div>
  );
};

export default ModalHeader;
