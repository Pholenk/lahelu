import { BORDER_COLOR, GOLD, PRIMARY_TEXT, WHITE } from '@utils';
import { StyleSheet } from 'react-native';

export const HashtagCollectionsStyle = StyleSheet.create({
  container: {},
  contentContainer: {
    gap: 8,
  },
  button: {
    borderRadius: 20,
    paddingHorizontal: 8,
  },
  buttonNormal: {
    borderColor: BORDER_COLOR,
    borderWidth: 1,
  },
  buttonLabel: {
    paddingLeft: 4,
    fontWeight: '600',
  },
  buttonNormalLabel: {
    color: PRIMARY_TEXT,
  },
  buttonGold: {
    backgroundColor: GOLD,
  },
  buttonGoldLabel: {
    color: WHITE,
  },
});
