"use client";


import {
    Avatar,
    AvatarFallback,
    AvatarImage
} from "@/components/ui/avatar";


import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";


import {
    useAuth
} from "@/hooks/use-auth";


export function UserMenu() {

    const {
        session,
        logout
    } = useAuth();



    if (!session)
        return null;



    return (

        <DropdownMenu>


            <DropdownMenuTrigger>

                <Avatar>

                    <AvatarImage
                        src={session.photoUrl}
                    />


                    <AvatarFallback>
                        {
                            session.displayName?.[0]
                        }
                    </AvatarFallback>


                </Avatar>

            </DropdownMenuTrigger>



            <DropdownMenuContent
                align="end"
            >


                <DropdownMenuItem>
                    {session.displayName}
                </DropdownMenuItem>


                <DropdownMenuItem
                    onClick={logout}
                >
                    Logout
                </DropdownMenuItem>


            </DropdownMenuContent>


        </DropdownMenu>

    );

}