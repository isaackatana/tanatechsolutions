"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header>
      <nav
        className="bg-primary text-black py-4 px-6 flex justify-between items-center"
        aria-label="Main Navigation"
      >
        <Link href="/" className="text-2xl font-bold">
          Tana Tech Africa
        </Link>

        <div className="space-x-4 hidden sm:flex">
          {navItems.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className={`hover:underline underline-offset-4 ${
                pathname === href ? "font-semibold text-accent" : ""
              }`}
            >
              {name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
