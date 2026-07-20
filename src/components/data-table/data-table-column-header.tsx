"use client";

import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DataTableColumnHeaderProps {
    title: string;
    field: string;
    currentSort: string;
    onSortChange: (sort: string) => void;
}

export function DataTableColumnHeader({
    title,
    field,
    currentSort,
    onSortChange,
}: DataTableColumnHeaderProps) {
    const [sortField, direction] = currentSort.split(",");

    const active = sortField === field;

    function handleClick() {
        if (!active) {
            onSortChange(`${field},asc`);
            return;
        }

        onSortChange(
            direction === "asc"
                ? `${field},desc`
                : `${field},asc`
        );
    }

    return (
        <Button
            variant="ghost"
            onClick={handleClick}
            className="px-0 hover:bg-transparent"
        >
            {title}

            {!active && (
                <ArrowUpDown className="ml-2 h-4 w-4" />
            )}

            {active && direction === "asc" && (
                <ArrowUp className="ml-2 h-4 w-4" />
            )}

            {active && direction === "desc" && (
                <ArrowDown className="ml-2 h-4 w-4" />
            )}
        </Button>
    );
}