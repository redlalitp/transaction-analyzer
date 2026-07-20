"use client";

import { useMemo } from "react";

import { Skeleton } from "@/components/ui/skeleton";
import { DataTable } from "@/components/data-table/data-table";
import { DataTablePagination } from "@/components/data-table/data-table-pagination";

import { createTransactionColumns } from "./transaction-columns";

import {
    PageResponse,
    Transaction,
    TransactionFilters,
} from "@/types/transaction";

interface TransactionsTableProps {
    data?: PageResponse<Transaction>;
    isLoading: boolean;
    isError?: boolean;
    filters: TransactionFilters;
    onFiltersChange: (
        filters: TransactionFilters
    ) => void;
}

export function TransactionsTable({
    data,
    isLoading,
    isError,
    filters,
    onFiltersChange,
}: TransactionsTableProps) {
    const columns = useMemo(
        () =>
            createTransactionColumns(
                filters.sort,
                (sort) =>
                    onFiltersChange({
                        ...filters,
                        page: 0,
                        sort,
                    })
            ),
        [
            filters.sort,
            onFiltersChange
        ]
    );

    if (isLoading) {
        return (
            <div className="space-y-3">
                {Array.from({ length: 8 }).map((_, index) => (
                    <Skeleton
                        key={index}
                        className="h-10 w-full"
                    />
                ))}
            </div>
        );
    }

    if (isError) {

        return (
            <div className="border rounded-xl p-10 text-center">

                <p className="text-destructive">
                    Failed to load transactions.
                </p>

            </div>
        );

    }

    return (
        <div className="space-y-4">
            <DataTable
                columns={columns}
                data={data?.content ?? []}
            />

            <DataTablePagination
                page={filters.page}
                totalPages={data?.totalPages ?? 0}
                onPageChange={(page) =>
                    onFiltersChange({
                        ...filters,
                        page,
                    })
                }
            />
        </div>
    );
}