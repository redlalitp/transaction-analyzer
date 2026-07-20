import "./globals.css";

import Providers from "./providers";
import { Toaster } from "@/components/ui/sonner";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {


  return (

    <html lang="en">

      <body className={inter.className}>

        <Providers>

          {children}

          <Toaster />

        </Providers>


      </body>

    </html>

  );

}