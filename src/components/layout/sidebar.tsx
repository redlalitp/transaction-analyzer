"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Receipt } from "lucide-react";

const navItems = [
    {
        href: "/dashboard",
        label: "Dashboard",
        icon: LayoutDashboard,
    },
    {
        href: "/transactions",
        label: "Transactions",
        icon: Receipt,
    },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="hidden min-h-screen w-72 flex-col border-r border-border/80 bg-gradient-to-b from-background/95 via-background/90 to-muted/40 p-5 shadow-[12px_0_40px_-24px_rgba(15,23,42,0.35)] backdrop-blur xl:flex">
            <div className="mb-8 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-900 via-slate-700 to-slate-500 text-sm font-semibold text-white shadow-lg shadow-slate-900/20">
                    TA
                </div>
                <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                        Finance
                    </p>
                    <h1 className="text-lg font-semibold tracking-tight text-foreground">
                        Transaction Analyzer
                    </h1>
                </div>
            </div>

            <nav className="space-y-2">
                {navItems.map(({ href, label, icon: Icon }) => {
                    const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));

                    return (
                        <Link
                            key={href}
                            href={href}
                            className={`flex items-center gap-3 rounded-2xl border border-transparent px-3 py-2.5 text-sm font-medium transition-all duration-200 ${isActive
                                ? "bg-primary/10 text-primary shadow-sm ring-1 ring-primary/15"
                                : "text-muted-foreground hover:border-border/60 hover:bg-accent/70 hover:text-foreground"}`}
                        >
                            <Icon size={18} />
                            {label}
                        </Link>
                    );
                })}
            </nav>
        </aside>
    );
}