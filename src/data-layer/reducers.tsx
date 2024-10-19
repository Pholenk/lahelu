import { combineReducers } from '@reduxjs/toolkit';
import { feedsReducer } from './rtk';

const Reducers = combineReducers({
  feeds: feedsReducer,
});

export type RootReducers = ReturnType<typeof Reducers>;
export default Reducers;
