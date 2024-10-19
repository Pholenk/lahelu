import Svg, { Path } from 'react-native-svg';
import { IconProps } from './types';
import { PRIMARY_TEXT } from '@utils';

export const DownloadIcon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  color = PRIMARY_TEXT,
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      testID="downloadIcon"
    >
      <Path fill={color} d="m12 16 4-5h-3V4h-2v7H8z" />
      <Path
        fill={color}
        d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z"
      />
    </Svg>
  );
};
