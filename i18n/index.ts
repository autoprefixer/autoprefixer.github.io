import * as i18n from "@ymatuhin/utils/i18n";

import en from './en.json';
import ru from './ru.json';

console.info(`# [i18n]`, i18n)

export type IWebsiteLocale = "ru" | "en";
export type IWebsiteTranslations = { [lang in IWebsiteLocale]: i18n.ITranslationsObject };
export const translations: IWebsiteTranslations = { en, ru };
