// src/utils/theme.ts

export type ThemeName = 'light' | 'dark';

/**
 * Устанавливает тему на уровне документа.
 * Поддерживает 'light' и 'dark'.
 */
const setTheme = (theme: ThemeName) => {
  if (theme === "dark") {
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
  }
};

/**
 * Применяет тёмную тему.
 */
export const applyDarkTheme = () => {
  setTheme('dark');
};

/**
 * Применяет светлую тему.
 */
export const applyLightTheme = () => {
  setTheme('light');
};

/**
 * Получить текущую тему.
 */
export const getCurrentTheme = (): ThemeName => {
  const result = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  return result;
}
