///Empty state when there are no favorite boards

import Image from "next/image";

export const EmptyFavourites = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/empty-favorite.svg" height={140} width={140} alt="Empty" />
      <h2 className="text-2xl font-semibold mt-6">No favourite board!</h2>
      <p className="text-muted-foregroud text-sm mt-2">
        Try favouriting a board
      </p>
    </div>
  );
};
