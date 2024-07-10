import type { Metadata } from "next";
import { montserrat } from "./fonts";
import "./globals.css";
import Navbar from "./components/navbar";
import TabBar from "./components/tabBar";
import Footer from "./components/footer";

// const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400", style: ["normal"], variable: "--font-bebas"});

// const montserrat = Montserrat({ subsets: ["latin"], weight: ['400', '500'], style: ["italic"], variable: "--font-montserrat"});

export const metadata: Metadata = {
  title: "Travel Platzi",
  description: "lovely places to visit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.className} scroll-smooth dark`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>

      <body className="dark:bg-gray-900">
        <Navbar />
        {children}
        <Footer />
        <TabBar />
      </body>
    </html>
  );
}
