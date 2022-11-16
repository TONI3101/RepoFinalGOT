import { es } from "./es";
import { en } from "./en";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    es: {
        translation: es
    },
    en: {
        translation: en
    }

};

i18n.use(initReactI18next).init({
    resources,
    lang: 'en',
    interpolation:{
        escapeValue: false
    }
});

export default i18n;