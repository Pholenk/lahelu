import { createAsyncThunk } from '@reduxjs/toolkit';
import * as FeedState from './feeds.types';
import { AppRootState } from '@data-source/store';
import { API } from '@utils';

export const fetchFeedPosts = createAsyncThunk<
  FeedState.FeedsResponse,
  FeedState.FeedRequest,
  {
    state: AppRootState;
  }
>('fetchFeedPosts', async (payload: FeedState.FeedRequest, thunkAPI) => {
  try {
    const { response } = await API<FeedState.FeedsResponse>(
      'GET',
      '/post/get-posts',
      payload,
    );

    return {
      ...response,
      id: payload.id,
    };
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});
