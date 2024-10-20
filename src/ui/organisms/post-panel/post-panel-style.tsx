import { BACKGROUND, PRIMARY_TEXT, WHITE } from '@utils';
import { Dimensions, StyleSheet } from 'react-native';

const { width: screenWidth } = Dimensions.get('screen');

export const PostPanelStyle = StyleSheet.create({
  container: {
    // backgroundColor: BACKGROUND,
    // backgroundColor: WHITE,
    justifyContent: 'center',
    marginBottom: 8,
    // paddingHorizontal: 16,
    width: screenWidth,
  },
  headerWrapper: {
    alignItems: 'flex-start',
    backgroundColor: WHITE,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  row: {
    flexDirection: 'row',
  },
  avatarBox: {
    alignItems: 'center',
    gap: 8,
  },
  optionBox: {
    paddingVertical: 4,
  },
  username: {
    color: PRIMARY_TEXT,
    textAlign: 'left',
    fontWeight: '700',
  },
  contentWrapper: {
    justifyContent: 'flex-start',
    backgroundColor: BACKGROUND,
  },
  titleBox: {
    backgroundColor: WHITE,
    paddingVertical: 8,
    paddingHorizontal: 16,
    width: '100%',
  },
  title: {
    color: PRIMARY_TEXT,
    fontWeight: '800',
    textAlign: 'left',
  },
  footerWrapper: {
    backgroundColor: WHITE,
    paddingVertical: 12,
    paddingHorizontal: 16,
    gap: 12,
  },
});
