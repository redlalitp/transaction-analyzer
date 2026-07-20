"use client";


import {
    ThemeToggle
} from "./theme-toggle";


import {
    UserMenu
} from "./user-menu";


export function Header() {


    return (

        <header
            className="
h-16
border-b
flex
items-center
justify-end
gap-4
px-6
"
        >


            <ThemeToggle />

            <UserMenu />


        </header>

    );


}