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
        <div className="rounded-[1.75rem] border border-border/70 bg-card/80 p-4 shadow-[0_24px_70px_-36px_rgba(15,23,42,0.55)] backdrop-blur-sm sm:p-5">
            <div className="flex flex-row gap-4 lg:flex-row lg:items-center">
                <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-border/60 bg-background/70 p-2 shadow-sm">
                    <UploadTransactions />
                </div>

                <div className="flex flex-1 flex-wrap items-center justify-end gap-3">
                    <div className="w-full min-w-[220px] flex-1 md:max-w-[320px]">
                        <TransactionSearch
                            value={filters.query}
                            onChange={(query) =>
                                onFiltersChange({
                                    ...filters,
                                    page: 0,
                                    query,
                                })
                            }
                            className="h-11 w-full rounded-2xl border-border/70 bg-background/90 shadow-sm transition focus-visible:ring-2 focus-visible:ring-primary/20"
                        />
                    </div>

                    <div className="shrink-0">
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
                    </div>

                    <div className="shrink-0">
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
                    </div>

                    {hasFilters && (
                        <Button
                            variant="outline"
                            className="h-11 rounded-2xl border-border/70 bg-background/70 px-4 shadow-sm transition hover:bg-accent/70"
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