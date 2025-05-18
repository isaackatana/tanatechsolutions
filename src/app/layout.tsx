// src/app/layout.tsx
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tana Tech Africa",
  description: "Digital services for modern brands",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen grid grid-rows-[auto_1fr_auto]">
        <Navbar />
        <main className="max-w-6xl mx-auto w-full px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
