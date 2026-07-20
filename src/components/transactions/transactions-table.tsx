"use client";

import { useMemo } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { DataTable } from "@/components/data-table/data-table";
import { DataTablePagination } from "@/components/data-table/data-table-pagination";
import { createTransactionColumns } from "./transaction-columns";
import { PageResponse, Transaction, TransactionFilters } from "@/types/transaction";

interface TransactionsTableProps {
    data?: PageResponse<Transaction>;
    isLoading: boolean;
    isError?: boolean;
    filters: TransactionFilters;
    onFiltersChange: (filters: TransactionFilters) => void;
}

export function TransactionsTable({ data, isLoading, isError, filters, onFiltersChange }: TransactionsTableProps) {
    const columns = useMemo(
        () =>
            createTransactionColumns(filters.sort, (sort) =>
                onFiltersChange({
                    ...filters,
                    page: 0,
                    sort,
                })
            ),
        [filters.sort, onFiltersChange]
    );

    if (isLoading) {
        return (
            <div className="space-y-3 rounded-3xl border border-border/70 bg-card/70 p-4 shadow-[0_20px_60px_-34px_rgba(15,23,42,0.45)]">
                {Array.from({ length: 8 }).map((_, index) => (
                    <Skeleton key={index} className="h-12 w-full rounded-2xl" />
                ))}
            </div>
        );
    }

    if (isError) {
        return (
            <div className="rounded-3xl border border-destructive/30 bg-destructive/5 p-10 text-center shadow-sm">
                <p className="text-destructive">Failed to load transactions.</p>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            <DataTable columns={columns} data={data?.content ?? []} />
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