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

    console.log(payload, '<<<<<<<<< payload');
    console.log(response, '<<<<<<<<< response');

    return {
      ...response,
      id: payload.feed,
    };
  } catch (e) {
    console.log(e, '<<<<<<<<< error');
    return thunkAPI.rejectWithValue(e);
  }
});
