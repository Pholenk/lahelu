import Svg, { Path } from 'react-native-svg';
import { IconProps } from './types';
import { PRIMARY_TEXT } from '@utils';

export const HamburgerIcon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  color = PRIMARY_TEXT,
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      testID="hamburgerIcon"
    >
      <Path fill={color} d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
    </Svg>
  );
};
