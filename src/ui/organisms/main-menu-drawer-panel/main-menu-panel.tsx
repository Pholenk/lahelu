import { DrawerMainMenuItem, MenuItemProps, MenuProps } from '@ui';

type MainMenuPanelProps = {
  menus: MenuProps[];
  activeMenu: string;
  onPress: MenuItemProps['onPress'];
};

export const MainMenuPanel = (props: MainMenuPanelProps) => {
  return (
    <>
      {props?.menus?.map((menu) => (
        <DrawerMainMenuItem
          {...menu}
          isActive={menu.id === props.activeMenu}
          key={`${menu.id}`}
        />
      ))}
    </>
  );
};
