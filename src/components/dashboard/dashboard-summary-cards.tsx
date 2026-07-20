"use client";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import {
    DashboardSummary,
} from "@/types/dashboard";


interface Props {
    summary?: DashboardSummary;
}


export function DashboardSummaryCards({
    summary,
}: Props) {


    if (!summary) {
        return null;
    }


    return (

        <div
            className="
grid
gap-4
md:grid-cols-2
lg:grid-cols-4
"
        >


            <Card>

                <CardHeader>
                    <CardTitle>
                        Total Income
                    </CardTitle>
                </CardHeader>

                <CardContent>

                    <p className="text-2xl font-bold">
                        ₹{summary.totalIncome.toLocaleString("en-IN")}
                    </p>

                </CardContent>

            </Card>



            <Card>

                <CardHeader>
                    <CardTitle>
                        Total Expense
                    </CardTitle>
                </CardHeader>

                <CardContent>

                    <p className="text-2xl font-bold">
                        ₹{summary.totalExpense.toLocaleString("en-IN")}
                    </p>

                </CardContent>

            </Card>



            <Card>

                <CardHeader>
                    <CardTitle>
                        Transactions
                    </CardTitle>
                </CardHeader>

                <CardContent>

                    <p className="text-2xl font-bold">
                        {summary.transactionCount}
                    </p>

                </CardContent>

            </Card>



            <Card>

                <CardHeader>
                    <CardTitle>
                        Average Expense
                    </CardTitle>
                </CardHeader>

                <CardContent>

                    <p className="text-2xl font-bold">
                        ₹{summary.averageExpense.toLocaleString("en-IN")}
                    </p>

                </CardContent>

            </Card>


        </div>

    );

}