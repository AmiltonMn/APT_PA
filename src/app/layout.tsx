"use client"

// Import dos módulos
import localFont from "next/font/local";
import {Roboto} from "next/font/google";

// Import internos
import "./globals.css";
import { Menu } from "@/Components/menu";
import { Footer } from "@/Components/footer";

const roboto = Roboto({
  weight: ["100", "400", "900"],
  style: "normal",
  variable: "--roboto",
  subsets: ["latin", "greek", "vietnamese"]
})

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased`}>
        <Menu op1="Inicial" op2="Maths" op3="Algo" op4="Fetch Nativo" op5="Axios Page" op6="Server Side"/>
        {children}
      </body> 
    </html>
  );
}
