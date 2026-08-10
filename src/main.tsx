import "@a1rth/css-normalize";
// import '../node_modules/@a1rth/css-normalize';
import "./styles/variables.scss";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Фиксируем тёмную тему
document.documentElement.classList.add("dark");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
