import {
  ButtonIcon,
  DrawerMenuItem,
  DropDownStyle,
  TriangleDownIcon,
  TriangleUpIcon,
} from '@ui';
import { useCallback, useState } from 'react';
import { View } from 'react-native';

type DropDownItem = {
  id: string;
  label: string;
  icon?: React.JSX.Element;
};

type DropDownDrawerProps = {
  label: string;
  items: DropDownItem[];
  activeMenu: string;
};

export const DropDownDrawer = (props: DropDownDrawerProps) => {
  const { label, items, activeMenu } = props;
  const [isExpanded, setIsExpanded] = useState(
    items.findIndex((item) => item.id === activeMenu) > 0,
  );

  const HeadDropDown = useCallback(() => {
    const icon = isExpanded ? <TriangleUpIcon /> : <TriangleDownIcon />;
    return (
      <ButtonIcon
        label={label}
        rightIcon={icon}
        style={{
          button: DropDownStyle.header,
          label: DropDownStyle.headerLabel,
        }}
        onPress={() => {
          setIsExpanded((currentState) => !currentState);
        }}
      />
    );
  }, [isExpanded, label]);

  const DropDownChildren = useCallback(() => {
    if (isExpanded) {
      return (
        <>
          {items.map((dropdownItem) => (
            <DrawerMenuItem
              {...dropdownItem}
              isActive={dropdownItem.id === props.activeMenu}
              key={`${dropdownItem.id}`}
            />
          ))}
        </>
      );
    }

    return null;
  }, [isExpanded, items]);

  return (
    <View style={DropDownStyle.container}>
      <HeadDropDown />
      <DropDownChildren />
    </View>
  );
};
