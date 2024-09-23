// Import dos módulos
import localFont from "next/font/local";
import {Roboto} from "next/font/google";

// Import internos
import "./globals.css";
import { Menu } from "@/Components/menu";
import { Footer } from "@/Components/footer";
import { Login } from "@/Components/login";

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased`}
      >
        <Menu op1="Page 1" op2="Page 2" op3 op4={9}/>
        <Login/>
        {children}
        <Footer nome="Amilton" texto="Batata"/>
      </body> 
    </html>
  );
}
