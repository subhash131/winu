import React from "react";

const TimePicker = () => {
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
        />
      </div>
    </form>
  );
};

export default TimePicker;
