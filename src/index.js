import "react-app-polyfill/stable";
import "core-js";
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";
import { DirectionSetterComponent } from "./components/direction-rtl-ltr";

import { IntlProvider } from "react-intl"; // Import IntlProvider
import messagesEn from "./locales/en.json"; // Import your English translations
import messagesFa from "./locales/fa.json"; // Import your Persian (Farsi) translations
import messagesPa from "./locales/pa.json"; // Import your Persian (Farsi) translations

const localeData = {
  en: messagesEn,
  fa: messagesFa,
  pa: messagesPa,
};
const storedLanguage = localStorage.getItem("lang"); // Get stored language or default to "en"
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <DirectionSetterComponent />
    <IntlProvider locale={storedLanguage} messages={localeData[storedLanguage]}>
      <App />
    </IntlProvider>
  </Provider>
);

// createRoot(document.getElementById("root")).render(
//   <Provider store={store}>
//     <DirectionSetterComponent />
//     <App />s
//   </Provider>
// );

reportWebVitals();
