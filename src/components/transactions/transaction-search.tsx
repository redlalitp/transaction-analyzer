"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";

interface Props {
    value?: string;
    onChange: (value: string) => void;
}

export function TransactionSearch({ value, onChange }: Props) {
    const [search, setSearch] = useState(value ?? "");

    useEffect(() => {
        const timer = setTimeout(() => {
            onChange(search);
        }, 500);

        return () => clearTimeout(timer);
    }, [search, onChange]);

    return (
        <Input
            placeholder="Search transactions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-11 max-w-sm rounded-xl border-border/70 bg-background/80 shadow-sm transition focus-visible:ring-2 focus-visible:ring-primary/20"
        />
    );
}