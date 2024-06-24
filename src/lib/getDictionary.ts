import dictionaries from "@/dictionaries";
import { Language } from "@/types";
export const getDictionary = (locale: Language) => {
  if (!locale) {
    return dictionaries["tr"];
  } else {
    return dictionaries[locale] ? dictionaries[locale] : dictionaries["en"];
  }
};
