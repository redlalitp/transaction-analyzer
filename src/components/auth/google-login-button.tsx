"use client";


import {
    GoogleLogin
} from "@react-oauth/google";


import {
    loginWithGoogle
} from "@/services/auth.service";


import {
    useAuth
} from "@/hooks/use-auth";


import {
    useRouter
} from "next/navigation";



export default function GoogleLoginButton() {


    const { login }
        =
        useAuth();


    const router =
        useRouter();



    return (

        <GoogleLogin

            onSuccess={
                async (response) => {

                    if (!response.credential)
                        return;


                    const session =
                        await loginWithGoogle(
                            response.credential
                        );


                    login(session);


                    router.push("/dashboard");


                }

            }


            onError={() => {

                console.error(
                    "Google Login Failed"
                );

            }}

        />

    );


}