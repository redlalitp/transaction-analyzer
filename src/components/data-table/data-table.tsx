"use client";

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
}

export function DataTable<TData, TValue>({ columns, data }: DataTableProps<TData, TValue>) {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div className="overflow-hidden rounded-3xl border border-border/70 bg-card/80 shadow-[0_20px_60px_-34px_rgba(15,23,42,0.45)] backdrop-blur">
            <Table>
                <TableHeader className="bg-muted/40">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id} className="border-b border-border/70">
                            {headerGroup.headers.map((header) => (
                                <TableHead key={header.id} className="h-12 px-4 text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(header.column.columnDef.header, header.getContext())}
                                </TableHead>
                            ))}
                        </TableRow>
                    ))}
                </TableHeader>

                <TableBody>
                    {table.getRowModel().rows.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow key={row.id} className="border-b border-border/60 transition-colors hover:bg-muted/40">
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id} className="px-4 py-3 text-sm text-foreground/90">
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center text-sm text-muted-foreground">
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
}
