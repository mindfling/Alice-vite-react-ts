export type Station = {
  id: string;
  name: string;
  url: string;
  api?: string;
}

/**
 ** https://vk.ru/topic-119992857_49385190
 */
export const STATIONS: Array<Station> = [
  {
    id: '1',
    name: 'Европа Плюс',
    url: 'http://ep128.hostingradio.ru:8030/ep128',
  },
  {
    id: '2',
    name: 'Маруся FM nw',
    url: 'https://stream128.marus.fm',
  },
  {
    id: '3',
    name: 'Русское Радио',
    url: 'https://rusradio.hostingradio.ru/rusradio128.mp3',
  },
  {
    id: '4',
    name: 'Дорожное радио',
    url: 'https://dorognoe.hostingradio.ru:8000/dorognoe',
  },
  {
    id: '5',
    name: 'Радио Дача',
    url: 'http://listen.vdfm.ru:8000/dacha',
  },
  {
    id: '6',
    name: 'Top40',
    url: 'http://eptop128server.streamr.ru:8033/eptop128',
  },
  {
    id: '7',
    name: 'наш радио',
    url: 'https://nashe.streamr.ru/nashe-128.mp3',
  },
  {
    id: '8',
    name: 'Радио Jazz',
    url: 'https://jazz.streamr.ru/jazz-128.mp3',
  },
  {
    id: '9',
    name: 'Наше радио Jazz',
    url: 'https://nashe1.hostingradio.ru/jazz-128.mp3',
  },
  {
    id: '10',
    name: 'France Jazz',
    url: 'https://jazz-wr01.ice.infomaniak.ch/jazz-wr01-128.mp3',
  },
  {
    id: '11',
    name: 'Классическая музыка',
    url: 'http://stream.srg-ssr.ch/m/rsc_de/mp3_128',
  },
  {
    id: '12',
    name: 'Anime Radio',
    url: 'https://pool.anison.fm:9000/AniSonFM%28320%29?nocache=0.9834540412142996',
  },
  {
    id: '13',
    name: 'DFM',
    url: 'https://dfm.hostingradio.ru/dfm128.mp3',
  },
  {
    id: '14',
    name: '90\`s Eurodance',
    url: 'https://listen9.myradio24.com/5967',
  },
  {
    id: '15',
    name: 'Radio Monte Carlo',
    url: 'https://montecarlo.hostingradio.ru/montecarlo128.mp3',
    api: 'https://montecarlo.ru/api/n/current',
  },
];
