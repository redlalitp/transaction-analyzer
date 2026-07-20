"use client";

import { useState } from "react";
import { useDashboard } from "@/hooks/use-dashboard";
import { DashboardSummaryCards } from "@/components/dashboard/dashboard-summary-cards";
import { DateRangeFilter } from "@/components/date-range-filter";
import { CategorySpendingChart } from "@/components/dashboard/category-spending-chart";
import { MonthlySpendingChart } from "@/components/dashboard/monthly-spending-chart";

export default function DashboardPage() {
    const [range, setRange] = useState<{ from?: Date; to?: Date }>({
        from: undefined,
        to: undefined,
    });

    const params = {
        from: range.from ? range.from.toISOString().split("T")[0] : undefined,
        to: range.to ? range.to.toISOString().split("T")[0] : undefined,
    };

    const { data } = useDashboard(params);

    return (
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-2 py-2 lg:px-4">
            <div className="flex flex-wrap items-end justify-between gap-3 rounded-[1.75rem] border border-border/70 bg-background/70 p-5 shadow-[0_20px_60px_-34px_rgba(15,23,42,0.45)] backdrop-blur">
                <div>
                    <p className="text-sm font-medium uppercase tracking-[0.28em] text-muted-foreground">Overview</p>
                    <h1 className="text-3xl font-semibold tracking-tight">Dashboard</h1>
                </div>
                <DateRangeFilter from={range.from} to={range.to} onChange={setRange} />
            </div>

            <DashboardSummaryCards summary={data} />

            <div className="grid gap-6 lg:grid-cols-2">
                <CategorySpendingChart data={data?.categoryBreakdown ?? []} />
                <MonthlySpendingChart data={data?.monthlySpending ?? []} />
            </div>
        </div>
    );
}