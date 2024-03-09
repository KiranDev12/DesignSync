///List boards displayed on the dashboard main section
"use client";

import { EmptyBoards } from "./empty-boards";
import { EmptyFavourites } from "./empty-favorites";
import { EmptySearch } from "./empty-search";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { BoardCard } from "./BoardCard";
import { NewBoardButton } from "./new-board-button";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

export const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = useQuery(api.boards.get, { orgId });

  if (data == undefined) {
    return (
      <div>
        <h2 className="text-3xl">
          {query.favorites ? "Favourite boards" : "Team boards"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
          <NewBoardButton orgId={orgId} disabled />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
        </div>
      </div>
    );
  }
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
  return (
    <div>
      <h2 className="text-3xl">
        {query.favorites ? "Favourite boards" : "Team boards"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
        <NewBoardButton orgId={orgId} />
        {data?.map((board) => (
          <BoardCard
            key={board._id}
            id={board._id}
            title={board.title}
            imageUrl={board.imageUrl}
            authorId={board.authorId}
            authorName={board.authorName}
            createdAt={board._creationTime}
            orgId={board.orgId}
            isFavorite={false}
          />
        ))}
      </div>
    </div>
  );
};
