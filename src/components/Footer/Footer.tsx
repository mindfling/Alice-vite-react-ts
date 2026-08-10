import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className="text">Это футтер тестирования</p>
      <p className={styles.copyright}>© 2026 React App. Все права защищены.</p>
    </footer>
  );
};
