// src/i18n.js

import React from "react";
import { IntlProvider } from "react-intl";
import enTranslation from "./locales/en.json"; // Import your language files
import faTranslation from "./locales/fa.json";
import paTranslation from "./locales/pa.json";

const localeData = {
  en: enTranslation,
  fa: faTranslation,
  pa: paTranslation,
};

const I18nProvider = ({ children, locale }) => {
  return (
    <IntlProvider locale={locale} messages={localeData[locale]}>
      {children}
    </IntlProvider>
  );
};

export default I18nProvider;
