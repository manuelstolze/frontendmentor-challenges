import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";


const manropeSans = Manrope({
  variable: "--font-manrope-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frontend Mentor | Article preview component",
  description: "Solved by Manuel Stolze",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manropeSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
