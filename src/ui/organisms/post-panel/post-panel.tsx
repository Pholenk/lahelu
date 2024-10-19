import { forwardRef } from 'react';
import { ImageSourcePropType, Text, View } from 'react-native';
import { PostPanelStyle } from './post-panel-style';
import {
  AvatarProfile,
  MediaDisplay,
  PostFooterButtons,
  PostHashtagCollections,
  PostOptions,
} from '@ui';
import { PostOptionsConstant } from '@utils';

type PostPanelProps = {
  avatar: ImageSourcePropType;
  username: string;
  title: string;
  source: ImageSourcePropType;
  hashtags: string[];
  upVote: number;
  comment: number;
};

export const PostPanel = forwardRef<MediaDisplay, PostPanelProps>(
  ({ avatar, username, title, source, hashtags, upVote, comment }, ref) => {
    return (
      <View style={PostPanelStyle.container}>
        <View style={[PostPanelStyle.headerWrapper, PostPanelStyle.row]}>
          <View style={[PostPanelStyle.avatarBox, PostPanelStyle.row]}>
            <AvatarProfile source={avatar} />
            <Text style={PostPanelStyle.username}>{username}</Text>
          </View>
          <View style={PostPanelStyle.optionBox}>
            <PostOptions options={PostOptionsConstant} title={'Pilihan'} />
          </View>
        </View>
        <View style={PostPanelStyle.contentWrapper}>
          <View style={PostPanelStyle.titleBox}>
            <Text style={PostPanelStyle.title}>{title}</Text>
          </View>
          <MediaDisplay isVideo={true} source={source} ref={ref} />
        </View>
        <View style={PostPanelStyle.footerWrapper}>
          <PostHashtagCollections hashtags={hashtags} />
          <PostFooterButtons upVote={upVote} comment={comment} />
        </View>
      </View>
    );
  },
);
