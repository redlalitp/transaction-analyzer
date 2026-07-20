export interface SessionResponse {
    userId: number;
    email: string;
    displayName: string;
    photoUrl: string;
    sessionToken: string;
    expiresAt: string;
}

export interface User {
    id: number;
    email: string;
    displayName: string;
    photoUrl: string;
}