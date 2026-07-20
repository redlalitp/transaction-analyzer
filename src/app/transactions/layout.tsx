import {
    ProtectedRoute
} from "@/components/auth/protected-route";


import {
    Sidebar
} from "@/components/layout/sidebar";


import {
    Header
} from "@/components/layout/header";



export default function TransactionsLayout({
    children
}: {
    children: React.ReactNode
}) {


    return (

        <ProtectedRoute>

            <div className="flex min-h-screen">


                <Sidebar />


                <div className="flex-1">


                    <Header />


                    <main className="p-6">

                        {children}

                    </main>


                </div>


            </div>


        </ProtectedRoute>

    );

}