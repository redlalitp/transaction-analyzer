"use client";

import Link from "next/link";
import {
    LayoutDashboard,
    Receipt,
} from "lucide-react";


export function Sidebar() {

    return (

        <aside
            className="
hidden
md:flex
w-64
border-r
min-h-screen
flex-col
p-4
"
        >


            <h1
                className="
font-bold
text-xl
mb-8
"
            >
                Transaction Analyzer
            </h1>



            <nav
                className="
space-y-2
"
            >


                <Link
                    href="/dashboard"
                    className="
flex
items-center
gap-3
p-2
rounded-lg
hover:bg-muted
"
                >

                    <LayoutDashboard size={18} />

                    Dashboard

                </Link>



                <Link
                    href="/transactions"
                    className="
flex
items-center
gap-3
p-2
rounded-lg
hover:bg-muted
"
                >

                    <Receipt size={18} />

                    Transactions

                </Link>


            </nav>


        </aside>

    );

}