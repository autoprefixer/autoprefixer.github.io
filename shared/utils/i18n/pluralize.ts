import { I18Pluralize } from "./types";

export const pluralizeEn: I18Pluralize = (count, words, withCount) => {
  const pluralizedText = count === 1 ? words[0] : words[1];
  return withCount ? `${count} ${pluralizedText}` : pluralizedText;
};

export const pluralizeRu: I18Pluralize = (count, words, withCount) => {
  const cases = [2, 0, 1, 1, 1, 2];
  const pluralizedText =
    "" + words[count % 100 > 4 && count % 100 < 20 ? 2 : cases[Math.min(count % 10, 5)]];
  return withCount ? `${count} ${pluralizedText}` : pluralizedText;
};
