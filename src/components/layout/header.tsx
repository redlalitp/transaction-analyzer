"use client";

import { ThemeToggle } from "./theme-toggle";
import { UserMenu } from "./user-menu";

export function Header() {
    return (
        <header className="sticky top-0 z-20 flex h-16 items-center justify-end gap-4 border-b border-border/70 bg-background/75 px-6 backdrop-blur supports-[backdrop-filter]:bg-background/70">
            <ThemeToggle />
            <UserMenu />
        </header>
    );
}