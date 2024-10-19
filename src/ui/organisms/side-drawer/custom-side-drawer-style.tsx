import { Dimensions, StyleSheet } from 'react-native';

const { width: ScreenWidth } = Dimensions.get('screen');

export const CustomSideDrawerStyle = StyleSheet.create({
  container: {
    width: ScreenWidth / 1.75,
  },
});
