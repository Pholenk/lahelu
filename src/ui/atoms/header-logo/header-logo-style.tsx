import { HEADER_TEXT_SHADOW, PRIMARY } from '@utils';
import { StyleSheet } from 'react-native';

export const HeaderLogoStyle = StyleSheet.create({
  label: {
    color: PRIMARY,
    fontSize: 20,
    fontWeight: '900',
    textShadowColor: HEADER_TEXT_SHADOW,
    textShadowOffset: { width: 1.5, height: 2 },
    textShadowRadius: 4,
    width: '100%',
  },
});
