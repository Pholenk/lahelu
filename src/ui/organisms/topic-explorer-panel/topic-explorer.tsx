import { ButtonIcon, StarIcon } from '@ui';
import { Image, Text, View } from 'react-native';
import { TopicExplorerStyle } from './topic-explorer-style';

export type DrawerMenuTopicExplorerItem = {
  name: string;
  id: string;
  img?: string;
};

type TopicExplorerPanelProps = {
  menus: DrawerMenuTopicExplorerItem[];
  onPress?: (id: DrawerMenuTopicExplorerItem['id']) => void;
};

export const TopicExplorerPanel = (props: TopicExplorerPanelProps) => {
  const { menus } = props;

  const PanelTitle = () => {
    const title = menus.find((menu) => menu?.img === undefined);
    return (
      <View style={TopicExplorerStyle.titleBox}>
        <Text style={TopicExplorerStyle.title}>{title?.name ?? ''}</Text>
      </View>
    );
  };

  const MenuItem = ({
    name,
    id,
    ...menuItemProps
  }: DrawerMenuTopicExplorerItem) => {
    const hasNoImage = menuItemProps?.img === undefined;
    if (hasNoImage) {
      return null;
    }
    const leftIcon = (
      <Image
        source={{ uri: menuItemProps?.img ?? '' }}
        style={TopicExplorerStyle.menuImage}
      />
    );
    const rightIcon = (
      <View style={TopicExplorerStyle.menuIconBox}>
        <StarIcon />
      </View>
    );
    const styling = {
      button: TopicExplorerStyle.menuItem,
      label: TopicExplorerStyle.menuItemLabel,
    };
    return (
      <ButtonIcon
        leftIcon={leftIcon}
        label={name}
        rightIcon={rightIcon}
        style={styling}
      />
    );
  };

  return (
    <View style={TopicExplorerStyle.container}>
      <PanelTitle />
      {props?.menus?.map((menu) => (
        <MenuItem {...menu} key={`${menu.id}`} />
      ))}
    </View>
  );
};
