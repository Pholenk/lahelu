export const TabHeader = [
  {
    name: 'Home',
    id: 'home',
    level: undefined,
  },
  {
    name: 'Fresh',
    id: 'fresh',
    level: undefined,
  },
  {
    name: 'Trending',
    id: 'trending',
    level: undefined,
  },
];

export const SidePanelMenu = [
  ...TabHeader,
  {
    name: 'Topik',
    id: 'topic',
    level: undefined,
  },
  {
    name: 'Meme lain',
    id: 'other',
    level: 0,
  },
  {
    name: 'Peringkat',
    id: 'rank',
    level: 1,
    childOf: 'other',
  },
  {
    name: 'Tersimpan',
    id: 'saved',
    level: 1,
    childOf: 'other',
  },
  {
    name: 'Acak',
    id: 'random',
    level: 1,
    childOf: 'other',
  },
  {
    name: 'Jelajah',
    id: 'explore',
    level: 0,
  },
  {
    name: 'Donatur',
    id: 'donate',
    level: 1,
    childOf: 'explore',
  },
  {
    name: 'Medali',
    id: 'achievement',
    level: 1,
    childOf: 'explore',
  },
  {
    name: 'Toko Koin',
    id: 'coin',
    level: 1,
    childOf: 'explore',
  },
  {
    name: 'Discord',
    id: 'discord',
    level: 1,
    childOf: 'explore',
  },
];
