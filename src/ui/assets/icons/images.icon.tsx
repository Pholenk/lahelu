import Svg, { Circle, Path } from 'react-native-svg';
import { PRIMARY_TEXT } from '@utils';
import { IconProps } from './types';

export const ImagesIcon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  color = PRIMARY_TEXT,
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      testID="imagesIcon"
    >
      <Path fill={color} d="M11.024 11.536 10 10l-2 3h9l-3.5-5z" />
      <Circle cx="9.503" cy="7.497" r="1.503" />
      <Path
        fill={color}
        d="M19 2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.806 5 19s.55-.988 1.012-1H21V4c0-1.103-.897-2-2-2zm0 14H5V5c0-.806.55-.988 1-1h13v12z"
      />
    </Svg>
  );
};
