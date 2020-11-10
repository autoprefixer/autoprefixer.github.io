import{ AppProps } from "next/app";
import { useRouter } from "next/router";
import * as i18n from "@ymatuhin/utils/i18n";
import { IWebsiteLocale, translations } from "../i18n";

function MyApp({ Component, pageProps }: AppProps) {
  const locale = useRouter().locale as IWebsiteLocale;
  i18n.register(locale, translations[locale]);
  return <Component {...pageProps} />;
}

export default MyApp;
