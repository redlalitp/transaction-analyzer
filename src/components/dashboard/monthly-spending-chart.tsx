"use client";


import {
    Bar,
    BarChart,
    ResponsiveContainer,
    XAxis,
    YAxis,
    Tooltip,
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



export function MonthlySpendingChart({
    data,
}: Props) {


    return (

        <Card>


            <CardHeader>

                <CardTitle>
                    Monthly Spending
                </CardTitle>

            </CardHeader>


            <CardContent>


                <div className="h-[350px]">


                    <ResponsiveContainer
                        width="100%"
                        height="100%"
                    >


                        <BarChart data={data}>


                            <XAxis
                                dataKey="month"
                            />


                            <YAxis />


                            <Tooltip />


                            <Bar

                                dataKey="amount"

                                fill="#2563eb"

                            />


                        </BarChart>


                    </ResponsiveContainer>


                </div>


            </CardContent>


        </Card>

    );

}