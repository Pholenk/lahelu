import { BORDER_COLOR, PRIMARY_TEXT } from '@utils';
import { StyleSheet } from 'react-native';

export const PostFooterButtonsStyle = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
  },
  gap8: {
    gap: 8,
  },
  button: {
    padding: 8,
    alignItems: 'center',
  },
  upvoteButton: {
    borderColor: BORDER_COLOR,
    borderRightWidth: 1.5,
  },
  buttonWrapper: {
    borderColor: BORDER_COLOR,
    borderWidth: 1,
    borderRadius: 8,
  },
  buttonLabel: {
    color: PRIMARY_TEXT,
    fontWeight: '600',
    marginLeft: 8,
  },
});
