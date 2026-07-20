import GoogleLoginButton
    from "@/components/auth/google-login-button";


export default function LoginPage() {
    console.log(
        "Google Client ID:",
        process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID
    );


    return (

        <div
            className="
min-h-screen
flex
items-center
justify-center
"
        >

            <div
                className="
border
rounded-xl
p-8
space-y-6
"
            >


                <h1
                    className="
text-2xl
font-bold
"
                >
                    Transaction Analyzer
                </h1>


                <p>
                    Analyze your bank transactions securely.
                </p>


                <GoogleLoginButton />


            </div>


        </div>

    );


}