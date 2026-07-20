"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

import { SessionResponse } from "@/types/auth";
import { sessionStorage } from "@/lib/storage";
import { logout as logoutApi } from "@/services/auth.service";


interface AuthContextType {

    session: SessionResponse | null;

    loading: boolean;

    login(session: SessionResponse): void;

    logout(): Promise<void>;

}


const AuthContext =
    createContext<AuthContextType | null>(null);



export function AuthProvider({
    children,
}: {
    children: React.ReactNode;
}) {


    const [session, setSession]
        =
        useState<SessionResponse | null>(null);


    const [loading, setLoading]
        =
        useState(true);



    useEffect(() => {


        const existing =
            sessionStorage.get();

        console.log("AuthProvider loaded session:", existing);


        if (existing) {

            setSession(existing);

        }


        setLoading(false);


    }, []);



    function login(
        session: SessionResponse
    ) {

        sessionStorage.save(session);

        setSession(session);

    }



    async function logout() {

        try {

            await logoutApi();

        }
        finally {

            sessionStorage.clear();

            setSession(null);

        }

    }



    return (

        <AuthContext.Provider
            value={{
                session,
                loading,
                login,
                logout
            }}
        >

            {children}

        </AuthContext.Provider>

    );

}



export function useAuthContext() {

    const context =
        useContext(AuthContext);


    if (!context) {

        throw new Error(
            "useAuthContext must be used inside AuthProvider"
        );

    }


    return context;

}