import type * as FeedsState from './feeds.types';

export const FeedsInitialState: FeedsState.FeedsInitialState = {
  isLoading: false,
  homeFeeds: {
    id: 1,
    postInfos: [],
    nextPage: 0,
    hasMore: false,
  },
  freshFeeds: {
    id: 2,
    postInfos: [],
    nextPage: 0,
    hasMore: false,
  },
  trendingFeeds: {
    id: 3,
    postInfos: [],
    nextPage: 0,
    hasMore: false,
  },
};
