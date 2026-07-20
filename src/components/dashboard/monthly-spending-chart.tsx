"use client";


import {
    Bar,
    BarChart,
    ResponsiveContainer,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
} from "recharts";


import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";


import {
    MonthlyAmount,
} from "@/types/dashboard";



interface Props {
    data: MonthlyAmount[];
}

export function MonthlySpendingChart({ data }: Props) {
    return (
        <Card className="overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-br from-background to-muted/30 shadow-[0_22px_60px_-30px_rgba(15,23,42,0.45)]">
            <CardHeader className="border-b border-border/60 bg-gradient-to-r from-background/90 to-muted/30">
                <CardTitle className="text-lg font-semibold tracking-tight">Monthly Spending</CardTitle>
            </CardHeader>

            <CardContent className="pt-5">
                <div className="h-[360px] rounded-2xl bg-gradient-to-b from-muted/20 to-background/60 p-3">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data}>
                            <CartesianGrid vertical={false} stroke="rgba(15,23,42,0.08)" />
                            <XAxis dataKey="month" tickLine={false} axisLine={false} />
                            <YAxis tickLine={false} axisLine={false} />
                            <Tooltip
                                formatter={(value) => {
                                    const numericValue = typeof value === "number" ? value : typeof value === "string" ? Number(value) : 0;
                                    return [`₹${numericValue.toLocaleString("en-IN")}`, "Amount"];
                                }}
                                contentStyle={{ borderRadius: "0.8rem", borderColor: "rgba(15,23,42,0.1)" }}
                            />
                            <Bar dataKey="amount" fill="#4f46e5" radius={[8, 8, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
}