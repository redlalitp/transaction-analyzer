"use client";


import { TransactionToolbar } from "@/components/transactions/transaction-toolbar";
import {
    TransactionsTable
} from "@/components/transactions/transactions-table";

import { UploadTransactions } from "@/components/transactions/upload-transactions";
import { useTransactions } from "@/hooks/use-transactions";
import { TransactionFilters } from "@/types/transaction";
import { useCallback, useMemo, useState } from "react";

export default function TransactionsPage() {

    const [filters, setFilters] = useState<TransactionFilters>({
        page: 0,
        size: 25,
        sort: "transactionDate,desc",
    });

    const {
        data,
        isLoading,
    } = useTransactions(filters);

    const handleFiltersChange = useCallback(
        (newFilters: TransactionFilters) => {
            setFilters(newFilters);
        },
        []
    );


    return (

        <div className="space-y-6">


            <h1 className="text-3xl font-bold">
                Transactions
            </h1>


            <TransactionToolbar

                filters={filters}

                onFiltersChange={handleFiltersChange}

            />

            <TransactionsTable
                data={data}
                isLoading={isLoading}
                filters={filters}
                onFiltersChange={handleFiltersChange}
            />


        </div>

    );

}