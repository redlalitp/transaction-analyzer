"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardSummary } from "@/types/dashboard";

interface Props {
    summary?: DashboardSummary;
}

export function DashboardSummaryCards({ summary }: Props) {
    if (!summary) {
        return null;
    }

    const cards = [
        {
            title: "Total Income",
            value: `₹${summary.totalIncome.toLocaleString("en-IN")}`,
            className: "from-violet-600 via-indigo-600 to-slate-900 text-white",
        },
        {
            title: "Total Expense",
            value: `₹${summary.totalExpense.toLocaleString("en-IN")}`,
            className: "from-rose-500 via-rose-600 to-slate-900 text-white",
        },
        {
            title: "Transactions",
            value: summary.transactionCount.toString(),
            className: "from-emerald-500 via-emerald-600 to-slate-900 text-white",
        },
        {
            title: "Average Expense",
            value: `₹${summary.averageExpense.toLocaleString("en-IN")}`,
            className: "from-amber-500 via-orange-500 to-slate-900 text-white",
        },
    ];

    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {cards.map((card) => (
                <Card key={card.title} className={`relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${card.className} shadow-[0_24px_50px_-28px_rgba(15,23,42,0.65)]`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_45%)]" />
                    <CardHeader className="relative">
                        <CardTitle className="text-sm font-medium uppercase tracking-[0.28em] text-white/80">
                            {card.title}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="relative">
                        <p className="text-2xl font-semibold tracking-tight">{card.value}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
