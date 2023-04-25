"use client";

import i18n from "../../../i18n";
import { useParams, usePathname, useRouter } from "next/navigation";

export const LangSwitcher = () => {
  const { lang } = useParams();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <select
      onChange={(e) => {
        const value = e.target.value;
        const correctPathname = pathname.replace(`/${lang}`, `/${value}`);
        router.push(correctPathname);
      }}
      defaultValue={lang}
    >
      {i18n.locales
        .filter((x) => x !== "default")
        .map((res) => (
          <option key={res} value={res}>
            {res}
          </option>
        ))}
    </select>
  );
};
