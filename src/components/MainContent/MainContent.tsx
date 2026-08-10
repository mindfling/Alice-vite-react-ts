// import { HelloWorld } from "../HelloWorld/HelloWorld";
import { RadioPlayer } from "../RadioPlayer/RadioPlayer";
import style from "./MainContent.module.scss";

export const MainContent = () => {
  return (
    <main className={style.mainContent}>
      {/* <h2 className={style.heading}>Основной контент здесь</h2> */}

      <RadioPlayer />

      <p className="text">Список станций можно найти здесь https://vk.ru/topic-119992857_49385190</p>

      <a
        className="text-link"
        href="https://vk.ru/topic-119992857_49385190"
        target="_blank"
      >
        https://vk.ru/topic-119992857_49385190
      </a>
    </main>
  );
};
