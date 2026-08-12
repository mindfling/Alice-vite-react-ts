import { useEffect, useRef, useState } from "react";
import styles from "./RadioPlayer.module.scss";
import { STATIONS, type Station } from "./stations";

// Создаём один экземпляр Audio, но меняем у него src при смене станции
// const audioRef = new Audio();
// console.log('audioRef: ', audioRef, typeof audioRef);

export const RadioPlayer = () => {
  const [currentStation, setCurrentStation] = useState<Station>(STATIONS[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [track, setTrack] = useState<{ artist: string; title: string } | null>(
    null,
  );

  // Громкость: от 0.0 до 1.0
  const [volume, setVolume] = useState<number>(1);

  // Создаём Audio ОДИН раз и храним в ref
  // const audioElement = useRef<Audio | null>(null); todo
  // ПРАВИЛЬНО: используем HTMLAudioElement вместо Audio
  const audioElement = useRef<HTMLAudioElement | null>(null);

  // 1. Чтение громкости из localStorage при монтировании
  useEffect(() => {
    const saved = localStorage.getItem("radio-player-volume");
    if (saved) {
      const val = parseFloat(saved);
      if (!isNaN(val) && val >= 0 && val <= 1) {
        setVolume(val);
      }
    }
  }, []);

  // 2. Сохранение громкости в localStorage при изменении
  useEffect(() => {
    localStorage.setItem("radio-player-volume", volume.toString());
  }, [volume]);

  // 3. Синхронизация с Audio-элементом
  useEffect(() => {
    if (audioElement.current) {
      audioElement.current.volume = volume;
    }
  }, [volume]);

  // Создаём Audio один раз
  // todo
  useEffect(() => {
    if (!audioElement.current) {
      audioElement.current = new Audio();
      audioElement.current.src = currentStation.url;
      audioElement.current.load();
    }
    // todo here
    audioElement.current = new Audio(currentStation.url);
    // Если уже играли на старой станции, сбрасываем
    if (isPlaying) {
      audioElement.current.currentTime = 0;
    }
    audioElement.current.load(); // ?
  }, [currentStation]); // пересоздаём Audio только при смене станции

  const stopAndClear = () => {
    const el = audioElement.current;
    if (!el) return;
    el.pause();
    el.currentTime = 0;
    el.src = "";
    el.load();
  };

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
      audioElement.current
        .play()
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
    console.log("change station");
    if (!audioElement.current) {
      console.log("change return exit");
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

      {/* Блок громкости */}
      <div className={styles.volumeControl}>
        <span className={styles.volumeLabel}>Громкость</span>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className={styles.volumeRange}
          aria-label="Регулировка громкости"
        />
      </div>

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
};;;;;
