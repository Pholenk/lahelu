import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FeedsInitialState } from './feeds.initialstate';
import type * as FeedsInitialStateType from './feeds.types';
import { fetchFeedPosts } from './feeds.thunk';

const combinePostInfo = (
  defaultPosts: FeedsInitialStateType.FeedsResponse,
  payload: FeedsInitialStateType.FeedsResponse['postInfos'],
  nextPage: FeedsInitialStateType.FeedsResponse['nextPage'],
) => {
  let combinedResult: FeedsInitialStateType.FeedsResponse['postInfos'] = [];

  if (nextPage === 1) {
    combinedResult = payload || [];
  }
  if (defaultPosts.nextPage !== nextPage) {
    combinedResult = [...(defaultPosts.postInfos || []), ...(payload || [])];
  }

  return combinedResult;
};

export const feeds = createSlice({
  name: 'feeds',
  initialState: FeedsInitialState,
  reducers: {
    resetHomeFeeds: (state) => {
      state = FeedsInitialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFeedPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFeedPosts.fulfilled, (state, action) => {
        const postInfosResponse = action.payload?.postInfos ?? [];
        const payload = { ...action.payload };
        delete payload.postInfos;

        switch (payload.id) {
          case 1:
            state.homeFeeds = {
              ...payload,
              postInfos: [
                ...combinePostInfo(
                  state.homeFeeds ?? [],
                  postInfosResponse,
                  payload.nextPage,
                ),
              ],
            };
            break;
          case 2:
            state.freshFeeds = {
              ...payload,
              postInfos: [
                ...combinePostInfo(
                  state.freshFeeds ?? [],
                  postInfosResponse,
                  payload.nextPage,
                ),
              ],
            };
            break;
          case 3:
            state.trendingFeeds = {
              ...payload,
              postInfos: [
                ...combinePostInfo(
                  state.trendingFeeds ?? [],
                  postInfosResponse,
                  payload.nextPage,
                ),
              ],
            };
            break;
          default:
            state = state;
            break;
        }
      });
  },
});

export const { resetHomeFeeds } = feeds.actions;
export const feedsReducer = feeds.reducer;
