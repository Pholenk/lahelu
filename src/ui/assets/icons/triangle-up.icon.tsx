import Svg, { Path } from 'react-native-svg';
import { PRIMARY_TEXT } from '@utils';
import { IconProps } from './types';

export const TriangleUpIcon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  color = PRIMARY_TEXT,
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      testID="triangleUpIcon"
    >
      <Path
        fill={color}
        d="M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19zm9-12.243L19.092 17H4.908L12 6.757z"
      />
    </Svg>
  );
};
