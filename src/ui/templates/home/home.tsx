import { FlatList, View, ViewToken } from 'react-native';
import { HeaderTab, MediaDisplay, PostPanel, PostPanelProps } from '@ui';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  AppRootState,
  fetchFeedPosts,
  useAppDispatch,
  useAppSelector,
} from '@data-source';
import { PostInfo } from '@data-source/rtk/feeds/feeds.types';

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
  const dispatch = useAppDispatch();
  const TabsTitle = ['Home', 'Fresh', 'Trending'];
  const [activeTab, setActiveTab] = useState(TabsTitle[0]);
  const [visibleItems, setVisibleItems] = useState([]);
  const [postFeeds, setPostFeeds] = useState<PostPanelProps[]>([]);
  const { homeFeeds, freshFeeds, trendingFeeds } = useAppSelector(
    (state: AppRootState) => state.feeds,
  );
  const postByTabs: Record<string, PostInfo[]> = useMemo(
    () => ({
      Home: homeFeeds.postInfos || [],
      Fresh: freshFeeds.postInfos || [],
      Trending: trendingFeeds.postInfos || [],
    }),
    [homeFeeds, freshFeeds, trendingFeeds],
  );
  const nextPageByTabs: Record<string, number> = useMemo(
    () => ({
      Home: homeFeeds.nextPage || 0,
      Fresh: freshFeeds.nextPage || 0,
      Trending: trendingFeeds.nextPage || 0,
    }),
    [homeFeeds, freshFeeds, trendingFeeds],
  );
  const hasMoreByTabs: Record<string, boolean> = useMemo(
    () => ({
      Home: homeFeeds.hasMore || true,
      Fresh: freshFeeds.hasMore || true,
      Trending: trendingFeeds.hasMore || true,
    }),
    [homeFeeds, freshFeeds, trendingFeeds],
  );
  const mediaControls = useRef<MediaDisplay[]>([]);

  const fetchNextPage = () => {
    const tabIndex = TabsTitle.findIndex((tab) => tab === activeTab) + 1;
    dispatch(
      fetchFeedPosts({
        id: tabIndex,
        page: nextPageByTabs[activeTab],
      }),
    );
  };

  const onEndReachedHandler = () => {
    const hasMore = hasMoreByTabs[activeTab];
    if (hasMore) {
      fetchNextPage();
    }
  };

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

  const renderPostItem = ({
    item,
    index,
  }: {
    item: PostPanelProps;
    index: number;
  }) => {
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

  useEffect(() => {
    fetchNextPage();
  }, [activeTab]);

  useEffect(() => {
    const newPostFeeds = postByTabs[activeTab].map((post) => {
      if (post.mediaType === 0) {
        console.log(post.media);
      }
      return {
        avatar: { uri: post.userAvatar },
        username: post.userUsername,
        title: post.title,
        source: { uri: post.media },
        hashtags: post.hashtags,
        upVote: post.totalUpvotes,
        comment: post.totalComments,
        isVideo: post.mediaType === 1,
      };
    }) as PostPanelProps[];

    setPostFeeds(newPostFeeds);
  }, [homeFeeds, freshFeeds, trendingFeeds]);

  return (
    <View>
      <HeaderTab
        labels={TabsTitle}
        activeTab={activeTab}
        onPress={setActiveTab}
      />
      <FlatList
        data={postFeeds}
        keyExtractor={(_item, index) => index.toString()}
        onViewableItemsChanged={onViewableItemsChangedHandler}
        pagingEnabled
        renderItem={renderPostItem}
        snapToAlignment="start"
        viewabilityConfig={{ itemVisiblePercentThreshold: 45 }}
        onEndReached={onEndReachedHandler}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};
