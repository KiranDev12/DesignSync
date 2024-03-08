"use client";

import { EmptyBoards } from "./empty-boards";
import { EmptyFavourites } from "./empty-favorites";
import { EmptySearch } from "./empty-search";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

export const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = []; //change to api call

  if (!data?.length && query.search) {
    return <EmptySearch />;
  }
  if (!data?.length && query.favorites) {
    return <EmptyFavourites />;
  }
  if (!data?.length) {
    return <EmptyBoards />;
  }
  return <div>{JSON.stringify(query)}</div>;
};