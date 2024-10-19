export type FeedRequest = {
  id: number;
  page: number;
};

export type FeedsResponse = {
  id: number;
  postInfos?: PostInfo[];
  nextPage: number;
  hasMore: boolean;
};

export type PostInfo = {
  postID: string;
  userID: string;
  title: string;
  totalUpvotes: number;
  totalDownvotes: number;
  totalComments: number;
  createTime: number;
  feed: number;
  searchVector: string;
  mediaWidth: number;
  mediaHeight: number;
  media: string;
  mediaThumbnail?: string;
  sensitive: boolean;
  mediaType: number;
  hashtags: string[];
  totalCoins: number;
  ageTime: number;
  userUsername: string;
  userAvatar: string;
  userPrivilege: number;
  userPlusTime: number;
};

export type FeedsInitialState = {
  isLoading: boolean;
  homeFeeds: FeedsResponse;
  freshFeeds: FeedsResponse;
  trendingFeeds: FeedsResponse;
};
