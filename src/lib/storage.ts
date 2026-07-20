import { SessionResponse } from "@/types/auth";

const SESSION_KEY = "transaction_session";

export const sessionStorage = {

    save(session: SessionResponse) {
        localStorage.setItem(
            SESSION_KEY,
            JSON.stringify(session)
        );
    },


    get(): SessionResponse | null {

        if (typeof window === "undefined") {
            return null;
        }

        const value = localStorage.getItem(SESSION_KEY);

        if (!value) {
            return null;
        }

        return JSON.parse(value);
    },


    clear() {
        localStorage.removeItem(SESSION_KEY);
    }

};