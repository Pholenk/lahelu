import Svg, { Path } from 'react-native-svg';
import { PRIMARY_TEXT } from '@utils';
import { IconProps } from './types';

export const TriangleRightIcon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  color = PRIMARY_TEXT,
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      testID="triangleRightIcon"
    >
      <Path fill={color} d="M7 6v12l10-6z" />
    </Svg>
  );
};
