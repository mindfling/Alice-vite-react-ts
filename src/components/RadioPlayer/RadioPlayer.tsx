import { useEffect, useRef, useState } from "react";
import styles from "./RadioPlayer.module.scss";
import { STATIONS } from "./stations";

// Создаём один экземпляр Audio, но меняем у него src при смене станции
// const audioRef = new Audio();
// console.log('audioRef: ', audioRef, typeof audioRef);

export const RadioPlayer = () => {
  const [currentStation, setCurrentStation] = useState(STATIONS[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Создаём Audio ОДИН раз и храним в ref
  // const audioElement = useRef<Audio | null>(null); todo
  // ПРАВИЛЬНО: используем HTMLAudioElement вместо Audio
  const audioElement = useRef<HTMLAudioElement | null>(null);
  console.log('audioElement: ', audioElement);

  useEffect(() => {
    audioElement.current = new Audio(currentStation.url);
    // Если уже играли на старой станции, сбрасываем
    if (isPlaying) {
      audioElement.current.currentTime = 0;
    }
    audioElement.current.load(); // ?

  }, [currentStation]); // пересоздаём Audio только при смене станции


  const play = () => {
    if (!audioElement.current) return;
    setLoading(true);
    setError(null);
    audioElement.current
      .play()
      .then(() => {
        setLoading(false);
        setIsPlaying(true);
      })
      .catch((e: Error) => {
        setLoading(false);
        setIsPlaying(false);
        setError(`Не удалось начать воспроизведение ${currentStation.name}`);
        console.error(`Ошибка воспроизведения ${e}`);
      });
  };

  const stop = () => {
    if (!audioElement.current) return;
    audioElement.current.pause();
    audioElement.current.currentTime = 0;
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (!audioElement.current) return;

    if (!isPlaying) {
      setLoading(true);
      setError(null);
      audioElement.current.play()
        .then(() => {
          setLoading(false);
          setIsPlaying(true);
        })
        .catch((e) => {
          setLoading(false);
          setIsPlaying(false);
          setError(`Не удалось начать воспроизведение ${currentStation.name}`);
          console.error(`Ошибка воспроизведения ${e}`);
        });
    } else {
      audioElement.current.pause();
      setIsPlaying(false);
    }
  };

  const changeStation = (station: (typeof STATIONS)[number]) => {
    console.log('change station');
    if (!audioElement.current) {
      console.log('change return exit');
      return;
    }
    
    const el = audioElement.current;
    el.pause(); // 1. Останавливаем
    el.currentTime = 0; // 2. Сбрасываем позицию
    el.src = ""; // 3. Очищаем источник (опционально, но полезно)
    el.load(); // 4. Перезагружаем элемент — буфер очищается

    if (error) {
      setError(null);
    }
    setCurrentStation(station);
    // Если уже играет — останавливаем
    if (isPlaying) {
      stop();
    }
  };


  return (
    <aside className={styles.radioPlayer}>
      <h3 className={styles.title}>Онлайн‑радио</h3>

      <div className={styles.stations}>
        {STATIONS.map((station) => (
          <button
            key={station.id}
            onClick={() => changeStation(station)}
            className={
              currentStation.id === station.id
                ? `${styles.stationBtn} ${styles.active}`
                : styles.stationBtn
            }
            title={`станция ${station.id} называется ${station.name} аудиопоток "${station.url}"`}
          >
            {`${station.id}. ${station.name}`}
          </button>
        ))}
      </div>

      <div className={styles.controls}>
        <button
          onClick={togglePlay}
          disabled={loading}
          className={styles.playPauseBtn}
        >
          {loading ? "Загрузка..." : isPlaying ? "⏸ Пауза" : "▶ Играть"}
        </button>
      </div>
      <div className={styles.controls}>
        <button
          onClick={play}
          disabled={loading || isPlaying}
          className={styles.playBtn}
        >
          {loading ? "Загрузка..." : "▶ Играть"}
        </button>

        <button onClick={stop} disabled={!isPlaying} className={styles.stopBtn}>
          {"⏹ Стоп"}
        </button>
      </div>

      {error && <div className={styles.error}>{error}</div>}

      <p className={styles.current}>
        Сейчас выбрана станция: <b>{currentStation.name}</b>
      </p>
    </aside>
  );
};;
