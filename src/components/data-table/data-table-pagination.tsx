"use client";

import { Button } from "@/components/ui/button";

interface Props {
    page: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export function DataTablePagination({ page, totalPages, onPageChange }: Props) {
    return (
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border/70 bg-card/70 px-4 py-3 shadow-sm">
            <Button
                variant="outline"
                className="h-10 rounded-xl border-border/70 bg-background/70 shadow-sm"
                disabled={page === 0}
                onClick={() => onPageChange(page - 1)}
            >
                Previous
            </Button>

            <span className="text-sm font-medium text-muted-foreground">
                Page {page + 1} of {Math.max(totalPages, 1)}
            </span>

            <Button
                variant="outline"
                className="h-10 rounded-xl border-border/70 bg-background/70 shadow-sm"
                disabled={page + 1 >= totalPages}
                onClick={() => onPageChange(page + 1)}
            >
                Next
            </Button>
        </div>
    );
}