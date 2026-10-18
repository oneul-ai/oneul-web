"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
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

type LanguageLink = {
  locale: Locale;
  label: string;
  href: string;
  current: boolean;
};

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className={`h-3.5 w-3.5 transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 6l4 4 4-4" />
    </svg>
  );
}

function Check() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3.5 8.5l3 3 6-7" />
    </svg>
  );
}

/**
 * 언어 선택 드롭다운.
 * - desktop: 버튼 아래에 떠 있는 메뉴. 바깥 클릭/Esc/경로 변경 시 닫힘.
 * - mobile: 모바일 메뉴 안에서 인라인으로 펼쳐지는 목록.
 */
function LanguageMenu({
  locale,
  links,
  label,
  variant,
  onNavigate,
}: {
  locale: Locale;
  links: LanguageLink[];
  label: string;
  variant: "desktop" | "mobile";
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const isDesktop = variant === "desktop";

  return (
    <div ref={rootRef} className={isDesktop ? "relative" : ""}>
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={label}
        onClick={() => setOpen((v) => !v)}
        className={
          isDesktop
            ? "flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
            : "flex w-full items-center justify-between py-2.5 text-base text-foreground"
        }
      >
        <span lang={localeTags[locale]}>{localeNames[locale]}</span>
        <Chevron open={open} />
      </button>

      <ul
        id={menuId}
        role="menu"
        aria-label={label}
        hidden={!open}
        className={
          isDesktop
            ? "absolute right-0 top-full z-50 mt-3 min-w-[10rem] rounded-xl border border-border bg-background py-1.5 shadow-[0_12px_32px_-12px_rgba(0,0,0,0.25)]"
            : "mb-2 rounded-xl border border-border bg-surface py-1"
        }
      >
        {links.map((item) => (
          <li key={item.locale} role="none">
            <Link
              role="menuitem"
              href={item.href}
              lang={localeTags[item.locale]}
              hrefLang={localeTags[item.locale]}
              aria-current={item.current ? "page" : undefined}
              onClick={() => {
                rememberLocale(item.locale);
                setOpen(false);
                onNavigate();
              }}
              className={`flex items-center justify-between gap-6 px-4 py-2 text-sm transition-colors hover:bg-surface hover:text-foreground ${
                item.current ? "font-medium text-foreground" : "text-muted"
              } ${isDesktop ? "" : "hover:bg-background"}`}
            >
              {item.label}
              {item.current ? <Check /> : null}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

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
  const languageLinks: LanguageLink[] = locales.map((l) => ({
    locale: l,
    label: localeNames[l],
    href: localizePath(l, basePath),
    current: l === locale,
  }));

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
          <div className="border-l border-border pl-6">
            <LanguageMenu
              locale={locale}
              links={languageLinks}
              label={t.language}
              variant="desktop"
              onNavigate={() => setOpen(false)}
            />
          </div>
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
        <div className="border-b border-border bg-background px-5 pb-4 pt-2">
          <LanguageMenu
            locale={locale}
            links={languageLinks}
            label={t.language}
            variant="mobile"
            onNavigate={() => setOpen(false)}
          />
        </div>
      </div>
    </header>
  );
}
