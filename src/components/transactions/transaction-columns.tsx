import { ColumnDef } from "@tanstack/react-table";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Transaction } from "@/types/transaction";
import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";
import { Badge } from "../ui/badge";

export function createTransactionColumns(
    currentSort: string,
    onSortChange: (sort: string) => void
): ColumnDef<Transaction>[] {
    return [
        {
            accessorKey: "transactionDate",

            header: () => (
                <DataTableColumnHeader
                    title="Date"
                    field="transactionDate"
                    currentSort={currentSort}
                    onSortChange={onSortChange}
                />
            ),

            cell: ({ row }) =>
                new Date(row.original.transactionDate).toLocaleDateString(),
        },

        {
            accessorKey: "description",

            header: "Description",

            cell: ({ row }) => row.original.description,
        },

        {
            accessorKey: "category",

            header: () => (
                <DataTableColumnHeader
                    title="Category"
                    field="category"
                    currentSort={currentSort}
                    onSortChange={onSortChange}
                />
            ),

            cell: ({ row }) => (
                <Badge
                    variant="secondary"
                    className={getCategoryBadgeClass(row.original.category)}
                >
                    {row.original.category}
                </Badge>
            ),
        },

        {
            accessorKey: "amount",

            header: () => (
                <DataTableColumnHeader
                    title="Amount"
                    field="amount"
                    currentSort={currentSort}
                    onSortChange={onSortChange}
                />
            ),

            cell: ({ row }) => {
                const transactionType = getTransactionType(row.original);
                const isDebit = transactionType === "DR";
                const isCredit = transactionType === "CR";

                return (
                    <div className="flex items-center justify-end gap-1 text-right font-medium">
                        {isDebit ? (
                            <ArrowDownRight className="h-3.5 w-3.5 text-red-600 dark:text-red-400" />
                        ) : isCredit ? (
                            <ArrowUpRight className="h-3.5 w-3.5 text-green-600 dark:text-green-400" />
                        ) : null}
                        <span
                            className={isDebit ? "text-red-600 dark:text-red-400" : isCredit ? "text-green-600 dark:text-green-400" : undefined}
                        >
                            {currency.format(row.original.amount)}
                        </span>
                    </div>
                );
            },
        },
    ];
}

const currency = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
});

function getTransactionType(transaction: Transaction): "DR" | "CR" | null {
    const rawType = [
        (transaction as Transaction & Record<string, unknown>).transactionType,
        (transaction as Transaction & Record<string, unknown>).type,
        (transaction as Transaction & Record<string, unknown>).txnType,
        (transaction as Transaction & Record<string, unknown>).transaction_type,
        (transaction as Transaction & Record<string, unknown>).entryType,
    ].find((value): value is string => typeof value === "string" && value.trim().length > 0);

    if (!rawType) {
        return null;
    }

    const normalized = rawType.toUpperCase();

    if (["DR", "DEBIT", "DEBITED"].includes(normalized)) {
        return "DR";
    }

    if (["CR", "CREDIT", "CREDITED"].includes(normalized)) {
        return "CR";
    }

    return null;
}

function getCategoryBadgeClass(category?: string | null): string {
    const normalized = category?.trim().toLowerCase() ?? "";

    const palette = [
        "bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-300 dark:border-rose-800",
        "bg-sky-100 text-sky-700 border-sky-200 dark:bg-sky-950/60 dark:text-sky-300 dark:border-sky-800",
        "bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-950/60 dark:text-violet-300 dark:border-violet-800",
        "bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800",
        "bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800",
        "bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-950/60 dark:text-orange-300 dark:border-orange-800",
        "bg-cyan-100 text-cyan-700 border-cyan-200 dark:bg-cyan-950/60 dark:text-cyan-300 dark:border-cyan-800",
        "bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200 dark:bg-fuchsia-950/60 dark:text-fuchsia-300 dark:border-fuchsia-800",
    ];

    const hash = Array.from(normalized).reduce((acc, char) => {
        acc = (acc * 31 + char.charCodeAt(0)) >>> 0;
        return acc;
    }, 0);

    return palette[hash % palette.length];
}