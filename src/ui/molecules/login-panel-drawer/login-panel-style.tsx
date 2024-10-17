import { StyleSheet } from 'react-native';
import {
  BORDER_COLOR,
  PRIMARY,
  PRIMARY_TEXT,
  SECONDARY_TEXT,
  WHITE,
} from 'utils';

export const LoginPanelStyle = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    borderRadius: 8,
    justifyContent: 'center',
    margin: 12,
    padding: 12,
  },
  title: {
    color: PRIMARY_TEXT,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subtitle: {
    color: SECONDARY_TEXT,
    marginVertical: 8,
    textAlign: 'center',
    fontSize: 10,
  },
  loginButton: {
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: PRIMARY,
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  loginButtonLabel: {
    color: WHITE,
    fontWeight: 'bold',
  },
});
