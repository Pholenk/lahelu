import { DrawerMenuItem, MenuItemProps, MenuProps } from '@ui';
import { View } from 'react-native';
import { MainMenuPanelStyle } from './main-menu-panel-style';

type MainMenuPanelProps = {
  menus: MenuProps[];
  activeMenu: string;
  onPress: MenuItemProps['onPress'];
};

export const MainMenuPanel = (props: MainMenuPanelProps) => {
  const onPressHandler: MenuItemProps['onPress'] = (id) => {
    if (typeof props?.onPress === 'function') {
      props?.onPress(id);
    }
  };

  return (
    <View style={MainMenuPanelStyle.container}>
      {props?.menus?.map((menu) => (
        <DrawerMenuItem
          {...menu}
          isActive={menu.id === props.activeMenu}
          key={`${menu.id}`}
          onPress={onPressHandler}
        />
      ))}
    </View>
  );
};
