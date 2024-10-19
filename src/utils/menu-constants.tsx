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

export const TopicExplorerMenu = [
  {
    name: 'Telusuri',
    id: 'topicExplorer',
  },
  {
    name: 'Lucu',
    id: 'funny',
    img: 'https://lahelu.com/media/hashtags/funny.jpg',
  },
  {
    name: 'Relate',
    id: 'relate',
    img: 'https://lahelu.com/media/hashtags/relate.jpg',
  },
  {
    name: 'Gaming',
    id: 'gaming',
    img: 'https://lahelu.com/media/hashtags/gaming.jpg',
  },
  {
    name: 'Nostalgia',
    id: 'nostalgia',
    img: 'https://lahelu.com/media/hashtags/nostalgia.jpg',
  },
  {
    name: 'Sad',
    id: 'sad',
    img: 'https://lahelu.com/media/hashtags/sad.jpg',
  },
  {
    name: 'Random',
    id: 'random',
    img: 'https://lahelu.com/media/hashtags/random.jpg',
  },
  {
    name: 'Wtf',
    id: 'wtf',
    img: 'https://lahelu.com/media/hashtags/wtf.jpg',
  },
  {
    name: 'Rage',
    id: 'rage',
    img: 'https://lahelu.com/media/hashtags/rage.jpg',
  },
  {
    name: 'Anime',
    id: 'anime',
    img: 'https://lahelu.com/media/hashtags/anime.jpg',
  },
  {
    name: 'Sarkas',
    id: 'sarkas',
    img: 'https://lahelu.com/media/hashtags/sarcastic.jpg',
  },
  {
    name: 'Dark',
    id: 'dark',
    img: 'https://lahelu.com/media/hashtags/dark.jpg',
  },
  {
    name: 'Absurd',
    id: 'absurd',
    img: 'https://lahelu.com/media/hashtags/absurd.jpg',
  },
  {
    name: 'Cringe',
    id: 'cringe',
    img: 'https://lahelu.com/media/hashtags/cringe.jpg',
  },
  {
    name: 'Sus',
    id: 'sus',
    img: 'https://lahelu.com/media/hashtags/sus.jpg',
  },
  {
    name: 'Binatang',
    id: 'animal',
    img: 'https://lahelu.com/media/hashtags/animal.jpg',
  },
];
