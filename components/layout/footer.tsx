import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { products } from "@/data/products";
import { Container } from "@/components/ui/container";

const footerLinks: { label: string; href: string; external?: boolean }[] = [
  { label: "Products", href: "/products" },
  ...products.map((p) => ({ label: p.name, href: p.url, external: true })),
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border">
      <Container className="py-14 sm:py-20">
        <div className="flex flex-col gap-12 sm:flex-row sm:justify-between">
          <div className="max-w-sm">
            <p className="text-lg font-bold tracking-[0.08em]">ONEUL</p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {siteConfig.definitionKo}
            </p>
            <div className="mt-6 text-sm text-muted">
              <p>{siteConfig.legalName}</p>
              <p>{siteConfig.legalNameKo}</p>
              {siteConfig.contactEmail && (
                <p className="mt-3">
                  <a
                    href={`mailto:${siteConfig.contactEmail}`}
                    className="text-foreground underline underline-offset-4 transition-colors hover:text-accent"
                  >
                    {siteConfig.contactEmail}
                  </a>
                </p>
              )}
            </div>
          </div>

          <nav aria-label="푸터 메뉴">
            <ul className="space-y-3 text-sm">
              {footerLinks.map((link) =>
                link.external ? (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted transition-colors hover:text-foreground"
                    >
                      {link.label}
                      <span aria-hidden="true"> ↗</span>
                    </a>
                  </li>
                ) : (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-muted transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>
        </div>

        <p className="mt-14 border-t border-border pt-6 text-xs text-muted">
          © {new Date().getFullYear()} {siteConfig.legalName} All rights
          reserved.
        </p>
      </Container>
    </footer>
  );
}
