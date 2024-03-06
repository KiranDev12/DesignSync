import Image from "next/image";

export const Loading = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <img
        width={120}
        height={120}
        className="animate-pulse duration-700"
        src="/logo.svg"
        alt="logo"
        srcset=""
      />
    </div>
  );
};
