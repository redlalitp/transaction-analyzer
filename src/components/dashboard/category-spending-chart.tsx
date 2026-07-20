"use client";

import { Pie, PieChart, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CategoryAmount } from "@/types/dashboard";

interface Props {
    data: CategoryAmount[];
}

const COLORS = ["#4f46e5", "#14b8a6", "#f59e0b", "#ef4444", "#8b5cf6", "#0891b2"];

export function CategorySpendingChart({ data }: Props) {
    return (
        <Card className="overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-br from-background to-muted/30 shadow-[0_22px_60px_-30px_rgba(15,23,42,0.45)]">
            <CardHeader className="border-b border-border/60 bg-gradient-to-r from-background/90 to-muted/30">
                <CardTitle className="text-lg font-semibold tracking-tight">Spending by Category</CardTitle>
            </CardHeader>

            <CardContent className="pt-5">
                <div className="h-[360px] rounded-2xl bg-gradient-to-b from-muted/20 to-background/60 p-3">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                dataKey="amount"
                                nameKey="category"
                                cx="50%"
                                cy="50%"
                                outerRadius={120}
                                label
                                stroke="rgba(255,255,255,0.1)"
                            >
                                {data.map((_, index) => (
                                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip
                                formatter={(value) => {
                                    const numericValue = typeof value === "number" ? value : typeof value === "string" ? Number(value) : 0;
                                    return [`₹${numericValue.toLocaleString("en-IN")}`, "Amount"];
                                }}
                                contentStyle={{ borderRadius: "0.8rem", borderColor: "rgba(15,23,42,0.1)" }}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
}