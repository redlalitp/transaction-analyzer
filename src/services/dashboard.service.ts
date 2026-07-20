import { api } from "@/lib/api";

import {
    DashboardSummary,
} from "@/types/dashboard";


export interface DashboardParams {

    from?: string;

    to?: string;

}


export async function getDashboardSummary(
    params?: DashboardParams
) {

    const response =
        await api.get<DashboardSummary>(
            "/dashboard/summary",
            {
                params,
            }
        );


    return response.data;

}