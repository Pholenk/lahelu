import { BACKGROUND } from '@utils';
import { StyleSheet } from 'react-native';

export const VideoPlayerStyle = StyleSheet.create({
  container: {
    backgroundColor: BACKGROUND,
    width: '100%',
  },
  videoPlayer: {
    width: '100%',
  },
  slider: {
    position: 'absolute',
    left: -16,
    height: 2,
  },
});
