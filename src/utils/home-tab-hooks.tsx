import {
  AppRootState,
  setActiveTab,
  useAppDispatch,
  useAppSelector,
} from '@data-source';
import { useEffect, useState } from 'react';

export const useActiveHomeTab = (): [string, (key: string) => void] => {
  const { activeTab } = useAppSelector((state: AppRootState) => state.feeds);
  const dispatch = useAppDispatch();
  const [activeHomeTab, setActiveHomeTab] = useState('');

  useEffect(() => {
    setActiveHomeTab(activeTab);
  }, [activeTab]);

  return [
    activeHomeTab,
    (key: string) => {
      dispatch(setActiveTab(key));
    },
  ];
};
