import { FlatList, View, ViewToken } from 'react-native';
import { HeaderTab, MediaDisplay, PostPanel } from '@ui';
import { useRef, useState } from 'react';

const mockPost = [
  {
    avatar: { uri: 'https://cache.lahelu.com/avatar-UCUx7hYrJ-94089' },
    username: 'aku_jawir_asik_1',
    title: 'Satoru vincent vs homeless ryomen',
    hashtags: ['anime', 'vincent', 'kocak'],
    upVote: 6,
    comment: 10,
    source: { uri: 'https://cache.lahelu.com/video-PGAd1nPmU-57693' },
  },
  {
    avatar: { uri: 'https://cache.lahelu.com/avatar-UK1gJKhXB-50102' },
    username: 'aku_jawir_asik_2',
    title: 'Satoru vincent vs homeless ryomen',
    hashtags: ['anime', 'vincent', 'kocak'],
    upVote: 6,
    comment: 10,
    source: { uri: 'https://cache.lahelu.com/video-PZQzP18l8-37093' },
  },
];

type OnItemViewableItemsChangedType = {
  viewableItems: ViewToken[];
  changed: ViewToken[];
};

export const HomeTemplate = () => {
  const TabsTitle = ['Home', 'Fresh', 'Trending'];
  const [activeTab, setActiveTab] = useState(TabsTitle[0]);
  const [visibleItems, setVisibleItems] = useState([]);

  const mediaControls = useRef<MediaDisplay[]>([]);

  const onViewableItemsChangedHandler = ({
    viewableItems,
  }: OnItemViewableItemsChangedType) => {
    mediaControls.current.forEach((mediaControl, index) =>
      viewableItems.findIndex(
        (viewableItem) => viewableItem.key === `${index}`,
      ) >= 0
        ? mediaControl.play()
        : mediaControl.pause(),
    );
  };

  const renderPostItem = ({ item, index }) => {
    return (
      <PostPanel
        {...item}
        key={`${index}`}
        ref={(mediaPlayer: MediaDisplay) =>
          (mediaControls.current[index] = mediaPlayer)
        }
      />
    );
  };

  return (
    <View>
      <HeaderTab
        labels={TabsTitle}
        activeTab={activeTab}
        onPress={setActiveTab}
      />
      <FlatList
        data={mockPost}
        keyExtractor={(_item, index) => index.toString()}
        onViewableItemsChanged={onViewableItemsChangedHandler}
        pagingEnabled
        renderItem={renderPostItem}
        snapToAlignment="start"
        viewabilityConfig={{ itemVisiblePercentThreshold: 45 }}
      />
    </View>
  );
};
