import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from '@ui/assets/icons';
import { PRIMARY_TEXT } from '@utils';

export const FlagIcon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  color = PRIMARY_TEXT,
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      testID="flagIcon"
    >
      <Path
        fill={color}
        d="M19 4H6V2H4v18H3v2h4v-2H6v-5h13a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-1 9H6V6h12v7z"
      />
    </Svg>
  );
};
