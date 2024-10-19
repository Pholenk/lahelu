import { ColorValue, ViewStyle } from 'react-native';

export interface IconProps {
  width?: number;
  height?: number;
  color?: ColorValue;
  style?: ViewStyle;
  testId?: string;
  type?: 'small' | 'large';
  fillColor?: ColorValue;
}
