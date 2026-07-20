"use client";

import { X, CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

interface Props {
    from?: Date;
    to?: Date;
    onChange: (range: { from?: Date; to?: Date }) => void;
}

export function DateRangeFilter({ from, to, onChange }: Props) {
    return (
        <Popover>
            <PopoverTrigger>
                <Button
                    variant="outline"
                    className="h-11 w-[260px] justify-start rounded-xl border-border/70 bg-background/80 shadow-sm"
                >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {from && to
                        ? `${format(from, "dd MMM yyyy")} - ${format(to, "dd MMM yyyy")}`
                        : "Select date range"}
                </Button>
            </PopoverTrigger>

            <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                    mode="range"
                    selected={{ from, to }}
                    onSelect={(range) => {
                        onChange({
                            from: range?.from,
                            to: range?.to,
                        });
                    }}
                    numberOfMonths={2}
                />

                {(from || to) && (
                    <div className="border-t p-3">
                        <Button
                            variant="ghost"
                            className="w-full"
                            onClick={() => {
                                onChange({ from: undefined, to: undefined });
                            }}
                        >
                            <X className="mr-2 h-4 w-4" />
                            Clear date range
                        </Button>
                    </div>
                )}
            </PopoverContent>
        </Popover>
    );
}