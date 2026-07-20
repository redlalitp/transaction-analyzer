"use client";


import {
    useAuth
} from "@/hooks/use-auth";


import {
    useRouter
} from "next/navigation";


import {
    useEffect
} from "react";



export function ProtectedRoute({
    children
}: {
    children: React.ReactNode;
}) {


    const {
        session,
        loading
    } = useAuth();
    console.log("ProtectedRoute:", { session, loading });


    const router =
        useRouter();



    useEffect(() => {


        if (!loading && !session) {

            router.replace("/login");

        }


    }, [
        loading,
        session,
        router
    ]
    );




    if (loading) {

        return (

            <div
                className="
flex
items-center
justify-center
min-h-screen
"
            >

                Loading...

            </div>

        );

    }



    if (!session) {

        return null;

    }



    return children;

}