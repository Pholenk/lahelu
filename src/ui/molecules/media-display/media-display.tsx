import {
  forwardRef,
  ForwardRefExoticComponent,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { Image, ImageSourcePropType, View } from 'react-native';
import { MediaDisplayStyle } from './media-display-style';
import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view';
import { VideoPlayer } from '@ui';
import { useMediaDimensions } from '@utils';

type MediaDisplayProps = {
  isVideo: boolean;
  source: ImageSourcePropType;
};

export type MediaDisplay = {
  play: () => void;
  pause: () => void;
};

export const MediaDisplay = forwardRef<MediaDisplay, MediaDisplayProps>(
  ({ isVideo, source }, ref) => {
    const [isPaused, setIsPaused] = useState(true);
    const { height, width } = useMediaDimensions();
    const zoomableViewRef = useRef<ReactNativeZoomableView>(null);

    useImperativeHandle(ref, () => ({
      play: () => setIsPaused(false),
      pause: () => setIsPaused(true),
    }));

    const handleZoomEnd = () => {
      if (zoomableViewRef?.current) {
        zoomableViewRef.current.zoomTo(1);
      }
    };

    return (
      <View style={MediaDisplayStyle.container}>
        <View style={MediaDisplayStyle.content}>
          <ReactNativeZoomableView
            ref={zoomableViewRef}
            bindToBorders
            contentHeight={height}
            contentWidth={width}
            doubleTapDelay={1}
            maxZoom={12}
            minZoom={1}
            initialZoom={1}
            panEnabled={false}
            onZoomEnd={handleZoomEnd}
          >
            {isVideo ? (
              <VideoPlayer isPaused={isPaused} source={source} />
            ) : (
              <Image source={source} style={{}} resizeMode="contain" />
            )}
          </ReactNativeZoomableView>
        </View>
      </View>
    );
  },
);
