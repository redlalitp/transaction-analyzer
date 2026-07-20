"use client";

import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";

interface Props {
    value?: string;
    onChange: (value: string) => void;
    className?: string;
}

export function TransactionSearch({ value, onChange, className }: Props) {
    const [search, setSearch] = useState(value ?? "");
    const onChangeRef = useRef(onChange);
    const lastCommittedValueRef = useRef(value ?? "");
    const isInitialRenderRef = useRef(true);

    useEffect(() => {
        onChangeRef.current = onChange;
    }, [onChange]);

    useEffect(() => {
        if (isInitialRenderRef.current) {
            isInitialRenderRef.current = false;
            return;
        }

        const timer = window.setTimeout(() => {
            if (search !== lastCommittedValueRef.current) {
                onChangeRef.current(search);
                lastCommittedValueRef.current = search;
            }
        }, 500);

        return () => window.clearTimeout(timer);
    }, [search]);

    return (
        <Input
            placeholder="Search transactions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={className ?? "h-11 max-w-sm rounded-xl border-border/70 bg-background/80 shadow-sm transition focus-visible:ring-2 focus-visible:ring-primary/20"}
        />
    );
}