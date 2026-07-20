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
                <Badge variant="secondary">
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