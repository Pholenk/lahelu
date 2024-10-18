import { ButtonIcon } from '@ui';
import { useMemo } from 'react';
import { DrawerMenuItemStyle } from './drawer-menu-item-style';

export type MenuProps = {
  id: string;
  label: string;
  icon?: React.JSX.Element;
};

export type MenuItemProps = {
  isActive: boolean;
  onPress?: (id: MenuProps['id']) => void;
};

export const DrawerMenuItem = (props: MenuItemProps & MenuProps) => {
  const { id, label, icon, isActive, onPress } = props;
  const styles = useMemo(() => {
    const buttonStyle = props.isActive
      ? { ...DrawerMenuItemStyle.button, ...DrawerMenuItemStyle.buttonActive }
      : DrawerMenuItemStyle.button;
    const labelStyle = props.isActive
      ? { ...DrawerMenuItemStyle.label, ...DrawerMenuItemStyle.labelActive }
      : DrawerMenuItemStyle.label;

    return {
      button: buttonStyle,
      label: labelStyle,
      icon: DrawerMenuItemStyle.icon,
    };
  }, [props]);

  const onPressHandler = () => {
    if (typeof props?.onPress === 'function') {
      props?.onPress(id);
    }
  };

  return (
    <ButtonIcon
      key={id}
      label={label}
      leftIcon={icon}
      onPress={onPressHandler}
      style={styles}
    />
  );
};
