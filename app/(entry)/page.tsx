import { siteConfig } from "@/lib/site-config";
import { getProduct } from "@/data/products";
import { EntryChooser } from "@/components/entry/entry-chooser";

/**
 * 루트(/) 분기 페이지. 회사 웹사이트(/{locale}/main)와 제품 웹사이트(myday.now) 중 하나를 고른다.
 * 언어는 방문자의 타임존(또는 직접 고른 언어)으로 자동 선택된다.
 */
const myday = getProduct("myday");

export default function EntryPage() {
  return (
    <EntryChooser
      productUrl={myday?.url ?? "https://myday.now"}
      companyHost={siteConfig.url.replace(/^https?:\/\//, "")}
    />
  );
}
