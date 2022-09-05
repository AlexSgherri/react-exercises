import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const lang = {
  en: {
    CURRENT_LANG : "English language",
  },

  it: {
    CURRENT_LANG : "Lingua Italiana",
  },
};

export function DisplayLanguage() {
  const language = useContext(LanguageContext);

  return <h3>{lang[language].CURRENT_LANG} ( key: {language} )</h3>
}
