import axios from "axios";
import { sessionStorage } from "./storage";


export const api = axios.create({

    baseURL:
        process.env.NEXT_PUBLIC_API_BASE_URL,

});



api.interceptors.request.use(
    (config) => {

        const session = sessionStorage.get();


        if (session?.sessionToken) {

            config.headers.Authorization =
                `Bearer ${session.sessionToken}`;

        }


        return config;

    });