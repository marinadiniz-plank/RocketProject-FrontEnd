/* eslint-disable prettier/prettier */
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "./en/translations.json";
import franTranslations from "./fran/translations.json";
import ptTranslations from "./pt/translations.json";

i18n.use(initReactI18next).init({
    fallbackLng: "en",
    lng: "en",
    resources: {
        en: {
            ...enTranslations,
        },
        fran: {
            ...franTranslations,
        },
        pt: {
            ...ptTranslations,
        },
    },
});

i18n.languages = ["en", "pt", "fran"];

export default i18n;
