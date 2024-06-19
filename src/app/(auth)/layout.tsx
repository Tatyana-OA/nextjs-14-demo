"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function WithAuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "1rem",
        }}
      >
        {navLinks.map((l) => {
          const isActive = pathname.startsWith(l.href);
          return (
            <Link
              href={l.href}
              key={l.name}
              style={{ color: isActive ? "blue" : "pink" }}
            >
              {l.name}
            </Link>
          );
        })}
      </div>
      {children}
    </>
  );
}
