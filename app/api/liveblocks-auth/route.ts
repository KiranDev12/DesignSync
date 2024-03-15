import {Liveblocks} from "@liveblocks/node"
import { ConvexHttpClient } from "convex/browser"

import { api } from "@/convex/_generated/api"
import { auth, currentUser } from "@clerk/nextjs";
const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
const liveblocks = new Liveblocks({
    secret: "sk_dev_mK5noANS73DimUzlESni_dK5GOrf3r8bKbhMjo7Po2cV_q42Uzpvfwd26VLNxgwE"
})

export async function POST(request: Request){
    const authorization = auth();
    const user = await currentUser();

    // console.log("Auth_Info", {
    //     authorization,
    //     user,
    // });
    
    if(!authorization || !user) {
        return new Response("Unauthorized", {status: 403})
    }

    const {room} = await request.json();
    const board = await convex.query(api.board.get, {id: room})
    // console.log("Auth_Info", {
    //     room,
    //     board,
    //     boardOrgId: board?.orgId,
    //     userOrgId: authorization.orgId
    // });
    
    if(board?.orgId!==authorization.orgId) {
        return new Response("Unauthorized", {status: 403})
    }
    const userInfo = {
        name: user.firstName!,
        picture: user.imageUrl!,
    }

    // console.log({userInfo})
    const session = liveblocks.prepareSession(user.id, {userInfo})

    if(room) {
        session.allow(room, session.FULL_ACCESS)
    }

    const {status, body} = await session.authorize();
    
    // console.log({status, body}, "Allowed")
    return new Response(body, {status});
}