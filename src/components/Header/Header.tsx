// src/components/Header/Header.tsx
import styles from "./Header.module.scss";
import { useEffect, useState } from "react";
import {
  type ThemeName,
  getCurrentTheme,
  applyDarkTheme,
  applyLightTheme,
} from "../../utils/theme";

export const Header = () => {
  const [theme, setThemeState] = useState<ThemeName>("light");

  useEffect(() => {
    setThemeState(getCurrentTheme());
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      applyDarkTheme();
      setThemeState("dark");
    } else {
      applyLightTheme();
      setThemeState("light");
    }
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>My online Radio React ts App</h1>
      <nav className={styles.nav}>
        <a
          href="#"
          className={styles.link}
          title="Вернуться на Главную страницу проекта"
        >
          Главная
        </a>

        <a
          href="#"
          className={styles.link}
          title="Просмотреть информацию О проекте"
        >
          О проекте
        </a>

        <button
          onClick={toggleTheme}
          className={styles.toggleBtn}
          title={`Переключиться на ${theme === "dark" ? "Светлую" : "Тёмную"} тему оформления`}
        >
          {theme === "light" ? "☀️ Светлая" : "🌙 Тёмная"}
        </button>
      </nav>
    </header>
  );
};
