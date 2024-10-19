import Svg, { Path } from 'react-native-svg';
import { PRIMARY_TEXT } from '@utils';
import { IconProps } from './types';

export const MessageIcon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  color = PRIMARY_TEXT,
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      testID="messageIcon"
    >
      <Path fill={color} d="M7 7h10v2H7zm0 4h7v2H7z" />
      <Path
        fill={color}
        d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14H6.667L4 18V4h16v12z"
      />
    </Svg>
  );
};
