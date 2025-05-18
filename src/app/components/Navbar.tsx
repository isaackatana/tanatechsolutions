// src/components/Navbar.tsx
"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-primary text-white py-4 px-6 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold">
        Tana Tech Africa
      </Link>
      <div className="space-x-4">
        <Link href="/services">Services</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
