import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from '@ui/assets/icons';
import { PRIMARY_TEXT } from '@utils';

export const CirclePlusIcon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  color = PRIMARY_TEXT,
}) => {
  return (
    <Svg
      width={width}
      height={height}
      fill="none"
      viewBox={`0 0 ${width} ${height}`}
      testID="circlePlusIcon"
    >
      <Path stroke={color} d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4z" />
      <Path
        stroke={color}
        d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"
      />
    </Svg>
  );
};
