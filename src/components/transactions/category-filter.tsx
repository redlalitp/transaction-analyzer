"use client";


import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";


interface Props {

    value?: string;

    categories: string[];

    onChange: (value: string) => void;

}



export function CategoryFilter({

    value,

    categories,

    onChange,

}: Props) {


    return (

        <Select

            value={value ?? "all"}

            onValueChange={(value) => {

                onChange(
                    value === "all"
                        ? ""
                        : value
                );

            }}

        >


            <SelectTrigger className="w-[180px]">

                <SelectValue placeholder="Category" />

            </SelectTrigger>


            <SelectContent>


                <SelectItem value="all">

                    All Categories

                </SelectItem>


                {
                    categories.map((category) => (

                        <SelectItem
                            key={category}
                            value={category}
                        >
                            {category}
                        </SelectItem>

                    ))
                }


            </SelectContent>


        </Select>

    );

}