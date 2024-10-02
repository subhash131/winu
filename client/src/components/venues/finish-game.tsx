import React from "react";

const FinishGame = () => {
  return (
    <div className="size-full px-10 py-2 flex items-center justify-center">
      <button
        className="px-4 py-3 bg-[#383838] shadow-2xl border border-[#353535] hover:border-active active:scale-95 transition-all rounded-lg"
        type="button"
      >
        End Game
      </button>
    </div>
  );
};

export default FinishGame;
