"use client";

import { TransactionToolbar } from "@/components/transactions/transaction-toolbar";
import { TransactionsTable } from "@/components/transactions/transactions-table";
import { useTransactions } from "@/hooks/use-transactions";
import { TransactionFilters } from "@/types/transaction";
import { useCallback, useState } from "react";

export default function TransactionsPage() {
    const [filters, setFilters] = useState<TransactionFilters>({
        page: 0,
        size: 25,
        sort: "transactionDate,desc",
    });

    const { data, isLoading } = useTransactions(filters);

    const handleFiltersChange = useCallback((newFilters: TransactionFilters) => {
        setFilters(newFilters);
    }, []);

    return (
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-2 py-2 lg:px-4">
            <div className="rounded-[1.75rem] border border-border/70 bg-background/70 p-5 shadow-[0_20px_60px_-34px_rgba(15,23,42,0.45)] backdrop-blur">
                <p className="text-sm font-medium uppercase tracking-[0.28em] text-muted-foreground">Records</p>
                <h1 className="text-3xl font-semibold tracking-tight">Transactions</h1>
            </div>

            <TransactionToolbar filters={filters} onFiltersChange={handleFiltersChange} />

            <TransactionsTable
                data={data}
                isLoading={isLoading}
                filters={filters}
                onFiltersChange={handleFiltersChange}
            />
        </div>
    );
}