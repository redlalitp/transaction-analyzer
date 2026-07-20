"use client";


import {
    useState
} from "react";


import {
    useDashboard
} from "@/hooks/use-dashboard";

import {
    DashboardSummaryCards
} from "@/components/dashboard/dashboard-summary-cards";

import {
    DateRangeFilter
} from "@/components/date-range-filter";

import {
    CategorySpendingChart
} from "@/components/dashboard/category-spending-chart";


import {
    MonthlySpendingChart
} from "@/components/dashboard/monthly-spending-chart";



export default function DashboardPage() {




    const [range, setRange] =
        useState({
            from: undefined,
            to: undefined,
        });

    const params = {

        from: range.from
            ? range.from.toISOString().split("T")[0]
            : undefined,

        to: range.to
            ? range.to.toISOString().split("T")[0]
            : undefined,

    };

    const {
        data,
        isLoading,
    } =
        useDashboard(params);





    return (

        <div className="space-y-6">


            <h1 className="text-3xl font-bold">
                Dashboard
            </h1>

            <DateRangeFilter

                from={range.from}

                to={range.to}

                onChange={setRange}

            />


            <DashboardSummaryCards
                summary={data}
            />

            <div className="
grid
gap-6
lg:grid-cols-2
">


                <CategorySpendingChart

                    data={
                        data?.categoryBreakdown ?? []
                    }

                />


                <MonthlySpendingChart

                    data={
                        data?.monthlySpending ?? []
                    }

                />


            </div>


        </div>

    );

}