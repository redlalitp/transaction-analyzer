"use client";

import {
    Pie,
    PieChart,
    Cell,
    ResponsiveContainer,
    Tooltip,
} from "recharts";


import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";


import {
    CategoryAmount,
} from "@/types/dashboard";


interface Props {
    data: CategoryAmount[];
}


const COLORS = [
    "#2563eb",
    "#16a34a",
    "#f59e0b",
    "#dc2626",
    "#9333ea",
    "#0891b2",
];


export function CategorySpendingChart({
    data,
}: Props) {


    return (

        <Card>

            <CardHeader>

                <CardTitle>
                    Spending by Category
                </CardTitle>

            </CardHeader>


            <CardContent>

                <div className="h-[350px]">


                    <ResponsiveContainer
                        width="100%"
                        height="100%"
                    >


                        <PieChart>

                            <Pie

                                data={data}

                                dataKey="amount"

                                nameKey="category"

                                cx="50%"

                                cy="50%"

                                outerRadius={120}

                                label

                            >


                                {
                                    data.map((_, index) => (

                                        <Cell

                                            key={index}

                                            fill={
                                                COLORS[index % COLORS.length]
                                            }

                                        />

                                    ))
                                }


                            </Pie>


                            <Tooltip />


                        </PieChart>


                    </ResponsiveContainer>


                </div>


            </CardContent>


        </Card>

    );

}