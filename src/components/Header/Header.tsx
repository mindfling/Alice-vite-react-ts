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
  const [theme, setThemeState] = useState<ThemeName>('light');

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
      <h1 className={styles.title}>My Hello Alice React App</h1>
      <nav className={styles.nav}>
        <a href="#" className={styles.link}>Главная</a>

        <a href="#" className={styles.link}>О проекте</a>

        <button onClick={toggleTheme} className={styles.toggleBtn}>
          {theme === "light" ? "☀️ Светлая" : "🌙 Тёмная"}
        </button>
      </nav>
    </header>
  );
};
