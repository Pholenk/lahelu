import { WHITE } from '@utils';
import { StyleSheet } from 'react-native';

export const HeaderStyle = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: WHITE,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  titleBox: {
    alignItems: 'flex-start',
    flex: 1,
    justifyContent: 'flex-start',
    marginHorizontal: 8,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
