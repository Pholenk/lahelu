import { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';

export const useMediaDimensions = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const { width: screenWidth } = Dimensions.get('screen');
    setHeight(screenWidth * 0.9);
    setWidth(screenWidth);

    return () => {
      setHeight(0);
      setWidth(0);
    };
  }, []);

  return {
    width,
    height,
  };
};
