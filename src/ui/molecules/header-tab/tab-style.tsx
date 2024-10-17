import { StyleSheet } from 'react-native';
import { BORDER_COLOR, PRIMARY, PRIMARY_TEXT, WHITE } from 'utils';

const TabStyle = StyleSheet.create({
  container: {
    backgroundColor: WHITE,
    borderBottomWidth: 1,
    borderColor: BORDER_COLOR,
    flexDirection: 'row',
    width: '100%',
  },
  tabButton: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  tabButtonLabel: {
    color: PRIMARY_TEXT,
    fontWeight: 'bold',
  },
  tabButtonActive: {
    borderBottomColor: PRIMARY,
    borderBottomWidth: 2,
  },
  tabButtonLabelActive: {
    color: PRIMARY,
  },
});

export default TabStyle;
