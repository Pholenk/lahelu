import { DrawerMenuItem, MenuItemProps, MenuProps } from '@ui';
import { View } from 'react-native';
import { MainMenuPanelStyle } from './main-menu-panel-style';

type MainMenuPanelProps = {
  menus: MenuProps[];
  activeMenu: string;
  onPress: MenuItemProps['onPress'];
};

export const MainMenuPanel = (props: MainMenuPanelProps) => {
  return (
    <View style={MainMenuPanelStyle.container}>
      {props?.menus?.map((menu) => (
        <DrawerMenuItem
          {...menu}
          isActive={menu.id === props.activeMenu}
          key={`${menu.id}`}
        />
      ))}
    </View>
  );
};
