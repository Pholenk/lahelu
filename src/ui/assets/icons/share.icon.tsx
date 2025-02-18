import Svg, { Path } from 'react-native-svg';
import { PRIMARY_TEXT } from '@utils';
import { IconProps } from './types';

export const ShareIcon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  color = PRIMARY_TEXT,
}) => {
  return (
    <Svg
      transform={[{ rotateY: '180deg' }]}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      testID="shareIcon"
    >
      <Path
        fill={color}
        d="M11 7.05V4a1 1 0 0 0-1-1 1 1 0 0 0-.7.29l-7 7a1 1 0 0 0 0 1.42l7 7A1 1 0 0 0 11 18v-3.1h.85a10.89 10.89 0 0 1 8.36 3.72 1 1 0 0 0 1.11.35A1 1 0 0 0 22 18c0-9.12-8.08-10.68-11-10.95zm.85 5.83a14.74 14.74 0 0 0-2 .13A1 1 0 0 0 9 14v1.59L4.42 11 9 6.41V8a1 1 0 0 0 1 1c.91 0 8.11.2 9.67 6.43a13.07 13.07 0 0 0-7.82-2.55z"
      />
    </Svg>
  );
};
