import { ImagesIcon, DownloadIcon, SadIcon, FlagIcon } from '@ui';
import { DANGER_TEXT, PRIMARY_TEXT } from './color-constants';

export const PostOptionsConstant = [
  {
    label: 'Simpan ke album',
    id: 'saveToAlbum',
    icon: <ImagesIcon />,
    color: PRIMARY_TEXT,
  },
  {
    label: 'Unduh',
    id: 'download',
    icon: <DownloadIcon />,
    color: PRIMARY_TEXT,
  },
  {
    label: 'Tidak suka',
    id: 'dislike',
    icon: <SadIcon />,
    color: PRIMARY_TEXT,
  },
  {
    label: 'Report',
    id: 'report',
    icon: <FlagIcon color={DANGER_TEXT} />,
    color: DANGER_TEXT,
  },
];
