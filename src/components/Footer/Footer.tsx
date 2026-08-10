import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className="text">Это футтер</p>
      <p className={styles.copyright}>© 2024 React App. Все права защищены.</p>
    </footer>
  );
};
