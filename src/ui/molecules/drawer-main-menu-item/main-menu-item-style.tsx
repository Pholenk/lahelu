import { StyleSheet } from 'react-native';
import { PRIMARY, PRIMARY_TEXT, WHITE } from '@utils';

export const MainMenuItemStyle = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: WHITE,
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  buttonActive: {
    backgroundColor: PRIMARY,
  },
  label: {
    color: PRIMARY_TEXT,
    textAlign: 'left',
  },
  labelActive: {
    color: WHITE,
  },
  icon: {
    marginEnd: 8,
  },
});
