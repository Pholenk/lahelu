import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {
  ClockIcon,
  CoinIcon,
  CupIcon,
  DiscordIcon,
  DonateIcon,
  GraphUpIcon,
  HomeIcon,
  ImagesIcon,
  LoginPanel,
  MainMenuPanel,
  MedalIcon,
  RandomizedArrowIcon,
  TopicExplorerPanel,
  TopicsIcon,
} from '@ui';
import { useCallback, useState } from 'react';
import { SidePanelMenu, TopicExplorerMenu, WHITE } from '@utils';
import { DropDownDrawer } from '../drop-down-drawer';
import { DrawerMenuItem } from 'types/menu';

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
  rank: {
    active: <CupIcon color={WHITE} />,
    default: <CupIcon />,
  },
  saved: {
    active: <ImagesIcon color={WHITE} />,
    default: <ImagesIcon />,
  },
  random: {
    active: <RandomizedArrowIcon color={WHITE} />,
    default: <RandomizedArrowIcon />,
  },
  donate: {
    active: <DonateIcon color={WHITE} />,
    default: <DonateIcon />,
  },
  achievement: {
    active: <MedalIcon color={WHITE} />,
    default: <MedalIcon />,
  },
  coin: {
    active: <CoinIcon color={WHITE} />,
    default: <CoinIcon />,
  },
  discord: {
    active: <DiscordIcon color={WHITE} />,
    default: <DiscordIcon />,
  },
};

export const CustomSideDrawer = (props: DrawerContentComponentProps) => {
  const [activeMenu, setActiveMenu] = useState('home');

  const mainMenus = useCallback(() => {
    return [...SidePanelMenu]
      .filter((menuItem) => typeof menuItem?.level === 'undefined')
      .map((menu) => {
        const isActive = activeMenu === menu.id;
        return {
          ...menu,
          label: menu.name,
          icon: menuIcons?.[menu.id]?.[isActive ? 'active' : 'default'],
        };
      });
  }, [props]);
  const dropDownMenus = useCallback(
    (menus: DrawerMenuItem[], parentId: DrawerMenuItem['id']) => {
      return [...menus]
        .filter(
          (menuItem) => menuItem.level === 1 && menuItem.childOf === parentId,
        )
        .map((menuItem) => {
          const isActive = activeMenu === menuItem.id;
          const defaultItem = { ...menuItem };
          return {
            ...defaultItem,
            label: defaultItem.name,
            icon: menuIcons?.[menuItem?.id]?.[isActive ? 'active' : 'default'],
          };
        });
    },
    [props],
  );

  return (
    <DrawerContentScrollView {...props}>
      <LoginPanel />
      <MainMenuPanel
        menus={mainMenus()}
        activeMenu={activeMenu}
        onPress={undefined}
      />
      <DropDownDrawer
        items={dropDownMenus(SidePanelMenu, 'other')}
        label={SidePanelMenu.find((item) => item.id === 'other')?.name ?? ''}
        activeMenu={activeMenu}
      />
      <DropDownDrawer
        items={dropDownMenus(SidePanelMenu, 'explore')}
        label={SidePanelMenu.find((item) => item.id === 'explore')?.name ?? ''}
        activeMenu={activeMenu}
      />
      <TopicExplorerPanel menus={TopicExplorerMenu} onPress={undefined} />
    </DrawerContentScrollView>
  );
};
