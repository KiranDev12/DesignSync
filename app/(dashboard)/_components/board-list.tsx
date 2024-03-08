///List boards displayed on the dashboard main section
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

  //data is empty for a given search of string
  if (!data?.length && query.search) {
    return <EmptySearch />;
  }

  //data is empty for a favorites of a given org
  if (!data?.length && query.favorites) {
    return <EmptyFavourites />;
  }

  //There is no query, the boards itself of a org is empty
  if (!data?.length) {
    return <EmptyBoards />;
  }
  return <div>{JSON.stringify(query)}</div>;
};
