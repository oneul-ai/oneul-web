"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  locales,
  localeNames,
  localeTags,
  localizePath,
  rememberLocale,
  stripLocale,
  type Locale,
} from "@/lib/i18n/locales";
import type { Dictionary } from "@/lib/i18n/dictionaries/ko";

type NavText = Dictionary["nav"];

export function Header({ locale, t }: { locale: Locale; t: NavText }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: t.about, href: localizePath(locale, "/about") },
    { label: t.products, href: localizePath(locale, "/products") },
    { label: t.philosophy, href: localizePath(locale, "/main#philosophy") },
    { label: t.contact, href: localizePath(locale, "/main#contact") },
  ];

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

  // 현재 페이지의 다른 언어 버전으로 가는 링크
  const basePath = stripLocale(pathname);
  const languageLinks = locales.map((l) => ({
    locale: l,
    label: localeNames[l],
    href: localizePath(l, basePath),
    current: l === locale,
  }));

  const LanguageSwitcher = ({ className = "" }: { className?: string }) => (
    <nav aria-label={t.language} className={className}>
      <ul className="flex items-center gap-3 text-xs">
        {languageLinks.map((item) => (
          <li key={item.locale}>
            <Link
              href={item.href}
              lang={localeTags[item.locale]}
              hrefLang={localeTags[item.locale]}
              aria-current={item.current ? "page" : undefined}
              onClick={() => {
                rememberLocale(item.locale);
                setOpen(false);
              }}
              className={`transition-colors hover:text-foreground ${
                item.current ? "font-medium text-foreground" : "text-muted"
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );

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
          href={localizePath(locale, "/main")}
          className="text-lg font-bold tracking-[0.08em] text-foreground"
          aria-label={t.homeAria}
        >
          ONEUL
        </Link>

        <div className="hidden items-center gap-8 sm:flex">
          <nav aria-label={t.mainMenu}>
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
          <LanguageSwitcher className="border-l border-border pl-6" />
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center sm:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? t.closeMenu : t.openMenu}
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

      <div
        id="mobile-nav"
        className={`sm:hidden ${open ? "block" : "hidden"}`}
      >
        <nav aria-label={t.mobileMenu}>
          <ul className="space-y-1 bg-background px-5 pt-2">
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
        <LanguageSwitcher className="border-b border-border bg-background px-5 pb-6 pt-4" />
      </div>
    </header>
  );
}
