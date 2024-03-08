"use client";

import { useOrganization } from "@clerk/nextjs";
import { EmptyOrg } from "./_components/empty-org";
import { BoardList } from "./_components/board-list";
interface DashboardPageProps {
  searchParams: {
    search?: string;
    favorites?: string;
  };
}

function DashboardPage({ searchParams }: DashboardPageProps) {
  const { organization } = useOrganization();
  // console.log(organization);
  // {
  //   pathRoot: '/organizations',
  //   publicMetadata: {},
  //   membersCount: 1,
  //   pendingInvitationsCount: 0,
  //   id: 'org_2dOwGSKnq9bnEHVPTp1en5WldyI',
  //   name: 'hey',
  //   slug: 'hey',
  //   imageUrl:
  //     'some string',
  //   hasImage: false,
  //   maxAllowedMemberships: 5,
  //   adminDeleteEnabled: true,
  //   createdAt: new Date('2024-03-08T10:05:36.000Z'),
  //   updatedAt: new Date('2024-03-08T10:05:36.000Z')
  // }

  return (
    <div className="flex-1 h-[calc(100%-80px)] p-6">
      {!organization ? (
        <EmptyOrg />
      ) : (
        <BoardList orgId={organization.id} query={searchParams} />
        // List of boards rendered according to the search params and also filtered based on organization
      )}
    </div>
  );
}

export default DashboardPage;
