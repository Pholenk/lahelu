import Svg, { Path } from 'react-native-svg';
import { IconProps } from './types';
import { PRIMARY_TEXT } from '@utils';

export const ClockIcon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  color = PRIMARY_TEXT,
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      testID="clockIcon"
    >
      <Path
        fill={color}
        d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"
      />
      <Path fill={color} d="M13 7h-2v6h6v-2h-4z" />
    </Svg>
  );
};
