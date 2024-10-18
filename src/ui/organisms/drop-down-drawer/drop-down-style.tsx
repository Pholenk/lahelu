import { StyleSheet } from 'react-native';
import { BORDER_COLOR, PRIMARY, PRIMARY_TEXT, WHITE } from '@utils';

export const DropDownStyle = StyleSheet.create({
  container: {
    borderColor: BORDER_COLOR,
    borderTopWidth: 0.5,
    paddingVertical: 8,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 24,
    paddingRight: 20,
    paddingVertical: 4,
  },
  headerLabel: {
    fontWeight: 'bold',
    color: PRIMARY_TEXT,
  },
});
