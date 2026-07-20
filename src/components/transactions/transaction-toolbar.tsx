"use client";

import { TransactionFilters } from "@/types/transaction";
import { TransactionSearch } from "./transaction-search";
import { CategoryFilter } from "./category-filter";
import { useTransactionCategories } from "@/hooks/use-transactions";
import { DateRangeFilter } from "../date-range-filter";
import { Button } from "@/components/ui/button";
import { UploadTransactions } from "./upload-transactions";

interface Props {
    filters: TransactionFilters;
    onFiltersChange: (filters: TransactionFilters) => void;
}

export function TransactionToolbar({ filters, onFiltersChange }: Props) {
    const fromDate = filters.from ? new Date(filters.from) : undefined;
    const toDate = filters.to ? new Date(filters.to) : undefined;

    const { data: categories = [] } = useTransactionCategories();
    const hasFilters = !!filters.query || !!filters.category || !!filters.from || !!filters.to;

    return (
        <div className="rounded-3xl border border-border/70 bg-card/80 p-4 shadow-[0_20px_60px_-34px_rgba(15,23,42,0.45)] backdrop-blur">
            <div className="flex flex-wrap items-center justify-between gap-3">
                <UploadTransactions />

                <div className="flex flex-1 flex-wrap items-center justify-end gap-3">
                    <TransactionSearch
                        value={filters.query}
                        onChange={(query) =>
                            onFiltersChange({
                                ...filters,
                                page: 0,
                                query,
                            })
                        }
                    />

                    <CategoryFilter
                        categories={categories}
                        value={filters.category}
                        onChange={(category) =>
                            onFiltersChange({
                                ...filters,
                                page: 0,
                                category,
                            })
                        }
                    />

                    <DateRangeFilter
                        from={fromDate}
                        to={toDate}
                        onChange={({ from, to }) => {
                            onFiltersChange({
                                ...filters,
                                page: 0,
                                from: from ? from.toISOString() : undefined,
                                to: to ? to.toISOString() : undefined,
                            });
                        }}
                    />

                    {hasFilters && (
                        <Button
                            variant="outline"
                            className="h-11 rounded-xl border-border/70 bg-background/70 px-4 shadow-sm"
                            onClick={() =>
                                onFiltersChange({
                                    ...filters,
                                    page: 0,
                                    query: undefined,
                                    category: undefined,
                                    from: undefined,
                                    to: undefined,
                                })
                            }
                        >
                            Clear Filters
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}