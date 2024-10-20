import { configureStore } from '@reduxjs/toolkit';
import Reducers from './reducers';
import { useDispatch, useSelector } from 'react-redux';

export const Store = configureStore({
  reducer: Reducers,
});

export type AppRootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
export const useAppSelector = useSelector.withTypes<AppRootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
