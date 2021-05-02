export type I18Lang = "ru" | "en" | "be" | "uk";
export type I18Pluralize = (count: number, words: string[], withCount?: boolean) => string;
export type I18TranslationsObject = { [key: string]: I18TranslationsObject | string | string[] };
export type I18Translations = { [lang in I18Lang]?: I18TranslationsObject };
export type I18PluralizeFns = { [lang in I18Lang]?: I18Pluralize };
