import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./component/Nav";
import { Footer } from "./component/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yamman Muhammad | Your Legal Advisor | Legalmaan",
  description:
    "I am a Legal Writer who focuses on solving problems. Legal Contract & Agreement - Article - Law Essay - Trademark & Patent, and any other Legal Document drafting. | Legalmaan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
