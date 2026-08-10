import "@a1rth/css-normalize";
import "./styles/variables.scss";
import './styles/layout.scss';

import ReactDOM from "react-dom/client";
import {App} from "./App";
import { applyDarkTheme } from "./utils/theme";

applyDarkTheme();


ReactDOM.createRoot(document.getElementById("root")!).render(
    <App />
);
