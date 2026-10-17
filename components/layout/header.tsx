"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Philosophy", href: "/main#philosophy" },
  { label: "Contact", href: "/main#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    !href.includes("#") &&
    (pathname === href || pathname.startsWith(`${href}/`));

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/main"
          className="text-lg font-bold tracking-[0.08em] text-foreground"
          aria-label="ONEUL 홈"
        >
          ONEUL
        </Link>

        <nav aria-label="주요 메뉴" className="hidden sm:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`text-sm transition-colors hover:text-foreground ${
                    isActive(item.href)
                      ? "font-medium text-foreground"
                      : "text-muted"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center sm:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-[10px] w-5">
            <span
              className={`absolute left-0 top-0 block h-[1.5px] w-5 bg-foreground transition-transform duration-300 ${
                open ? "top-[4.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 block h-[1.5px] w-5 bg-foreground transition-transform duration-300 ${
                open ? "bottom-[4px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <nav
        id="mobile-nav"
        aria-label="모바일 메뉴"
        className={`sm:hidden ${open ? "block" : "hidden"}`}
      >
        <ul className="space-y-1 border-b border-border bg-background px-5 pb-6 pt-2">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="block py-2.5 text-base text-foreground"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
