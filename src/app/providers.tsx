"use client";

import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthProvider } from "@/contexts/auth-context";
import { ThemeProvider } from "@/components/theme-provider";
import { QueryProvider } from "@/providers/query-provider";

export default function Providers({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <GoogleOAuthProvider
            clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}
        >
            <QueryProvider>
                <AuthProvider>

                    <ThemeProvider>

                        {children}

                    </ThemeProvider>

                </AuthProvider>
            </QueryProvider>
        </GoogleOAuthProvider>
    );
}