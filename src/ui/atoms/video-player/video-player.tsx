import Slider from '@react-native-community/slider';
import { PRIMARY, useMediaDimensions, WHITE } from '@utils';
import { FC, useMemo, useRef, useState } from 'react';
import { ImageSourcePropType, View } from 'react-native';
import Video, {
  OnLoadData,
  OnProgressData,
  VideoRef,
} from 'react-native-video';
import { VideoPlayerStyle } from './video-player-style';

type VideoPlayerProps = {
  isPaused: boolean;
  source: Omit<ImageSourcePropType, number>;
};

export const VideoPlayer: FC<VideoPlayerProps> = ({ source, isPaused }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [currentProgress, setCurrentProgress] = useState(0);
  const videoPlayer = useRef<VideoRef>(null);
  const { height: mediaHeight, width: mediaWidth } = useMediaDimensions();
  const videoStyles = {
    height: mediaHeight,
  };
  const sliderStyles = {
    top: mediaHeight - 2,
    width: mediaWidth,
  };

  const handleOnProgress = ({
    currentTime,
    seekableDuration,
  }: OnProgressData) => {
    const progress = currentTime / seekableDuration;
    setCurrentProgress(progress);
  };

  const handleOnLoad = ({ currentTime, duration }: OnLoadData) => {
    const progress = currentTime !== 0 ? currentTime / duration : 0;
    setCurrentProgress(progress);
  };

  const handleOnEnd = () => {
    setCurrentProgress(0);
  };

  return (
    <View style={[VideoPlayerStyle.container, videoStyles]}>
      <Video
        disableFocus={true}
        ref={videoPlayer}
        source={source}
        style={[VideoPlayerStyle.videoPlayer, videoStyles]}
        paused={isPaused}
        resizeMode="contain"
        controls={false}
        repeat={true}
        onLoad={handleOnLoad}
        onProgress={handleOnProgress}
        onEnd={handleOnEnd}
        volume={isMuted ? 0 : 1.0}
      />
      <Slider
        style={[VideoPlayerStyle.slider, sliderStyles]}
        minimumValue={0}
        maximumValue={1}
        value={currentProgress}
        minimumTrackTintColor={PRIMARY}
        maximumTrackTintColor={WHITE}
        thumbTintColor={'transparent'}
      />
    </View>
  );
};
