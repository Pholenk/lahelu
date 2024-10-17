export const TabHeader = [
  {
    name: 'Home',
    key: 'home',
    level: 0,
    childOf: '',
  },
  {
    name: 'Fresh',
    key: 'fresh',
    level: 0,
    childOf: '',
  },
  {
    name: 'Trending',
    key: 'trending',
    level: 0,
    childOf: '',
  },
];

export const SidePanelMenu = [
  ...TabHeader,
  {
    name: 'Topik',
    key: 'topic',
    level: 0,
    childOf: '',
  },
];

export const SidePanelOther = [
  {
    name: 'Meme lain',
    key: 'other',
    level: 0,
    childOf: '',
  },
  {
    name: 'Peringkat',
    key: 'rank',
    level: 1,
    childOf: 'other',
  },
  {
    name: 'Tersimpan',
    key: 'saved',
    level: 1,
    childOf: 'other',
  },
  {
    name: 'Acak',
    key: 'random',
    level: 1,
    childOf: 'other',
  },
];

export const SidePanelExplore = [
  {
    name: 'Jelajah',
    key: 'explore',
    level: 0,
    childOf: '',
  },
  {
    name: 'Donatur',
    key: 'donate',
    level: 1,
    childOf: 'explore',
  },
  {
    name: 'Medali',
    key: 'achievement',
    level: 1,
    childOf: 'explore',
  },
  {
    name: 'Toko Koin',
    key: 'coin',
    level: 1,
    childOf: 'explore',
  },
  {
    name: 'Discord',
    key: 'discord',
    level: 1,
    childOf: 'explore',
  },
];
