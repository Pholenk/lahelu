import { StyleSheet } from 'react-native';
import { PRIMARY, PRIMARY_TEXT, WHITE } from '@utils';

export const DrawerMenuItemStyle = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: WHITE,
    paddingHorizontal: 24,
    paddingVertical: 4,
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
    fontWeight: '800',
  },
  icon: {
    marginEnd: 16,
  },
});
