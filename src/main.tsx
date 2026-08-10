import "@a1rth/css-normalize";
import "./styles/variables.scss";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { applyDarkTheme, applyLightTheme } from "./utils/theme";


// Фиксируем тёмную тему
applyLightTheme();
applyDarkTheme();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
