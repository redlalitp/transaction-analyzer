import { ColumnDef } from "@tanstack/react-table";
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

            cell: ({ row }) => (
                <div className="text-right font-medium">
                    {currency.format(row.original.amount)}
                </div>
            ),
        },
    ];
}

const currency = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
});