import Svg, { Circle, Path } from 'react-native-svg';
import { PRIMARY_TEXT } from '@utils';
import { IconProps } from './types';

export const SadIcon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  color = PRIMARY_TEXT,
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      testID="sadIcon"
    >
      <Path
        fill={color}
        d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"
      />
      <Circle fill={color} cx="8.5" cy="10.5" r="1.5" />
      <Circle fill={color} cx="15.493" cy="10.493" r="1.493" />
      <Path fill={color} d="M12 14c-3 0-4 3-4 3h8s-1-3-4-3z" />
    </Svg>
  );
};
