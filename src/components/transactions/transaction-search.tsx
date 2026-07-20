"use client";

import { useEffect, useState } from "react";

import { Input } from "@/components/ui/input";


interface Props {

    value?: string;

    onChange: (value: string) => void;

}


export function TransactionSearch({
    value,
    onChange,
}: Props) {

    const [search, setSearch] =
        useState(value ?? "");


    useEffect(() => {

        const timer =
            setTimeout(() => {

                onChange(search);

            }, 500);


        return () =>
            clearTimeout(timer);


    }, [search, onChange]);


    return (

        <Input

            placeholder="Search transactions..."

            value={search}

            onChange={(e) =>
                setSearch(e.target.value)
            }

            className="max-w-sm"

        />

    );

}