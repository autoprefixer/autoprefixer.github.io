import type {
  I18Lang,
  I18Pluralize,
  I18Translations,
  I18PluralizeFns,
  I18TranslationsObject,
} from "./types";

import { isFunction, isString, get } from "lodash";

const translations: I18Translations = {};
const pluralizeFns: I18PluralizeFns = {};

export const register = (lang: I18Lang, hashMap: I18TranslationsObject) =>
  (translations[lang] = hashMap);

export const registerPluralization = (lang: I18Lang, pluralizeFn: I18Pluralize) =>
  (pluralizeFns[lang] = pluralizeFn);

export const translate = (lang: I18Lang) => (path: string) => {
  const translation = get(translations[lang], path, "");
  if (!isString(translation)) throw new Error(`No translations for path: ${path}`);
  return translation;
};

export const pluralize = (lang: I18Lang) => (
  path: string,
  count: number,
  withCount: boolean = true,
) => {
  const pluralizeFn = pluralizeFns[lang];
  const translation = get(translations[lang], path, "");

  if (!isFunction(pluralizeFn)) throw new Error(`No pluralize function for locale: ${lang}`);
  if (!Array.isArray(translation)) throw new Error(`No translations for path: ${path}`);

  return pluralizeFn(count, translation, withCount);
};
