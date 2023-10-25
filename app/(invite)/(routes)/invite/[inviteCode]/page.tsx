import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";

import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

interface InviteCodePageProps {
    params: {
        inviteCode: string;
    };
};

const InviteCodePage = async ({
    params
} : InviteCodePageProps) => {
    const profile = await currentProfile(); // fetch current profile

    if (!profile) {
        return redirectToSignIn();
    }

    if (!params.inviteCode) {
        return redirect('/'); // check whether we have an invite code
    }

    const existingServer = await db.server.findFirst({
        where: {
            inviteCode: params.inviteCode,
            members: {
                some: {
                    profileId: profile.id // check if user is already apart of this server
                }
            }
        }
    });

    if (existingServer) {
        return redirect(`/servers/${existingServer.id}`); // if he is in the server then he is redirected to the server
    }

    const server = await db.server.update ({
        where: {
            inviteCode: params.inviteCode, // if user is not, then we are going to update the server using the unique invite code
        },
        data: {
            members: {
                create: [
                    {
                        profileId: profile.id, // we create a new member
                    }
                ]
            }
        }
    });

    if (server) {
        return redirect(`/servers/${server.id}`); // redirect the user to the server
    }

    return null;
}
 
export default InviteCodePage;