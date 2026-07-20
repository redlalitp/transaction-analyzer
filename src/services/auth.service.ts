import { api } from "@/lib/api";
import { SessionResponse } from "@/types/auth";


export async function loginWithGoogle(
    idToken: string
) {

    const response =
        await api.post<SessionResponse>(
            "/auth/google",
            {
                idToken
            }
        );


    return response.data;

}



export async function logout() {

    await api.post("/auth/logout");

}