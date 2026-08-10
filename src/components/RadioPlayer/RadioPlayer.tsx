import { useState } from "react";
import styles from "./RadioPlayer.module.scss";
import { STATIONS } from "./stations";

// Создаём один экземпляр Audio, но меняем у него src при смене станции
// todo useRef
const audioRef = new Audio();

export const RadioPlayer = () => {
  const [currentStation, setCurrentStation] = useState(STATIONS[10]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  console.log('играем audioRef: ', audioRef);

  const togglePlay = () => {
    if (!isPlaying) {
      setLoading(true);
      setError(null);
      audioRef
        .play()
        .then(() => {
          setLoading(false);
          setIsPlaying(true);
        })
        .catch( e => {
          setLoading(false);
          setIsPlaying(false);
          console.error(e)
          setError("Не удалось начать воспроизведение");
        });
    } else {
      audioRef.pause();
      setIsPlaying(false);
    }
  };

  const changeStation = (station: (typeof STATIONS)[number]) => {
    setCurrentStation(station);
    audioRef.src = station.url;
    // Если уже играет — перезапускаем с новым потоком
    if (isPlaying) {
      togglePlay();
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
            {station.name}
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

      {error && <div className={styles.error}>{error}</div>}

      <p className={styles.current}>Сейчас играет: {currentStation.name}</p>
    </aside>
  );
};
