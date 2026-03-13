import type { Locale } from "./config";

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((m) => m.default),
  "zh-HK": () => import("./dictionaries/zh-HK.json").then((m) => m.default),
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale]();
}
