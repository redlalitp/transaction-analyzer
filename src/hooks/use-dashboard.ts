import {
    useQuery,
} from "@tanstack/react-query";


import {
    getDashboardSummary,
    DashboardParams,
} from "@/services/dashboard.service";



export function useDashboard(
    params: DashboardParams
) {

    return useQuery({

        queryKey: [
            "dashboard",
            params,
        ],

        queryFn: () =>
            getDashboardSummary(params),

    });

}