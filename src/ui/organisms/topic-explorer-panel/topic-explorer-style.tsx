import { StyleSheet } from 'react-native';
import { PRIMARY, PRIMARY_TEXT, WHITE } from '@utils';

export const TopicExplorerStyle = StyleSheet.create({
  container: {},
  titleBox: {
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  title: {
    color: PRIMARY,
    fontWeight: '800',
  },
  menuItem: {
    alignItems: 'center',
    backgroundColor: WHITE,
    justifyContent: 'flex-start',
    paddingLeft: 24,
    paddingVertical: 4,
    width: '100%',
  },
  menuItemLabel: {
    color: PRIMARY_TEXT,
    textAlign: 'left',
    flex: 1,
    paddingHorizontal: 8,
  },
  menuImage: {
    width: 22,
    height: 22,
  },
  menuIconBox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 24,
    marginRight: 16,
    width: 24,
  },
});
