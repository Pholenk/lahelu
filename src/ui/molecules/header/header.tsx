import { FC } from 'react';
import { View } from 'react-native';
import { HeaderStyle } from './header-style';
import { ButtonIcon, FindIcon, HamburgerIcon, HeaderLogo } from '@ui';
import { DrawerActions, useNavigation } from '@react-navigation/native';

export const Header: FC = () => {
  const navigation = useNavigation();

  const toggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <View style={HeaderStyle.container}>
      <ButtonIcon leftIcon={<HamburgerIcon />} onPress={toggleDrawer} />
      <View style={HeaderStyle.titleBox}>
        <HeaderLogo />
      </View>
      <ButtonIcon leftIcon={<FindIcon />} />
    </View>
  );
};
