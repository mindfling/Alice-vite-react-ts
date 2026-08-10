import styles from "./HelloWorld.module.scss";

export const HelloWorld = () => {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Hello, World my app</h1>
      <p className={styles.subtitle}>
        React + TypeScript + Vite + SCSS Modules + тёмная тема.
      </p>
    </main>
  );
};
