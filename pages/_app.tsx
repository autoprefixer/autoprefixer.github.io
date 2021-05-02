import "../src/global.scss";

import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { BaseLayout } from "../shared/layouts";
import { i18n } from "../shared/utils";
import { ILocale, translations } from "../src/i18n";

function MyApp({ Component, pageProps }: AppProps) {
  const locale = useRouter().locale as ILocale;
  i18n.register(locale, translations[locale]);
  return (
    <BaseLayout>
      <Component {...pageProps} />
    </BaseLayout>
  );
}

export default MyApp;
