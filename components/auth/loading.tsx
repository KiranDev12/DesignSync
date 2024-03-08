///On reload loading screen of logo

export const Loading = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <img
        width={150}
        height={150}
        className="animate-pulse duration-700"
        src="/logo.svg"
        alt="logo"
      />
    </div>
  );
};
