import { i18n } from "../../shared/utils";

import en from "./en.json";
import ru from "./ru.json";

export type ILocale = "ru" | "en";
export type ITranslations = { [lang in ILocale]: i18n.I18TranslationsObject };
export const translations: ITranslations = { en, ru };
