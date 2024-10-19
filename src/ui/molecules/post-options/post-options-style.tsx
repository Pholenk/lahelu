import { BORDER_COLOR, PRIMARY_TEXT, WHITE } from '@utils';
import { StyleSheet } from 'react-native';

export const PostOptionsStyle = StyleSheet.create({
  container: {},
  row: {
    flexDirection: 'row',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: WHITE,
    borderBottomWidth: 0.5,
    borderColor: BORDER_COLOR,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  title: {
    color: PRIMARY_TEXT,
    fontWeight: '800',
  },
  body: {
    backgroundColor: WHITE,
    paddingVertical: 16,
  },
  optionItem: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: WHITE,
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  optionItemLabel: {
    color: PRIMARY_TEXT,
    marginLeft: 8,
    textAlign: 'left',
  },
});
