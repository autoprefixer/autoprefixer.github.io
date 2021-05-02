import { I18Lang } from "./types";
import { useRouter } from "next/router";
import { translate, pluralize } from "./i18n";

export function useTrans() {
  const locale = useRouter().locale as I18Lang;
  return {
    t: translate(locale),
    c: pluralize(locale),
  };
}
