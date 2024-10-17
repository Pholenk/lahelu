import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {
  ClockIcon,
  GraphUpIcon,
  HomeIcon,
  LoginPanel,
  MainMenuPanel,
  TopicsIcon,
} from '@ui';
import { useCallback, useState } from 'react';
import { SidePanelMenu, WHITE } from '@utils';

export const CustomSideDrawer = (props: DrawerContentComponentProps) => {
  const [activeMenu, setActiveMenu] = useState('home');
  const menuIcons: {
    [K: string]: { active: React.JSX.Element; default: React.JSX.Element };
  } = {
    home: {
      active: <HomeIcon color={WHITE} />,
      default: <HomeIcon />,
    },
    fresh: {
      active: <ClockIcon color={WHITE} />,
      default: <ClockIcon />,
    },
    trending: {
      active: <GraphUpIcon color={WHITE} />,
      default: <GraphUpIcon />,
    },
    topic: {
      active: <TopicsIcon color={WHITE} />,
      default: <TopicsIcon />,
    },
  };
  const mainMenus = useCallback(() => {
    return [...SidePanelMenu].map((menu) => {
      const isActive = activeMenu === menu.id;
      return {
        ...menu,
        label: menu.name,
        icon: menuIcons?.[menu.id]?.[isActive ? 'active' : 'default'],
      };
    });
  }, [props]);

  return (
    <DrawerContentScrollView {...props}>
      <LoginPanel />
      <MainMenuPanel
        menus={mainMenus()}
        activeMenu={activeMenu}
        onPress={undefined}
      />
    </DrawerContentScrollView>
  );
};
