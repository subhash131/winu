export const Overlay = () => {
  return (
    <div className="fixed size-full top-0 overflow-hidden -z-10">
      <div
        className={`bg-gradient-glow size-72 blur-2xl after:absolute after:w-[90%] after:h-[80%] after:top-[25%] after:left-0 after:bg-gradient-glow after:blur-2xl absolute left-[40%] rounded-b-full after:rounded-b-full top-64`}
      />
      <div
        className={`bg-gradient-glow size-40 blur-2xl after:absolute after:w-[90%] after:h-[80%] after:top-[25%] after:left-0 after:bg-gradient-glow after:blur-2xl absolute left-[2%] rounded-b-full top-40 after:rounded-b-full`}
      />
      <div
        className={`bg-gradient-glow size-40 blur-2xl after:absolute after:w-[90%] after:h-[80%] after:top-[25%] after:left-0 after:bg-gradient-glow after:blur-2xl absolute left-[2%] rounded-b-full top-[50%] bottom-[50%] after:rounded-b-full`}
      />
      <div
        className={`bg-gradient-glow size-40 blur-2xl after:absolute after:w-[90%] after:h-[80%] after:top-[25%] after:left-0 after:bg-gradient-glow after:blur-2xl absolute right-[2%] rounded-b-full  bottom-0 after:rounded-b-full`}
      />
      <div
        className={`bg-gradient-glow size-40 blur-2xl after:absolute after:w-[90%] after:h-[80%] after:top-[25%] after:left-0 after:bg-gradient-glow after:blur-2xl absolute right-0 rounded-b-full top-36 after:rounded-b-full`}
      />
    </div>
  );
};
