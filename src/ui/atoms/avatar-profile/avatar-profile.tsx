import { Image, ImageSourcePropType, View } from 'react-native';
import { AvatarProfileStyles } from './avatar-profile-style';

type AvatarProfileProps = {
  source: ImageSourcePropType;
};

export const AvatarProfile = (props: AvatarProfileProps) => {
  const { source } = props;

  return (
    <View style={AvatarProfileStyles.container}>
      <Image source={source} style={AvatarProfileStyles.image} />
    </View>
  );
};
