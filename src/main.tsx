import "@a1rth/css-normalize";
import "./styles/variables.scss";
import './styles/layout.scss';

import React from "react";
import ReactDOM from "react-dom/client";
import {App} from "./App";
import { applyDarkTheme, applyLightTheme, getCurrentTheme } from "./utils/theme";

// Фиксируем тёмную тему при старте
console.log("Текущая тема при старте:", getCurrentTheme());
// applyLightTheme();
applyDarkTheme();


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
