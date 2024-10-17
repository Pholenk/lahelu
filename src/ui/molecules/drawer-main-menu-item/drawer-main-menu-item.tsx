import { ButtonIcon } from '@ui';
import { useMemo } from 'react';
import { MainMenuItemStyle } from './main-menu-item-style';

export type MenuProps = {
  id: string;
  label: string;
  icon?: React.JSX.Element;
};

export type MenuItemProps = {
  isActive: boolean;
  onPress?: (id: MenuProps['id']) => void;
};

export const DrawerMainMenuItem = (props: MenuItemProps & MenuProps) => {
  const { id, label, icon, isActive, onPress } = props;
  const styles = useMemo(() => {
    const buttonStyle = props.isActive
      ? { ...MainMenuItemStyle.button, ...MainMenuItemStyle.buttonActive }
      : MainMenuItemStyle.button;
    const labelStyle = props.isActive
      ? { ...MainMenuItemStyle.label, ...MainMenuItemStyle.labelActive }
      : MainMenuItemStyle.label;

    return {
      button: buttonStyle,
      label: labelStyle,
      icon: MainMenuItemStyle.icon,
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
