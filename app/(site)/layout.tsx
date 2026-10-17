import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

/** ONEUL 회사 웹사이트(/main, /about, /products, ...) 공통 레이아웃. 루트 분기 페이지(/)에는 적용되지 않는다. */
export default function SiteLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </>
  );
}
